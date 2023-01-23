const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponiveis() : filtrarCategoria(categoria)
    exibirOsLivrosNaTela(aplicarDesconto(livrosFiltrados))
    if (categoria == 'disponivel') {
        let valorTotalLivros = calculaValorTotalLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalLivrosDisponiveis(valorTotalLivros)
    }
}

function filtrarCategoria(categoria) {
    exibirValorTotalLivrosDisponiveis()
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalLivrosDisponiveis(valorTotalLivros) {
    valorTotalDisponivels.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalLivros}</span></p>
  </div>`
}
