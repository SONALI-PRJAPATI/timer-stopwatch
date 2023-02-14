const playbutton = document.getElementsByClassName("play")[0];
const lapbutton = document.getElementsByClassName("lap")[0];
const resetbutton = document.getElementsByClassName("reset")[0];
const clearbutton = document.getElementsByClassName("lap-clear-button")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centiSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outer-circle")[0];
let isPlay = false;
let sec;
let centiSec;
let min;
let secCounter = 0;
let centiCounter = 0;
let minCounter = 0;
let lapItem =0;
let isreset = false;
const toggleButton = () => {
    lapbutton.classList.remove("hidden");
    resetbutton.classList.remove("hidden");
}

const play = () => {
    if (!isPlay && !isreset) {
        playbutton.innerHTML = 'Pause';
        bg.classList.add("animation-bg");
        min = setInterval(() => {
            minute.innerHTML = `$(++minCounter) :`;
        }, 60 * 1000);
        sec = setInterval(() => {
            if (secCounter === 60) {
                secCounter = 0;
            }
            second.innerHTML = `&nbsp;${++secCounter} :`;
        }, 1000);
        centiSec = setInterval(() => {
            if (centiCounter === 100) {
                centiCounter = 0;
            }
            centiSecond.innerHTML = `&nbsp;${++centiCounter}`;
        }, 10);
        isPlay = true;
        isreset = true;
    }
    else {
        playbutton.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay = false;
        isreset = false;
        bg.classList.remove("animation-bg");
    }
    toggleButton();
}

const reset = () => {
    isreset = true;
    play();
    lapbutton.classList.add("hidden");
    resetbutton.classList.add("hidden");
    second.innerHTML = '&nbsp;0 :';
    centiSecond.innerHTML = '&nbsp;0';
    minute.innerHTML = '0 :';
}
const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp");
     
    number.innerText = `#${++lapItem}`;
    timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`;
    li.append(number, timeStamp);
    laps.append(li);

    clearbutton.classList.remove("hidden");
}

const clearAll = () =>{
    laps.innerHTML = '';
    laps.append(clearbutton);
    clearbutton.classList.add("hidden");
    lapItem = 0;
}

playbutton.addEventListener("click", play);
resetbutton.addEventListener("click", reset);
lapbutton.addEventListener("click", lap);
clearbutton.addEventListener("click", clearAll);




































{/* <li class="lap-item">
<span class="number">#1</span>
<span class="time-stamp"> 01 : 43 : 07</span>
</li>
<li class="lap-item">
<span class="number">#1</span>
<span class="time-stamp"> 01 : 43 : 07</span>
</li>
<li class="lap-item">
<span class="number">#1</span>
<span class="time-stamp"> 01 : 43 : 07</span>
</li>
<li class="lap-item">
<span class="number">#1</span>
<span class="time-stamp"> 01 : 43 : 07</span>
</li>
<li class="lap-item">
<span class="number">#1</span>
<span class="time-stamp"> 01 : 43 : 07</span>
</li>
<li class="lap-item">
<span class="number">#1</span>
<span class="time-stamp"> 01 : 43 : 07</span>
</li>
<li class="lap-item">
<span class="number">#1</span>
<span class="time-stamp"> 01 : 43 : 07</span>
</li>
<li class="lap-item">
<span class="number">#1</span>
<span class="time-stamp"> 01 : 43 : 07</span>
</li>  */}