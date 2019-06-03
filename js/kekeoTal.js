// // JQuery로 구현
// $('#send').on('click', sendMsg);
// // $('.text-box>textarea').keydown(function (e) {
// //   if(e.keyCode == 13 && e.ctrlKey == true) {
// //     console.log(e)
// //     sendMsg();
// //   }
// // })
// function sendMsg() {
//   var textMsg = $('.text-box>textarea');
//   //textarea의 값이 비어있지 않울 시
//   if (textMsg !== "") {
//     //chatbox 마지막에 bubble , my-bubble클래스 추가
//     $('.chatbox').append('<div class="bubble my-bubble">' + textMsg.val() + '</div>');
//     //bubble 클래스의 마지막에 my-bublle 클래스 추가
//     // $('.bubble:last-child').addClass('my-bubble');
//     //my-bubble 중 마지막 요소를 지정
//     // var myChatBox = $('.my-bubble:last-child');
//     //textarea에 입력한 value 값을 myChatBox에 추가
//     // myChatBox.text(textMsg.val());
//     //text area 비우기
//     textMsg.val('');
//     // document.querySelector('.text-box>textarea').value = "";
//     // console.log(textMsg.val());
//   }else {
//     //textarea가 비어있을시 아무 이벤트도 실행하지 않음.
//     return false;
//   }
// }

//JavaScript로 구현

document.getElementById('send').addEventListener('click', sendTalk);
document.querySelector('.text-box>textarea').addEventListener('keydown', keyCheck);

function keyCheck (e) {
  if (e.keyCode == 13 && e.ctrlKey === true ){
    if(document.querySelector('.text-box>textarea').value !== ""){
    console.log(e)
    sendTalk();
    // document.querySelector('.text-box>textarea').innerHTML ="";
    // console.log(document.querySelector('.text-box>textarea').innerHTML);
    }
  }
}
function sendTalk() {
  //textarea 값 textTalk로 지정
  var textTalk = document.querySelector('.text-box>textarea');

  if (textTalk !== "") {
    //div 요소 생성
    var talkBox = document.createElement('div');
    //div 요소에 클래스 추가
    talkBox.classList.add('bubble');
    talkBox.classList.add('my-bubble');
    //.chatbox 마지막에 my-bubble 추가
    document.querySelector('.chatbox').appendChild(talkBox);
    //.chatbox에 마지막에  추가
    // document.querySelector('.chatbox').innerHTML = '<div class="bubble my-bubble">' + textTalk.value + '</div>';
    //talkBox에 textTalk value값 추가
    talkBox.innerHTML = textTalk.value;
    //textarea value 값 초기화
    textTalk.value = "";
  }else{
    event.preventDefault();
  }
}