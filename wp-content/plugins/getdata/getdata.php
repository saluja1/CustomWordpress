<?php
/**
* Plugin Name: Get Data
* Plugin URI: https://www.abc.com/
* Description: This is the plugin to get data.
* Version: 1.0
* Author: Amit Saluja
* Author URI: http://abcuser.com/
**/
?>


<?php
	function theshortcodeFunction($atts) {
	    $args = array(  
	        'post_type' => $atts['post'],
	        'posts_per_page' => $atts['perpage']
	    );
	    $loop = new WP_Query( $args ); 
	    while ( $loop->have_posts() ) : $loop->the_post(); 
	        print the_title(); 
	    endwhile;
	    wp_reset_postdata(); 
	}

	add_shortcode('theDataShortcode', 'theshortcodeFunction');

	function api_Callback_Function(WP_REST_Request $request ) {
		global $wpdb;
		if ($request->get_param( 'postType' ) == "country") {
			$results = $wpdb->get_results( "SELECT * FROM wp_country");
			if ($request->get_param( 'postId' ) == 0) {
				return $results;
			} else {
				return $results[$request->get_param( 'postId' )];			
			}

		} elseif ($request->get_param( 'postType' ) == "authentication") {
			$email = $request->get_param("uemail");
			if ( email_exists( $email ) ){  
			    $user = get_user_by("email", $email);
			    $username = $user->user_login;
			    $credentials = [
			        'user_login' => $username,
			        'user_password' => $request->get_param("pwd"),
			        'rememberme' => false,
			    ];
			    $signon = wp_signon($credentials, true); // true - use HTTP only cookie

			    if(is_wp_error($signon, true)){
					return new WP_Error( 'password not Match', 'There is no email with this password.', array('status' => 404));
	     		} else {
			   		return "Welcome user.";
	     		}

			}else{
				return new WP_Error( 'Email not Exist', 'There is no email.', array('status' => 404) );
			}
		} else {
		    $args = array(
		        'post_type' => $request->get_param( 'postType' ),
				'p' => $param = $request->get_param( 'postId' ), 
		    );
		    $posts = get_posts($args);
		    if (empty($posts)) {
			    return new WP_Error( 'empty_category', 'there is no post in this category', array('status' => 404) );
		    }
		    $response = new WP_REST_Response($posts);
		    $response->set_status(200);

		    return $response;
		}
	}

	add_action('rest_api_init', function () {
	  register_rest_route( 'getdata', 'posts/(?P<postId>\d+)',array(
	        'methods'  => 'POST',
	        'callback' => 'api_Callback_Function',
	        'permission_callback' => '__return_true',
		   'args' => [
		        'postId'
		    ]
	      ));
	});

?>