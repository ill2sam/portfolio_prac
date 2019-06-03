// $('#btn1').on('click', blueDown);
// $('#btn2').on('click', whiteDown);
// $('#btn3').on('click', dotBlueDown);

// function blueDown() {
//   $('.blue').css('transform', 'rotate(30deg)');
//   setTimeout(flagUp, 1000);
// }

// function whiteDown() {  
//   $('.white').css('transform', 'rotate(30deg)');
//   setTimeout(flagUp, 1000);
// }

// function dotBlueDown() {  
//   $('.blue.dot').css('transform', 'rotate(30deg)');
//   setTimeout(flagUp, 1000);
// }

// function flagUp() {
//   $('.flags>img').css('transform', 'rotate(0deg)');
// }

//JavaScript로 
document.getElementById('btn1').addEventListener('click', blueDown);
document.getElementById('btn2').addEventListener('click', whiteDown);
document.getElementById('btn3').addEventListener('click', dotBlueDown);

function blueDown(e) {
  var blue = document.querySelectorAll('.blue');
  for (var i = 0; i < blue.length; i ++) {
    blue[i].classList.add('down');
    console.log(blue);
  }
  setTimeout(flagUp, 1000);
}

function whiteDown(e) {
  var white = document.querySelectorAll('.white');
  for (var i = 0; i < white.length; i ++) {
    white[i].classList.add('down');
  }
  setTimeout(flagUp, 1000);
}

function dotBlueDown() {  
  var dotBlue = document.querySelectorAll('.blue.dot');
  for (var i = 0; i < dotBlue.length; i ++) {
    dotBlue[i].classList.add('down');
  }
  setTimeout(flagUp, 1000);
}

function flagUp() {
  var upFla = document.querySelectorAll('.flags>img');
  for (var i = 0; i < upFla.length; i ++) {
    upFla[i].classList.remove('down');    
  }
}