const btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(aplicarDesconto(livros))
}