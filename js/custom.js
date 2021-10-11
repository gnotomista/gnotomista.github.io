/* Based on https://github.com/rotaercz/skeleton-with-nav-menu */
// toggle mobile navigation
function toggleMobileNav() {
	if( $("#responsive-nav").hasClass("mobile") ) {
		$("#responsive-nav").removeClass("mobile");
	}
	else {
		$("#responsive-nav").addClass("mobile");
	}
}

// hide mobile nav when clicking outside of nav area
$("html").click(function() {
	$("#responsive-nav").removeClass("mobile");
});

$("#responsive-nav").click(function(e){
    e.stopPropagation();
});

// hide nav on scroll down
var scrolled = false;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("#responsive-nav").outerHeight();

$(window).scroll(function(event){
    scrolled = true;
});

setInterval(function() {
    if (scrolled) {
        hasScrolled();
        scrolled = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    if(Math.abs(lastScrollTop - st) <= delta) // make sure user scrolled more than delta
        return;

    if (st > lastScrollTop && st > navbarHeight) {
		if( !$("#responsive-nav").hasClass("mobile") ) {
			$("#responsive-nav").removeClass("nav-show").addClass("nav-hide");
		}
    }
	else {
        if(st + $(window).height() < $(document).height()) {
            $("#responsive-nav").removeClass("nav-hide").addClass("nav-show");
        }
    }

    lastScrollTop = st;
}
