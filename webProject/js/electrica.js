//music
var music = document.getElementById("music")
var sound      = document.createElement('audio');
sound.id       = 'audio-player';
sound.controls = 'controls';
sound.src      = 'media/Umlala - My Pdf Files (Official Video).mp3';
sound.type     = 'audio/mpeg';
document.getElementById('music').appendChild(sound);

var vid = document.getElementById("videoPur");
var actualVid = document.createElement('video');
actualVid.id = "videoActual";
actualVid.width="420";
actualVid.src="media/Umlala - My Pdf Files (Official Video).mp4";
actualVid.type="video/mp4";
actualVid.controls = 1;
document.getElementById('videoPur').appendChild(actualVid);

var img = document.getElementById("imagineJava");
var actualImage = document.createElement('img');
actualImage.width="600";
actualImage.height="420";
actualImage.src = "img/fractal.jpg";
actualImage.type = "img/jpg";
document.getElementById('imagineJava').appendChild(actualImage);