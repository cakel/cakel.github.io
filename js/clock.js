/**
 * @type HTMLInputElement
 */
const clock = document.querySelector("h2#clock");
const date = new Date();

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

function loop(){
    let now = new Date();
    let millis = now.getMilliseconds();
    setTimeout(function() {setInterval(getClock, 500)}, 1000-millis);
}

getClock();
loop();