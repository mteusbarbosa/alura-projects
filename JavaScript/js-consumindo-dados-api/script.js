async function buscaEndereco() {
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/01001000/json/`)
        let consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro);
    }
}
buscaEndereco();
/* Consultar vários CEPs
let ceps = ['01001000', '59158150'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas)); */