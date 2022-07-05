window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();

    $('.main').addClass('on');

    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        container.track.xAxis.element.remove();
        // Scrollbar.detachStyle();

        $('.main').addClass('on');

        ScrollTrigger.scrollerProxy("body", {

            scrollTop(value) {

                if (arguments.length) {
                    container.scrollTop = value;
                }

                return container.scrollTop;

            }
        });


    }, 0)
    setTimeout(() => {
        $('#section01').addClass('on');
    }, 0);
    // setTimeout(()=>{
    //     $('#section02').addClass('on');
    // },0);


    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)


        if (scrollTop >= 1) {

        }

        if (scrollTop >= 800) {
            $('#section02').addClass('on');
        }

        if (scrollTop >= 1900) {
            $('#section03').addClass('on');
        }

        if (scrollTop >= 3200) {
            $('#section04').addClass('on');
        }
        if (scrollTop >= 4500) {
            $('#section04 .inner02').addClass('on');
        }

        if (scrollTop >= 5832) {
            $('#section05').addClass('on');
        }
        if (scrollTop >= 7200) {
            $('#section06').addClass('on');
        }
        if (scrollTop >= 8500) {
            $('#section07').addClass('on');
        }
        if (scrollTop >= 10000) {
            $('#section08').addClass('on');
        }
        if (scrollTop >= 11500) {
            $('#section09').addClass('on');
        }
        if (scrollTop >= 12700) {
            $('#section10').addClass('on');
        }
        if (scrollTop >= 14000) {
            $('#section11').addClass('on');
        }
        if (scrollTop >= 16100) {
            $('#section12').addClass('on');
        }
        if (scrollTop >= 19400) {
            $('#section13 .inner').addClass('on');
        }
        if (scrollTop >= 20569) {
            $('#section14').addClass('on');
        }
        if (scrollTop >= 21666) {
            $('#section14 .photo02').addClass('on');
        }
        if (scrollTop >= 22566) {
            $('#section14 .photo03').addClass('on');
        }
        if (scrollTop >= 23061) {
            $('#section14 .photo04').addClass('on');
        }
        if (scrollTop >= 23726) {
            $('#section15').addClass('on');
        }
        if (scrollTop >= 25500) {
            $('#splash').addClass('on');
        }
        if (scrollTop >= 26179) {
            $('#splash .photo').addClass('on');
        }
        if (scrollTop >= 26179) {
            $('#splash .ch').addClass('on');
        }
        if (scrollTop >= 27179) {
            $('#walk_login').addClass('on');
        }
        if (scrollTop >= 28396) {
            $('#walk_login .photo').addClass('on');
        }
        if (scrollTop >= 28396) {
            $('#walk_login .mockup02').addClass('on');
        }
        if (scrollTop >= 28396) {
            $('#walk_login .login_video').addClass('on');
        }
        if (scrollTop >= 29478) {
            $('#check').addClass('on');
        }
        if (scrollTop >= 29763) {
            $('#check .one').addClass('on');
        }
        if (scrollTop >= 29861) {
            $('#check .two').addClass('on');
        }
        if (scrollTop >= 31329) {
            $('#check .three').addClass('on');
        }
        if (scrollTop >= 32726) {
            $('#main').addClass('on');
        }
        if (scrollTop >= 33369) {
            $('#main .photo01').addClass('on');
        }
        if (scrollTop >= 34131) {
            $('#main .photo02').addClass('on');
        }
        if (scrollTop >= 36021) {
            $('#main .photo03').addClass('on');
        }
        if (scrollTop >= 36660) {
            $('#smartorder').addClass('on');
        }
        if (scrollTop >= 37130) {
            $('#smartorder .inner').addClass('on');
        }
        if (scrollTop >= 37665) {
            $('#smartorder .photo01').addClass('on');
        }
        if (scrollTop >= 38055) {
            $('#smartorder .ch02').addClass('on');
        }
        if (scrollTop >= 37843) {
            $('#smartorder .photo02').addClass('on');
        }
        if (scrollTop >= 38411) {
            $('#smartorder .photo03').addClass('on');
        }
        if (scrollTop >= 38601) {
            $('#smartorder .ch01').addClass('on');
        }
        if (scrollTop >= 39083) {
            $('#smartorder .ch03').addClass('on');
        }
        if (scrollTop >= 39083) {
            $('#smartorder .ch03_1').addClass('on');
        }
        if (scrollTop >= 38831) {
            $('#smartorder .photo04').addClass('on');
        }
        if (scrollTop >= 39605) {
            $('#reservation_status').addClass('on');
        }
        if (scrollTop >= 39605) {
            $('#reservation_status .inner').addClass('on');
        }
        if (scrollTop >= 40192) {
            $('#reservation_status .inner .photo01').addClass('on');
        }
        if (scrollTop >= 40192) {
            $('#reservation_status .inner .ch').addClass('on');
        }
        if (scrollTop >= 41551) {
            $('#community').addClass('on');
        }
        if (scrollTop >= 43287) {
            $('#community .inner').addClass('on');
        }
        if (scrollTop >= 44450) {
            $('#mypage').addClass('on');
        }

    });


    /*  slide,click event section */

})


