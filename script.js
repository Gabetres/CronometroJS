function relogio() {
    const elementoRelogio = document.querySelector(".relogio");
    const horaAtual = new Date();

    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    const formatoHoras = horas.toString().padStart(2, "0");
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart(2, "0");

    const frase = document.querySelector(".frase");
    dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado');

    mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Stembro', 'Outubro', 'Novembro', 'Dezembro');

    hoje = new Date;

    frase.innerHTML = `${dia[hoje.getDay()]} , ${hoje.getDate().toString().padStart(2, "0")} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()} `

    const esta = document.querySelector(".esta")

    dianoite = new Array('Madrugada','Manhã', 'Tarde', 'Noite');

    if (horas >= 0) {
        esta.innerHTML = `Esta de ${dianoite[0]}`
        html.classList.toggle('madrugada');
    }

    if(horas >= 6){
        esta.innerHTML = `Esta de ${dianoite[1]}`
        html.classList.toggle('manha');
    }

    if (horas >= 13) {
        esta.innerHTML = `Esta de ${dianoite[2]}`
        html.classList.toggle('tarde');
    }

    if (horas >= 18) {
        esta.innerHTML = `Esta de ${dianoite[3]}`
        html.classList.toggle('noite');
    }




    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`
}
setInterval(relogio, 1000);