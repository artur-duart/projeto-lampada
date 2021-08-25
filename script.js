"use strict"

// function botoesLigaDesliga(ligarEstado, desligarEstado) {
//     const ligar = document.getElementById("ligar")
//     const desligar = document.getElementById("desligar")
//     ligar.disabled = ligarEstado
//     desligar.disabled = desligarEstado
// }

function lampadaQuebrada() {
    const lampada = document.getElementById("lampada");
    return lampada.src.indexOf("quebrada") !== -1;
}

function ligarLampada() {
    const lampada = document.getElementById('lampada');
    const botaoLigar = document.getElementById("ligar");
    const botaoDesligar = document.getElementById("desligar");

    if (!lampadaQuebrada()){
        lampada.src = 'img/ligada.jpg';
        botaoLigar.disabled = true;
        botaoDesligar.disabled = false;
    }
    
}

function desligarLampada() {
    const lampada = document.getElementById('lampada');
    const botaoLigar = document.getElementById("ligar");
    const botaoDesligar = document.getElementById("desligar");

    if (!lampadaQuebrada()){
        lampada.src = 'img/desligada.jpg';
        botaoDesligar.disabled = true;
        botaoLigar.disabled = false;
    }
}

function quebrarLampada() {
    const lampada = document.getElementById("lampada");
    const botaoLigar = document.getElementById("ligar");
    const botaoDesligar = document.getElementById("desligar");

    lampada.src = "img/quebrada.jpg";
    botaoLigar.disabled = true;
    botaoDesligar.disabled = true;
}

//Eventos
document.getElementById("ligar")
    .addEventListener("click", ligarLampada)

document.getElementById("desligar")
    .addEventListener("click", desligarLampada)

document.getElementById("lampada")
    .addEventListener("mouseover", ligarLampada)

document.getElementById("lampada")
    .addEventListener("mouseleave", desligarLampada)


document.getElementById("lampada")
    .addEventListener("dblclick", quebrarLampada)
// document.getElementById("desligar")
//     .addEventListener("click", desligarLampada)