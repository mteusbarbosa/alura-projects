export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
        /* Método para retornar um novo array para não ser modificado de forma indevida >> return [...this.negociacoes]; */
    }
}
