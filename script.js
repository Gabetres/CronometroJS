window.onload = function () { //Executa o js imediatamente após o carregamento de uma pagina.

    var miliseconds = 000;
    var seconds = 00;
    var minutes = 00;
    var hours = 00;

    var appendMiliseconds = document.getElementById('miliseconds');
    var appendSeconds = document.getElementById('seconds');
    var appendMinute = document.getElementById('minutes')
    var appendHours = document.getElementById('hours')

    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');

    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval); //metodo que limpa o temporizador que é definido
        Interval = setInterval(startTimer, 10)
    };

    buttonStop.onclick = function () {
        clearInterval(Interval);
    };

    buttonReset.onclick = function () {
        clearInterval(Interval);
        miliseconds = "00";
        seconds = "00";
        minutes = "00";
        hours = "00";

        appendMiliseconds.innerHTML = miliseconds;
        appendSeconds.innerHTML = seconds;
        appendMinute.innerHTML = minutes;
        appendHours.innerHTML = hours;
    };


    function startTimer() {
        miliseconds++;
        if (miliseconds <= 9) {
            appendMiliseconds.innerHTML = "0" + miliseconds;
        }

        if (miliseconds > 9) {
            appendMiliseconds.innerHTML = miliseconds;
        }
        if (miliseconds > 59) {  
            console.log('seconds');
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            miliseconds = 0;
            appendMiliseconds.innerHTML = "0" + 0;
        }



        if (seconds <= 9) {
            appendSeconds.innerHTML = "0" + seconds;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) { 
            console.log('minute');
            minutes++;
            appendMinute.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }



        if (minutes <= 9) {
            appendMinute.innerHTML = "0" + minutes;
        }

        if (minutes > 9) {
            appendMinute.innerHTML = minutes;
        }

        if (minutes > 59) {
            console.log('hours');
            hours++;
            appendMinute.innerHTML = "0" + minutes;
            minutes = 0;
            appendMinute.innerHTML = "0" + 0;
        }


        
        if (hours <= 9) {
            appendHours.innerHTML = "0" + hours;
        }

        if (hours > 9) {
            appendHours.innerHTML = hours;
        }
    }

}