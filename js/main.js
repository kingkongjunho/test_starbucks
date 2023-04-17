const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});



const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      display: 'none'
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 순차적 배열로 인해 +1씩 *0.7 곱해진다 ex(0.7, 1.4, 2.1, 2.7)
    opacity: 1  
  });
});


// new라는 생성자(클래스)를 만드는법 (앞글자는 대문자 js필수법)
// 작성법: new Swiper(선택자, 옵션)
// direction은 방향을 의미, vertical는 수직을 의미
// autoplay는 자동으로 진행시킨다는 의미
// loop는 반복 재생을 의미
new Swiper('.notice-line .swiper', {
  direction:'vertical',
  autoplay:true,
  loop:true
});
//drection:'horizontal'은 수평을 의미 하지만 direction 자체적으로 수평을 기본값 갖는다
new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드의 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 첫번째 슬라이드가 가운데 보이기
  loop:true,
  // autoplay:{
  //   delay:5000
  // }, 
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable:true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // js문에서 지원하는 기능인 repeat: -1은 무한반복 한다라는 뜻.
      yoyo:true, // 요요라는 함수로 인해 다시 돌아가는 성질을 가짐
      ease: "power1.inOut", 
      delay:random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

