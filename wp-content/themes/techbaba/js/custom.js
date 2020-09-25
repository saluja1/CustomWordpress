var particleHome = {
	creatingParticles: function(){				
		particlesJS("particles-js", {
		  "particles": {
		    "number": {
		      "value": 200,
		      "density": {
		        "enable": true,
		        "value_area": 800
		      }
		    },
		    "color": {
		      "value": "#ffffff"
		    },
		    "shape": {
		      "type": "circle",
		      "stroke": {
		        "width": 0,
		        "color": "#000000"
		      },
		      "polygon": {
		        "nb_sides": 5
		      },
		      "image": {
		        "src": "img/github.svg",
		        "width": 100,
		        "height": 100
		      }
		    },
		    "opacity": {
		      "value": 0.5,
		      "random": false,
		      "anim": {
		        "enable": false,
		        "speed": 1,
		        "opacity_min": 0.1,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 2,
		      "random": true,
		      "anim": {
		        "enable": false,
		        "speed": 40,
		        "size_min": 0.1,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": true,
		      "distance": 150,
		      "color": "#ffffff",
		      "opacity": 0.4,
		      "width": 1
		    },
		    "move": {
		      "enable": true,
		      "speed": 2,
		      "direction": "none",
		      "random": false,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": false,
		      "attract": {
		        "enable": false,
		        "rotateX": 600,
		        "rotateY": 1200
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "canvas",
		    "events": {
		      "onhover": {
		        "enable": true,
		        "mode": "grab"
		      },
		      "onclick": {
		        "enable": true,
		        "mode": "push"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 150,
		        "line_linked": {
		          "opacity": 1
		        }
		      },
		      "bubble": {
		        "distance": 400,
		        "size": 40,
		        "duration": 2,
		        "opacity": 8,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 200,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 2
		      }
		    }
		  },
		  "retina_detect": true
		});

	},
	displayHeading: function(){
	  	$( "#home .headingText" ).animate({
		    opacity: 1,
		    right: "50%"
		  	}, 1000, function() {
		    // Animation complete.
		});
	},
	displayParticleDiv: function(){
	  	$( "#particles-js" ).animate({
		    left: "0"
		  	}, 1000, function() {
		    // Animation complete.
		});
	},
	displayHeadingCup: function(){
	  	$( "#home .headingCup" ).animate({
		    opacity: 1,
		    left: "35%"
		  	}, 1000, function() {
		    // Animation complete.
		});
	},
	displayNavBar: function(){
	  	$( "#masthead" ).animate({
		    bottom: 0
		  	}, 1000, function() {
		    // Animation complete.
		});

	}
}
var particleAbout = {
	creatingAboutParticles: function(){
		particlesJS("aboutParticles-js", {
		  "particles": {
		    "number": {
		      "value": 400,
		      "density": {
		        "enable": true,
		        "value_area": 500
		      }
		    },
		    "color": {
		      "value": "#ffffff"
		    },
		    "shape": {
		      "type": "star",
		      "stroke": {
		        "width": 0,
		        "color": "#f9f9f9"
		      },
		      "polygon": {
		        "nb_sides": 1
		      },
		    },
		    "opacity": {
		      "value": 1,
		      "random": false,
		      "anim": {
		        "enable": false,
		        "speed": 0.5,
		        "opacity_min": 0.3,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 5,
		      "random": true,
		      "anim": {
		        "enable": false,
		        "speed": 6,
		        "size_min": 0.4,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": true,
		      "distance": 50,
		      "color": "#ffffff",
		      "opacity": 0.4,
		      "width": 1
		    },
		    "move": {
		      "enable": true,
		      "speed": 2,
		      "direction": "none",
		      "random": false,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": true,
		      "attract": {
		        "enable": true,
		        "rotateX": 600,
		        "rotateY": 1200
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "canvas",
		    "events": {
		      "onhover": {
		        "enable": true,
		        "mode": "grab"
		      },
		      "onclick": {
		        "enable": true,
		        "mode": "push"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 140,
		        "line_linked": {
		          "opacity": 1
		        }
		      },
		      "bubble": {
		        "distance": 400,
		        "size": 40,
		        "duration": 2,
		        "opacity": 8,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 200,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 2
		      }
		    }
		  },
		  "retina_detect": true
		});				
	},
	displayParticleDiv: function(){
	  	$( "#aboutParticles-js" ).animate({
		    left: "0"
		  	}, 1000, function() {
		    // Animation complete.
		});
	},
	displayHeading: function(){
	  	$( "#about .headingText" ).animate({
		    opacity: 1,
		    right: "50%"
		  	}, 1000, function() {
		    // Animation complete.
		});
	},
	displayHeadingCup: function(){
	  	$( "#about .headingCup" ).animate({
		    opacity: 1,
		    left: "35%"
		  	}, 1000, function() {
		    // Animation complete.
		});
	}	
}

var particleContact = {
	creatingContactParticles: function(){
		particlesJS("contactParticles-js", {
    "particles": {
        "number": {
            "value": 400,
            "density": {
                "enable": true,
                "value_area": 552.4033491425909
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "src": "img/github.svg",
                "width": 70,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5782952832645452,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": false
});				
	},
	displayParticleDiv: function(){
	  	$( "#contactParticles-js" ).animate({
		    left: "0"
		  	}, 1000, function() {
		    // Animation complete.
		});
	},
	displayHeading: function(){
	  	$( "#contact .headingText" ).animate({
		    opacity: 1,
		    right: "50%"
		  	}, 1000, function() {
		});
	},
	displayHeadingCup: function(){
	  	$( "#contact .headingCup" ).animate({
		    opacity: 1,
		    left: "35%"
		  	}, 1000, function() {
		});
	}	
}

jQuery(document).ready(function() {

	particleHome.displayNavBar();
	particleHome.creatingParticles();
	particleHome.displayHeading();
	particleHome.displayHeadingCup();
	particleContact.creatingContactParticles();
	particleAbout.creatingAboutParticles();		
	
	$(".home_menu").addClass("active");

	$(".about_menu" ).click(function() {
		$("nav li").removeClass("active");
		$(".about_menu").addClass("active");
		setTimeout(function(){ 
		  	$( "#home, #contact" ).animate({left: "-2000px"}, 1000, function() {});
		  	$( "#home .headingCup, #contact .headingCup" ).animate({left: "-2000px"}, 1000, function() {});
		  	$( "#home .headingText, #contact .headingText" ).animate({right: "-2000px"}, 1000, function() {});
		  	$( "#home #particles-js, #contact #contactParticles-js" ).animate({left: "-2000px"}, 1000, function() {});
		}, 1000);

		particleAbout.displayParticleDiv();
		particleAbout.displayHeading();
		particleAbout.displayHeadingCup();
	});
	$( ".home_menu" ).click(function() {
		$("nav li").removeClass("active");
		$("a").removeClass("active");
		$(".home_menu").addClass("active");

		setTimeout(function(){ 
		  	$( "#about, #contact" ).animate({left: "-2000px"}, 1000, function() {});
		  	$( "#about .headingCup, #contact .headingCup" ).animate({left: "-2000px"}, 1000, function() {});
		  	$( "#about .headingText, #contact .headingText" ).animate({right: "-2000px"}, 1000, function() {});
		  	$( "#about #aboutParticles-js, #contact #contactParticles-js" ).animate({left: "-2000px"}, 1000, function() {});
		}, 1000);
		particleHome.displayParticleDiv();
		particleHome.displayHeading();
		particleHome.displayHeadingCup();
	});
	$( ".contact_menu" ).click(function() {
		$("nav li").removeClass("active");
		$("a").removeClass("active");
		$(".contact_menu").addClass("active");
		setTimeout(function(){ 
		  	$( "#about, #home" ).animate({left: "-2000px"}, 1000, function() {});
		  	$( "#about .headingCup, #home .headingCup" ).animate({left: "-2000px"}, 1000, function() {});
		  	$( "#about .headingText, #home .headingText" ).animate({right: "-2000px"}, 1000, function() {});
		  	$( "#about #aboutParticles-js, #home #particles-js" ).animate({left: "-2000px"}, 1000, function() {});
		}, 1000);
		particleContact.displayParticleDiv();
		particleContact.displayHeading();
		particleContact.displayHeadingCup();
	});

	$(".inquiry-menu").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#inquiry").offset().top
	    }, 1000);
	});

	$(window).on('hashchange', function(e){
	  window.history.pushState("", document.title, window.location.pathname);
	});
	
});
