// $(window).on('scroll', scrollHandler);

//처음 로딩될 떄 호출
// scrollHandler();

// function scrollHandler() {
//   //스크롤에 따라 playlist의 opacity 변경
//   //window의 높이와 ScrollTop 값을 더해서 bottom의 값을 구함.
//   var windowBottom = $(window).scrollTop() + $(window).height();
 
//   for (i = 0; i < $('.playlist').length; i ++)
//   {
//     //playlist 배열 중에 차례대로 적용
//     var playlist = $('.playlist').eq(i);
//     // 각 플레이 리스트의 top값에 리스트 height의 절반을 더해서 list의 절반에 해당하는 값을 구함.
//     var positionTop = playlist.position().top + (playlist.outerHeight() / 2);
//     // console.log(playlist.position().top);
//     console.log(positionTop);
//     //windowsBottom 값이 positionTop과 같거나 크면 리스트가 나타남.
//     if (windowBottom >= positionTop) {
//       playlist.animate({opacity:'1'}, 1000);
//     }
//   }
// }

$(window).on('scroll', scrollEach);
$('.to-top-btn').on('click', scrollToTop);

scrollEach();
//each를 사용해서 JQuery
function scrollEach() {
  var windowBottom = $(window).scrollTop() + $(window).height();
  //.playlist
  $('.playlist').each(function() {
    var listTop = $(this).position().top + ($(this).outerHeight() / 2);
    if (windowBottom >= listTop) 
    {
      $(this).animate({opacity:'1'}, 1000);
    }
  });
  //스크롤의 bottom이 document의 height보다 같거나 크면 탑으로 가는 버튼 나타남.
  if (windowBottom >= $(document).height())
  {
    console.log(windowBottom)
    $('.to-top-btn').fadeIn(1000);
  }
  // 스크롤의 bottom이 document의 height보다 작아지면 탑으로 가는 버튼 사라짐.
  else if(windowBottom < $(document).height())
  {
    $('.to-top-btn').fadeOut(1000);
  }
};

function scrollToTop() {
  $('html,body').animate({scrollTop: 0}, 300);
}



//자바스크립트

// window.addEventListener('scroll', scrollFunc);
// scrollFunc();

// function scrollFunc() {
//   // console.log(window.innerHeight);
//     // var intervalScroll = setInterval(scrollInterval, 1000)
    
//     function scrollInterval() {
//       var windowBot = window.scrollY + window.innerHeight;
//       var playlist = document.querySelectorAll('.playlist');
//       for(i = 0; i < playlist.length; i ++ )
//       {
//         var listRect = playlist[i].offsetTop;
//         // console.log(listRect.top);
//         console.log(windowBot);
//         console.log(playlist[i].offsetTop)
//         console.log(playlist[i].offsetHeight)
//         // console.log(playlist[i].offsetHeight / 2)0
//         if(windowBot >= (listRect + (playlist[i].offsetHeight / 2)))
//         {
//          playlist[i].animate([
//            {transform: 'opacity(1)'},
//          ])
//         }
//         else if(playlist[i].style.opacity === 1)
//         {
//           clearInterval(intervalScroll);
//         }
//       }
//     }
//   // console.log(windowBot);
// }