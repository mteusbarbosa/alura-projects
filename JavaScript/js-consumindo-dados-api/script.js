async function buscaEndereco(cep) {
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        let localidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let bairro = document.getElementById('bairro');
        let uf = document.getElementById('estado');

        localidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        bairro.value = consultaCEPConvertida.bairro;
        uf.value = consultaCEPConvertida.uf;

        /* return consultaCEPConvertida; */
    } catch (erro) {
        mensagemErro.innerHTML = `<p>   CEP inválido. Tente novamente</p>`;
        console.log(erro);
    }
}
/* Consultar vários CEPs
let ceps = ['01001000', '59158150'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas)); */

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));