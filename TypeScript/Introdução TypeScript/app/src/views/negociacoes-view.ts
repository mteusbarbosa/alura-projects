import { View } from "./view.js";
import { Negociacoes } from "./../models/negociacoes.js";
import { escapar } from "../decorators/escapar.js";

export class NegociacoesView extends View<Negociacoes> {
  //método
  @escapar
  protected template(model: Negociacoes): string {
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
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>`;
  }

  private formatar(data: Date) {
    return new Intl.DateTimeFormat().format(data);
  }
}
