import { View } from "./view.js";
export class NegociacoesView extends View {
    //método
    template(model) {
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
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
