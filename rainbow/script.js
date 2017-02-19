document.addEventListener('DOMContentLoaded', start)

function start() {
  var elem=document.getElementById("sun");
  elem.addEventListener('click', sunRise);
  // Make it rain
  createRain("run");
}

// number of drops created.
var nbDrop = 858;

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain(opt) {
if(opt=="run") {
  playSound('rain.mp3')
	 for( i=1;i<nbDrop;i++) {
	    var dropLeft = randRange(550,1050);
	    var dropTop = randRange(-1000,1400);

	    $('#window').append('<div class="drop" id="drop'+i+'"></div>');
	     $('#drop'+i).css('left',dropLeft);
	      $('#drop'+i).css('top',dropTop);
	     }
}
else if(opt=="stop"){
  for( i=1;i<nbDrop;i++) {
     var dropLeft = randRange(0,0);
     var dropTop = randRange(0,0);

     $('#window').append('<div class="drop" id="drop'+i+'"></div>');
      $('#drop'+i).css('left',dropLeft);
       $('#drop'+i).css('top',dropTop);
      }
}

}


var shadeNum = 132;
var sunSize = 50;

function sunRise(evt) {
  evt.target.style.backgroundColor = '#FFFF' + shadeStr;
  if (shadeNum != 33) {
    shadeNum = shadeNum - 33;
    sunSize = sunSize + 25;
    var shadeStr = shadeNum.toString();
    evt.target.style.backgroundColor = '#FFFF' + shadeStr;
    evt.target.style.width = sunSize + 'px';
    evt.target.style.height = sunSize + 'px';
  }
  else {
    evt.target.style.backgroundColor = '#FFFF000'
    evt.target.style.width = '150px';
    evt.target.style.height = '150px';
    //stop rain
    createRain("stop");
    createRainbow();


  }
}

function createRainbow(){
  var canvas = document.getElementById('rainbow');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 1;
      var radius = 125;
//red
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = '#FF0000';
      context.fill();
//orange
      context.beginPath();
      context.arc(centerX, centerY, radius-10, 0, 2 * Math.PI, false);
      context.fillStyle = '#FF7F00';
      context.fill();
//yellow
      context.beginPath();
      context.arc(centerX, centerY, radius-20, 0, 2 * Math.PI, false);
      context.fillStyle = '#FFFF00';
      context.fill();
//green
      context.beginPath();
      context.arc(centerX, centerY, radius-30, 0, 2 * Math.PI, false);
      context.fillStyle = '#00FF00';
      context.fill();
  //blue
      context.beginPath();
      context.arc(centerX, centerY, radius-40, 0, 2 * Math.PI, false);
      context.fillStyle = '#0000FF';
      context.fill();
  //indigo
      context.beginPath();
      context.arc(centerX, centerY, radius-50, 0, 2 * Math.PI, false);
      context.fillStyle = '#4B0082';
      context.fill();
  //violet
      context.beginPath();
      context.arc(centerX, centerY, radius-60, 0, 2 * Math.PI, false);
      context.fillStyle = '#9400D3';
      context.fill();
  //background
      context.beginPath();
      context.arc(centerX, centerY, radius-70, 0, 2 * Math.PI, false);
      context.fillStyle = '#00bcd4';
      context.fill();
      stopSound('rain.mp3')
}

//plays sounds
function playSound(path) {

  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', path);
  audioElement.play();
}
//dtops sounds
function stopSound(path) {

  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', path);
  audioElement.pause();
}
