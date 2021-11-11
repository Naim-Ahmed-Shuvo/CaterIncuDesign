$(document).ready(function(){
    console.log("ready");
   

    // scroll up btn show
    $(window).on("scroll",()=>{
        if(this.pageYOffset>400){
            $(".scroll-up-btn").css("display","flex")
        } else{
            $(".scroll-up-btn").css("display","none")
        }
    })

    // $(".scroll-up-btn").on("click",()=>{
    //     console.log("clicked")
    //     $("html, body").animate({
    //         scrollTop: 0
    //     },2000)
    // })

    // scroll top
    $(".mdc-btn").on("click",function(){
        $("html, body").animate({
            scrollTop: $(document).height()
        },2000)
    })

    // show hide mobile nav
    $('#click').click(function(){
        $('.mobile-menu').removeClass('hide');
        $('.mobile-menu').addClass('show');
    })
    $('.close-icon').click(function(){
        $('.mobile-menu').removeClass('show');
        $('.mobile-menu').addClass('hide');
    })


    $('.slick').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    })
})

// const nav = document.querySelector("nav")

// window.addEventListener("scroll",()=>{
//     if(window.scrollY>400){
//         nav.classList.add("fixed-nav")
//     } else{
//         nav.classList.remove("fixed-nav")
//     }
// })