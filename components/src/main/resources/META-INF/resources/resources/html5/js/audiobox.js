function play() {
var audio = document.getElementsByTagName("audio")[0];
audio.play();
var display = document.getElementsByTagName("input")[0];
display.value = audio.src;
}
function pause() {
var audio = document.getElementsByTagName("audio")[0];
audio.pause();
}
