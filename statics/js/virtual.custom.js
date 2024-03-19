$(document).ready(function () {
	$(".navbar-light .dmenu").hover(
		function () {
			$(this).find(".sm-menu").first().stop(true, true).slideDown(150);
		},
		function () {
			$(this).find(".sm-menu").first().stop(true, true).slideUp(105);
		}
	);
});

$(document).ready(function () {
	$(".megamenu").on("click", function (e) {
		e.stopPropagation();
	});
});






jQuery(document).ready(function () {
	jQuery(".c-slider-init").slick({
	  dots: false,
	  nav: false,
	  arrows: false,
	  infinite: true,
	  speed:1200,
	  autoplaySpeed:3000,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  autoplay: true,
	  draggable: true,
	  pauseOnFocus: false,
	  pauseOnHover: false
	});
  
	jQuery(".slick-current").addClass("initialAnimation");
  
	let transitionSetup = {
	  target: ".slick-list",
	//   enterClass: "u-scale-out",
	  doTransition: function () {
		var slideContainer = document.querySelector(this.target);
		slideContainer.classList.add(this.enterClass);
		jQuery(".slick-current").removeClass("animateIn");
	  },
	  exitTransition: function () {
		var slideContainer = document.querySelector(this.target);
		setTimeout(() => {
		  slideContainer.classList.remove(this.enterClass);
		  jQuery(".slick-current").addClass("animateIn");
		}, 1000);
	  }
	};
  
	var i = 0;
	// On before slide change
	jQuery(".c-slider-init").on(
	  "beforeChange",
	  function (event, slick, currentSlide, nextSlide) {
		if (i == 0) {
		  event.preventDefault();
		  transitionSetup.doTransition();
		  i++;
		} else {
		  i = 0;
		  transitionSetup.exitTransition();
		}
  
		setTimeout(() => {
		jQuery(".slick-current").removeClass("initialAnimation");
		jQuery(".c-slider-init").slick("slickNext");

		}, 3000)

	  }
	);
  });
  
