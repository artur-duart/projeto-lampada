"use strict"

function getId(elemento) {
    return document.getElementById(elemento)
}

const lampada = getId("lampada")

function botoesLigaDesliga(estadoLigado, estadoDesligado) {
    const ligar = getId("ligar")
    const desligar = getId("desligar")

    ligar.disabled = estadoLigado
    desligar.disabled = estadoDesligado
}

function lampadaQuebrada() {
    return lampada.src.indexOf("quebrada") !== -1
}

function ligarLampada() {
    if (!lampadaQuebrada()) {
        lampada.src = 'img/ligada.jpg'
        botoesLigaDesliga(true, false)
    }
}

function desligarLampada() {
    const botaoLigar = getId("ligar")
    const botaoDesligar = getId("desligar")

    if (!lampadaQuebrada()) {
        lampada.src = 'img/desligada.jpg'
        botoesLigaDesliga(false, true)
    }
}

function quebrarLampada() {
    const botaoLigar = getId("ligar")
    const botaoDesligar = getId("desligar")

    lampada.src = "img/quebrada.jpg"
    botoesLigaDesliga(true, true)
}

function turnOnOff() {
    console.log ("Teste Cor")
}

function piscarLampada() {
    setInterval(turnOnOff, 1000)
}

//Eventos
getId("ligar")
    .addEventListener("click", ligarLampada)

getId("desligar")
    .addEventListener("click", desligarLampada)

getId("lampada")
    .addEventListener("mouseover", ligarLampada)

getId("lampada")
    .addEventListener("mouseleave", desligarLampada)

getId("lampada")
    .addEventListener("dblclick", quebrarLampada)

getId("piscar")
    .addEventListener("click", piscarLampada)