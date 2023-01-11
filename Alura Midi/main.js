/* Solução que fiz ----------------------------------------

function playSom(nomeSom){
    document.querySelector(`#som_tecla_${nomeSom}`).play();
}
---------------------------------------------------------*/

function tocaSom(idElementAudio) {
    const element = document.querySelector(idElementAudio);

    if (element && element.localName === 'audio') {
        element.play();
    }else{
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (const element of listaDeTeclas) {
    const instrumento = element.classList[1];
    const idAudio = `#som_${instrumento}`;

    element.onclick = function () {
        tocaSom(idAudio);
    };

    element.onkeydown = function (KeyboardEvent) {
        if (KeyboardEvent.code === 'Enter' || KeyboardEvent.code === 'Space') {
            element.classList.add('ativa');
        }
    }

    element.onkeyup = function () {
        element.classList.remove('ativa')
    }
}
