function calculaValorTotalLivrosDisponiveis(livrosFiltrados){
    return livrosFiltrados.reduce((acc, atual) => acc + atual.preco, 0).toFixed(2)
}