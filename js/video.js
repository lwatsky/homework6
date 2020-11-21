var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");	
});

document.querySelector("#slower").addEventListener("click", function() {
	var curSpeed = video.playbackrate;
	video.playbackRate = .9 * (curSpeed);
	console.log("Current speed: " + curSpeed);	
});

document.querySelector("#faster").addEventListener("click", function() {
	var curSpeed = video.playbackrate;
	video.playbackRate = (curSpeed) / .9;
	console.log("Current speed: " + curSpeed);	
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 5 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 5;
	}
	console.log("Current time of the video: " + video.currentTime);
	video.play();	
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == true){
		video.muted = false;
		document.getElementById("mute").innerHTML="Mute";
	}
	else{
		video.muted = true;
		document.getElementById("mute").innerHTML="Unmute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function(e) {
	video.volume = e.currentTarget.value / 100;
	console.log("Volume is: " + video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	console.log("old");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	console.log("original");
});

