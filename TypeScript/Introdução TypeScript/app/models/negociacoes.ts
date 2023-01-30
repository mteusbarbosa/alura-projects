import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao>{
    return this.negociacoes
    /* Método para retornar um novo array para não ser modificado de forma indevida >> return [...this.negociacoes]; */
  }
}