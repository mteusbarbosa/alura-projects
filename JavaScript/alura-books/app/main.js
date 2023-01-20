let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const elementoParaInserirLivros = document.getElementById('livros')

getBuscarLivrosAPI()

async function getBuscarLivrosAPI(){
    const resposta = await fetch(endpointAPI)
    livros = await resposta.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}