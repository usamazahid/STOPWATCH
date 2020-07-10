let min = 0, sec = 0, msec = 0;
let interval;
let minCounter = document.getElementById('min');
let secCounter = document.getElementById('sec');
let msecCounter = document.getElementById('msec');


let start = ()=>{
interval = setInterval(()=>{
msec++;
msecCounter.innerHTML = msec;
if(msec >= 100){
	sec++;
	msec = 0;
	secCounter.innerHTML = sec;
}else if(sec >= 60){
	min++;
	sec = 0;
	minCounter.innerHTML = min;
}
}, 10);
}

let pause = ()=>{
	clearInterval(interval);
}

let stop = ()=>{
	min = 0; sec = 0; msec = 0;
	minCounter.innerHTML = "00";
	secCounter.innerHTML = "00";
	msecCounter.innerHTML = "00";
	pause();
}
document.getElementById('start').addEventListener("click", start);
document.getElementById('pause').addEventListener("click", pause);
document.getElementById('stop').addEventListener("click", stop);