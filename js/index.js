function sliderVlad_0() {
    var imgs = document.getElementsByClassName("modal-slider__img");
    imgs[0].src='img/objects/1/1.jpg';
    imgs[1].src='img/objects/1/2.jpg';
    imgs[2].src='img/objects/1/3.jpg';
    imgs[3].src='img/objects/1/4.jpg';
    imgs[4].src='img/objects/1/5.jpg';
}
function sliderVlad_1() {
    var imgs = document.getElementsByClassName("modal-slider__img");
    imgs[0].src='img/objects/2/1.jpg';
    imgs[1].src='img/objects/2/2.jpg';
    imgs[2].src='img/objects/2/3.jpg';
    imgs[3].src='img/objects/2/4.jpg';
    imgs[4].src='img/objects/2/5.jpg';
    console.log(imgs);
}
function sliderVlad_2() {
    var imgs = document.getElementsByClassName("modal-slider__img");
    imgs[0].src='img/objects/3/1.jpg';
    imgs[1].src='img/objects/3/2.jpg';
    imgs[2].src='img/objects/3/3.jpg';
    imgs[3].src='img/objects/3/4.jpg';
    imgs[4].src='img/objects/3/5.jpg';
    console.log(imgs);
}
function sliderVlad_3() {
    var imgs = document.getElementsByClassName("modal-slider__img");
    imgs[0].src='img/objects/4/1.jpg';
    imgs[1].src='img/objects/4/2.jpg';
    imgs[2].src='img/objects/4/3.jpg';
    imgs[3].src='img/objects/4/4.jpg';
    imgs[4].src='img/objects/4/5.jpg';
    console.log(imgs);
}
function sliderVlad_4() {
    var imgs = document.getElementsByClassName("modal-slider__img");
    imgs[0].src='img/objects/5/1.jpg';
    imgs[1].src='img/objects/5/2.jpg';
    imgs[2].src='img/objects/5/3.jpg';
    imgs[3].src='img/objects/5/4.jpg';
    imgs[4].src='img/objects/5/5.jpg';
    console.log(imgs);
}
function sliderVlad_5() {
    var imgs = document.getElementsByClassName("modal-slider__img");
    imgs[0].src='img/objects/6/1.jpg';
    imgs[1].src='img/objects/6/2.jpg';
    imgs[2].src='img/objects/6/3.jpg';
    imgs[3].src='img/objects/6/4.jpg';
    imgs[4].src='img/objects/6/5.jpg';
    console.log(imgs);
}
function sliderVlad_6() {
    var imgs = document.getElementsByClassName("modal-slider__img");
    imgs[0].src='img/objects/7/1.jpg';
    imgs[1].src='img/objects/7/2.jpg';
    imgs[2].src='img/objects/7/3.jpg';
    imgs[3].src='img/objects/7/4.jpg';
    imgs[4].src='img/objects/7/5.jpg';
}
function sliderVlad_7() {
    var imgs = document.getElementsByClassName("modal-slider__img");
    imgs[0].src='img/objects/8/1.jpg';
    imgs[1].src='img/objects/8/2.jpg';
    imgs[2].src='img/objects/8/3.jpg';
    imgs[3].src='img/objects/8/4.jpg';
    imgs[4].src='img/objects/8/5.jpg';
}
function sliderVlad_8() {
    var imgs = document.getElementsByClassName("modal-slider__img");
    imgs[0].src='img/objects/9/1.jpg';
    imgs[1].src='img/objects/9/2.jpg';
    imgs[2].src='img/objects/9/3.jpg';
    imgs[3].src='img/objects/9/4.jpg';
    imgs[4].src='img/objects/9/5.jpg';
}
function sliderVlad_9() {
    var imgs = document.getElementsByClassName("modal-slider__img");
    imgs[0].src='img/objects/10/1.jpg';
    imgs[1].src='img/objects/10/2.jpg';
    imgs[2].src='img/objects/10/3.jpg';
    imgs[3].src='img/objects/10/4.jpg';
    imgs[4].src='img/objects/10/5.jpg';
}
function sliderVlad_10() {
    var imgs = document.getElementsByClassName("modal-slider__img");
    imgs[0].src='img/objects/11/1.jpg';
    imgs[1].src='img/objects/11/2.jpg';
    imgs[2].src='img/objects/11/3.jpg';
    imgs[3].src='img/objects/11/4.jpg';
    imgs[4].src='img/objects/11/5.jpg';
}
















/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
















$(document).ready(function() {

  //E-mail Ajax Send
  $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
          type: "POST",
          url: "mail.php", //Change
          data: th.serialize()
      }).done(function() {
          alert("Thank you!");
          setTimeout(function() {
              // Done Functions
              th.trigger("reset");
          }, 1000);
      });
      return false;
  });

});
