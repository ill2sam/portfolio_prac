$(document).ready(function() {
  //처음에 header의 text가 나오게 함.
  $('.vertical-center').eq(0).animate({opacity: '1', top: '0'}, 1000)
})

$(window).on('scroll', scrollMove); //스크롤 할 때마다 scrollMove 실행
$('button').on('click', moveScroll); //button 태그를 클릭하면 moveAway 실행




function scrollMove() {
  var scrollNow = $(window).scrollTop(); //현재 scrollTop의 값
  var headerHeight = $('.header').height(); // .header의 길이값
  
  console.log(scrollNow);
  console.log($('.about').position().top);
  // scrollNow가 .header의 길이값과 같거나 커지면 button들의 color를 #4a4a4a로 변경
  if(scrollNow >= headerHeight)
  {
    $('#about-btn, #contact-btn').css('color', '#4a4a4a')
  }
  //scrollNow가 다시 .header의 길이값보다 작아질 시 color를 원래대로 돌려줌.
  else if (scrollNow < headerHeight)
  {
    $('#about-btn, #contact-btn').css('color', '#ffffff')
  }
  //스크롤 할 때마다 textUp 함수 실행
  textUp();
}

function moveScroll(e) {
  var aboutTop = $('.about').position().top; // about의 top 값
  var contactTop = $('.contact').position().top; // .contact의 top 값
  var targetId = event.currentTarget.id; // click 이벤트가 일어난 타겟의 id
  
  //targetId가 about-btn일 시 about의 top 값만큼 scrollTop을 이동
  if (targetId === 'about-btn')
  {
    $('html, body').animate({scrollTop: aboutTop}, 1000)
  }
  //targetId가 contact-btn일 시 contact의 top 값만큼 scrollTop을 이동
  else if (targetId === 'contact-btn')
  {
    $('html, body').animate({scrollTop: contactTop}, 1000)
  }
}

function textUp() {
  //window.ScrollTop가 .about의 top과 같거나 크면 .vertical-center가 나타남.
  if($(window).scrollTop() >= $('.about').position().top)
  {
    $('.vertical-center').eq(1).animate({opacity: '1', top: '0px'}, 1000)
  }
  //window.ScrollTop가 .contact의 top과 같거나 크면 .vertical-center가 나타남.
  if($(window).scrollTop() >= $('.contact').position().top)
  {
    $('.vertical-center').eq(2).animate({opacity: '1', top: '0px'}, 1000)
  }
}

//JavaScript로 구현

// document.addEventListener('scroll', scrollEvent);

// function scrollEvent() {
//   var scrollValue = window.scrollY;
//   var headerHeightTwo = document.querySelector('.header').offsetHeight;
//   console.log(scrollValue);
//   console.log(headerHeightTwo)

//   if (scrollValue >= headerHeightTwo)
//   {
//     document.querySelector('#about-btn').style.color = '#4a4a4a';
//     document.querySelector('#contact-btn').style.color = '#4a4a4a';
//   } 
//   else if(scrollValue < headerHeightTwo)
//   {
//     document.querySelector('#about-btn').style.color = '#ffffff';
//     document.querySelector('#contact-btn').style.color = '#ffffff';
//   }
// }

