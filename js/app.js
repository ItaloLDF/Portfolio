$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed = new Typed(".element", {
        strings: ["Italo Freitas", "Programador Web"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    // progress bars
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function (direction) {
            var p = document.querySelectorAll('.progress-bar');

            p[0].setAttribute("style", "width: 85%; transition:2s all");
            p[1].setAttribute("style", "width: 77%; transition:1.5s all");
            p[2].setAttribute("style", "width: 40%; transition:1.3s all");
            p[3].setAttribute("style", "width: 80%; transition:1.5s all");
            p[4].setAttribute("style", "width: 90%; transition:1.3s all");
            p[5].setAttribute("style", "width: 30%; transition:2s all");
        },
        offset: '90%'
    })


});