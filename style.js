$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20 ){
            $('.navbarr').addClass("sticky");
        }else{
            $('.navbarr').removeClass('sticky')
        }
        if(this.scrollY >500 ){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass('show')
        }
    });
    //slide-up script 

    $('.scroll-up-btn').click(function(){
        console.log("abc ")
        $('html').scrollTop({scrollTop: 0});
        
    });
    var typed = new Typed('.typing',{
        strings:["Developer...",'good boy...'],
        typeSpeed:130,
        backSpeed:100,
        loop:true
    });
    var typed = new Typed('.typing2',{
        strings:["Developer...",'Designer...'],
        typeSpeed:130,
        backSpeed:100,
        loop:true
    })

    // toggle menu-navbarr

    $('.menu-btn').click(function(){
        $('.navbarr .menu').toggleClass("active");
        $('.menu-btn i').toggleClass('active');
    });



});