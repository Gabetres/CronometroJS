window.onload = function () { //Executa o js imediatamente após o carregamento de uma pagina.

    var seconds = 00;
    var tens = 00;
    var minutes = 00;
    var hours = 00;

    var appendTens = document.getElementById('tens');
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
        tens = "00";
        seconds = "00"
        minutes = "00"
        hours = "00"

        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendSeconds.innerHTML = minutes;
        appendSeconds.innerHTML = hours;
    };

    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens
        }

        if (tens > 9) {
            appendTens.innerHTML = tens
        }
        if (tens > 99) {
            console.log('seconds');
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }
//editar
        if (tens > 99) {
            console.log('minutes');
            hours++;
            appendMinutes.innerHTML = "0" + minutes;
            hours = 0;
            appendHours.innerHTML = "0" + 0;
        }

        if (minutes > 9) {
            appendMinutes.innerHTML = minutes
        }
    }
    
}