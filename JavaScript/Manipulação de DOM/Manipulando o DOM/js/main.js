const controle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]');


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

const cores = [ 'Robotron 2000 - Azul.png', 'Robotron 2000 - Amarelo.png', 'Robotron 2000 - Branco.png', 'Robotron 2000 - Preto.png', 'Robotron 2000 - Rosa.png', 'Robotron 2000 - Vermelho.png'];
let i = 0;

function mudarCor() {
    i++;
    if (i == cores.length) {
        i = 0;
        // Esse bloco de if pode ser substituido por [i%cores.length]
    }
    document.querySelector('#robotron').src = `img/${cores[i]}`;
}



controle.forEach((element) => {
    element.addEventListener("click", (event) => {
        manipulaDados(event.target.dataset.controle, event.target.parentNode, event.target.dataset.pecas);
    })
})

function manipulaDados(operacao, controle, peca) {
    const contador = controle.querySelector('[data-contador]');
    if (operacao === '-' && contador.value > 0) {
        contador.value = String(parseInt(contador.value) - 1).padStart(2, '0');
        estatistica.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        })
    } else if (operacao === '+' && contador.value >= 0) {
        contador.value = String(parseInt(contador.value) + 1).padStart(2, '0');
        estatistica.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    } else {
        console.log("Não é permitido que o valor seja negativo");
    }
}