var min = 0;
var sec = 0;
var msec = 0;
var hour = 0;
var hourHeading = document.getElementById('hours')
var minHeading = document.getElementById("mins");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var list = document.getElementById('list');




var x = 0;

var interval;

function timer() {
    msec++;
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        if (sec < 10) {
            secHeading.innerHTML = "0" + sec;
        } else {
            secHeading.innerHTML = sec;

        }
        msec = 0;
    } else if (sec >= 60) {
        min++;
        if (min < 10) {
            minHeading.innerHTML = "0" + min;
        } else {
            minHeading.innerHTML = min;
        }
        sec = 0;

    } else if (min >= 60) {
        hour++;
        if (hour < 10) {
            hourHeading.innerHTML = "0" + hour;
        } else {
            hourHeading.innerHTML = hour;
        }
        min = 0;

    }
}

function startTimer() {
    interval = setInterval(timer, 10)
    document.getElementById("startBtn").disabled = true;
}

function stopTimer() {
    document.getElementById("startBtn").disabled = false;
    clearInterval(interval)
}

function resetTimer() {
    document.getElementById("startBtn").disabled = false;
    hour = 0 + "0";
    min = 0 + "0";
    sec = 0 + "0";
    msec = 0 + "0";
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stopTimer();
}

var main = document.getElementById('list');
var times = document.getElementById('times');

function lap() {
    var list = document.createElement('li');
    list.innerHTML = (times.innerText);
    list.setAttribute('id', 'list')
    main.appendChild(list);
    var button = document.createElement('button');
    button.innerHTML = '<img class="js-cross-btn" src = "x-button.png" />';
    button.setAttribute('onclick', 'deleteList(this)');
    button.setAttribute("class", "crossBtn ")
    list.appendChild(button);
}

function deleteList(e) {
    e.parentNode.remove()
}