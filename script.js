$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        } 
        
        // scroll-up button show/hide script
 
        if (this.scrollY >= 300 && this.scrollY < 1400) {
            $('.about').addClass("show2");
        }else{
            $('.about').removeClass("show2");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
            $('.social').addClass("soc");
        }else{
            $('.scroll-up-btn').removeClass("show");
            $('.social').removeClass("soc");
        }

        if(this.scrollY >= 1000 && this.scrollY < 2300){
            $('.about-1').addClass("show1");
            $('.about-1 .timeline__year').addClass("show_y")
        }
        else{
            $('.about-1').removeClass("show1");
        }

        if(this.scrollY >= 2000 && this.scrollY < 3100){
            $('.services').addClass("show3");
        }
        else{
            $('.services').removeClass("show3");
        }

        if(this.scrollY >= 2700 && this.scrollY < 4500){
            $('.skills').addClass("show4");
        }
        else{
            $('.skills').removeClass("show4");
        }

        if(this.scrollY >= 3400){
            $('.contact').addClass("show5");
            $('.social').removeClass("soc");
            $('footer').addClass("show12")
        }
        else{
            $('.contact').removeClass("show5");
        }
    });

    // appear with a rigth-slide after hovering
    $('.item').hover(function(){
        $('.item').addClass("show_item")
    })

    $('.item1').hover(function(){
        $('.item1').addClass("show_item1")
    })
    

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web-Designer","FrontEnd-Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web-Designer", "FrontEnd-Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});