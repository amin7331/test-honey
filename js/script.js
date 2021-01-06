const nav = document.querySelector("header nav");

/////adding opacity 1 to navbar
window.addEventListener("scroll",amin)
 function amin() {
    if (document.documentElement.scrollTop > 250) {
        nav.classList.add("nav-menu-black")
    }
    else {
        nav.classList.remove("nav-menu-black")
    }
};
/////////////////////

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    nav: true,
    rtl: true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
