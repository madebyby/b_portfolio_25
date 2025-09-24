$(function(){

  function initCardSlider() {
    if ($('.cardSlider').length) {
      $('.cardSlider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 0,   
        speed: 3000,        
        cssEase: 'linear'   
      });
    }
  }

  function initMainSlider() {
    const $slider = $('main');
    if ($slider.length) {
      const $sections = $slider.find('section');

      $(window).on('load', function(){
        $sections.removeClass('on').eq(0).addClass('on'); 
      });

      $slider.on('afterChange', function(e, slick, current){
        $sections.removeClass('on');
        $sections.eq(current).addClass('on');
      });

      $slider.slick({
        arrows:false,
        dots:false,
        autoplay:false,
        fade:false,
        cssEase:'linear',
        adaptiveHeight:false
      });

      const listEl = $slider.find('.slick-list')[0];
      listEl.addEventListener('wheel', function(e){
        e.preventDefault();
        $slider.slick(e.deltaY > 0 ? 'slickNext' : 'slickPrev');
      }, { passive:false });
    }
  }

  function initHamburger() {
    $('.btnHamburger').on('click', function () {
      $(this).toggleClass('active');
      $('.sidePanel').toggleClass('active');
    });
  }


  function initsubMenuScroll() {
    $(window).on("scroll", function() {
      if ($(window).scrollTop() >= 100) {
        $("header.sub").addClass("scroll");
      } else {
        $("header.sub").removeClass("scroll");
      }
    });
  }


  function initUpdatePanel() {
    const classes = ["nt1", "nt2", "nt3"];

    function changeClass(direction) {
      const $box = $(".noticeBox");
      const currentIndex = classes.findIndex(c => $box.hasClass(c));
      const nextIndex = (currentIndex + direction + classes.length) % classes.length;

      $box.removeClass(classes.join(" ")).addClass(classes[nextIndex]);
    }

    $(document).on('click', '.update_panel .btnNext', function() {
      changeClass(1); // 다음
      return false;
    });

    $(document).on('click', '.update_panel .btnPrev', function() {
      changeClass(-1); // 이전
      return false;
    });
  }



  // 실행
  initCardSlider();
  initMainSlider();
  initHamburger();
  initsubMenuScroll();
  initUpdatePanel();

});
