const btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenadosPreco = [...livros];
    livrosOrdenadosPreco.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(aplicarDesconto(livrosOrdenadosPreco))
}