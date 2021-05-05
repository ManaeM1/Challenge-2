//Function for clock and date
function clock(){

	//clock
	var today = new Date();

	var hours = today.getHours();

	if(hours < 10){
		hours = '0' + hours;
	}

	var minutes = today.getMinutes();

	if(minutes < 10){
		minutes = '0' + minutes;
	}

	var seconds = today.getSeconds();

	if(seconds < 10){
		seconds = '0' + seconds;
	}

	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;

	//date
	var date = new Date();
	document.getElementById("date").innerHTML = date.toLocaleDateString();
}
setInterval(clock, 1000);



//Function that changes the clock lay-out from day to night
function change(){
	var time = new Date();
	var changeTime = time.getHours();

	var background = document.getElementsByTagName("BODY")[0];
	var title = document.getElementsByTagName("H1")[0];

	var boxColor1 = document.getElementsByClassName("box1")[0];
	var boxColor2 = document.getElementsByClassName("box2")[0];
	var boxColor3 = document.getElementsByClassName("box3")[0];

	var clockColorH = document.getElementsByClassName("hours")[0];
	var clockColorM = document.getElementsByClassName("minutes")[0];
	var clockColorS = document.getElementsByClassName("seconds")[0];
	var dots1 = document.getElementsByClassName("dots1")[0];
	var dots2 = document.getElementsByClassName("dots2")[0];
	var currentDate = document.getElementsByClassName("date")[0];

	var hideSun = document.getElementsByClassName("sun")[0];
	var hideMoon = document.getElementsByClassName("moon")[0];

	
	//day
	if(changeTime >= 6 && changeTime < 18){
		background.style.backgroundColor = "#F5F5F5";
		hideMoon.style.display = "none";
	//night
	} else if(changeTime >= 18 && changeTime < 24){
		background.style.backgroundColor = "#1F1F3E";
		title.style.color = "#F5F5F5";
		boxColor1.style.backgroundColor = "#1F1F3E";
		boxColor2.style.backgroundColor = "#1F1F3E";
		boxColor3.style.backgroundColor = "#1F1F3E";

		boxColor1.style.boxShadow = "6px 6px 11px #171730, -6px -6px 11px #262644";
		boxColor2.style.boxShadow = "6px 6px 11px #171730, -6px -6px 11px #262644";
		boxColor3.style.boxShadow = "6px 6px 11px #171730, -6px -6px 11px #262644";

		clockColorH.style.color = "#F5F5F5";
		clockColorM.style.color = "#F5F5F5";
		clockColorS.style.color = "#F5F5F5";
		dots1.style.color = "#F5F5F5";
		dots2.style.color = "#F5F5F5";

		currentDate.style.color = "#F5F5F5";

		hideSun.style.display = "none";

	} else{
		background.style.backgroundColor = "#1F1F3E";
		//boxColor1.style.backgroundColor = "#1F1F3E";
		//title.style.color = "#F5F5F5";

	}

	console.log("test");
}
change();

