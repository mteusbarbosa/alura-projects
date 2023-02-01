import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

//O diamante <T> aceita qualquer tipo que vier
export abstract class View<T> {
  //propriedade
  //modificador protected = só o view tem acesso ao elemento, mas as filhas (herdeiras) podem acessar
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM`);
    }
    if (escapar) this.escapar = escapar;
  }

  @logarTempoDeExecucao(true)
  @inspect()
  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
