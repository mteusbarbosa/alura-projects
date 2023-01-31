import { Negociacoes } from "./../models/negociacoes.js";

export class NegociacoesView {
  //propriedade
  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  //método
  template(model: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered">
            <thread>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thread>
            <tbody>
                ${model
                  .lista()
                  .map((negociacao) => {
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(
                              negociacao.data
                            )}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>`;
  }

  //método
  update(model: Negociacoes): void {
    const template = this.template(model);
    console.log(template);
    this.elemento.innerHTML = template;
  }
}
