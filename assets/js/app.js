 let mq = window.matchMedia("(max-width: 40em)");
    $(document).ready(function() {
        $('a[href*="#"]').click(function(event) {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                  event.preventDefault();
                $('html,body').animate({
                  scrollTop: target.offset().top - 75
                }, 1000);
                return false;
              }
            }
          });
        if (!mq.matches) {
            $("nav").css("background-color", "transparent");
            $(window).scroll(function() { // check if scroll event happened
                if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
                    $("nav").css("transition", "background-color 200ms linear");
                    $("nav").css("background-color", "#f1f6f9"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
                } else {
                    $("nav").css("background-color", "transparent"); // if not, change it back to transparent
                }
            });
        } else {
            $("nav").css("background-color", "#f1f6f9");
        }
    });
