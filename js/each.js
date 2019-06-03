// $('#even-btn').on('click', evenSelect);
// $('#odd-btn').on('click', oddSelect);

// function evenSelect() {
//   $('.card').each(function () {
//     //card 클래스의 값들을 number 형태로 변경
//     var evenNum = Number($(this).text()); 
    
//     $(this).removeClass('selected') // selected 클래스 초기화
    
//     // 2로 나뉘어지는 짝수값을 가졌다면 selected 클래스 추가
//     if (evenNum % 2 === 0) 
//     {
//       $(this).addClass('selected');
//     }
//   });
// }

// function oddSelect() {
//   $('.card').each(function () {
//     //card 클래스의 값들을 number 형태로 변경
//     var evenNum = Number($(this).text());
    
//     // selected 클래스 초기화
//     $(this).removeClass('selected')
//      // 2로 나누어서 0의 값이 나오지 않는다면 selected 클래스 추가
//     if (evenNum % 2 !== 0) 
//     {
//       $(this).addClass('selected');
//     }
//   });
// }

// function evenOrOdd(e) {
//   $('.card').each(function (e) {
//     //targetId에 현재 이벤트 타겟의 Id를 저장
//     var targetId = event.currentTarget.id;
    
//     //card 클래스의 값들을 number 형태로 변경
//     var evenNum = Number($(this).text()); 

//     $(this).removeClass('selected') // selected 클래스 초기화

//     if (targetId === 'even-btn') // 누른 버튼이 짝수 버튼일 때
//     {
//       // 2로 나뉘어지는 짝수값을 가졌다면 selected 클래스 추가
//       if (evenNum % 2 === 0) 
//       {
//         $(this).addClass('selected');
//       }
//     }
//     else if (targetId ==='odd-btn') // 누른 버튼이 홀수 버튼일 때
//     {
//       if (evenNum % 2 !== 0) 
//       {
//         $(this).addClass('selected');
//       }
//     }
//   });
// }

//Js(Vanilla JavaScript)로 구현
document.getElementById('even-btn').addEventListener('click', colorNum);
document.getElementById('odd-btn').addEventListener('click', colorNum);

function colorNum(e) {
  var cards = document.querySelectorAll('.card');

  cards.forEach(function(card, index) {
    // var cardNum = Number(card.innerHTML); //cards array에 요소들 innerHTML 숫자로 변경
    var cardNum = Number(this[index].innerHTML); //cards array에 요소들 innerHTML 숫자로 변경
    this[index].classList.remove('selected'); // selected 클래스 초기화
    var targetId = event.currentTarget.id; //click 이벤트한 타겟 id
    
    if (targetId === 'even-btn')
    {
      if (cardNum % 2 === 0)
      {
        card.classList.add('selected');
      }
    }
    else if(targetId === 'odd-btn')
    {
      if(cardNum % 2 !== 0) 
      {
        card.classList.add('selected')
      }
    }

    
  }, cards);  
}
