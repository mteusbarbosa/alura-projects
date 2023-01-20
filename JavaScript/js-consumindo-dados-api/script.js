async function buscaEndereco(cep) {
    //Busca a id erro e adiciona o valor vazio a ela
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    //Se a promise for positiva faz o código do try, se der erro, vai pro catch
    try {
        //Faz o fetch para receber a promise, o await irá aguardar o recebimento do aquivo da API e então transformar os dados em json
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCEPConvertida = await consultaCEP.json();

        //Caso o usuário digite o CEP corretamente, com 8 dígitos, mas ele não existir, imprime no console o erro
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

    //Caso o usuário digite o CEP errado, com 9 ou mais dígitos ou 7 a menos dígitos, imprime na div #erro
    } catch (erro) {
        mensagemErro.innerHTML = `<p>   CEP inválido. Tente novamente</p>`;
        console.log(erro);
    }
}
/* Consultar vários CEPs sem ser dinâmico
let ceps = ['01001000', '59158150'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas)); */

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));