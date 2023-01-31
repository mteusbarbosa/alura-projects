//O diamante <T> aceita qualquer tipo que vier
export abstract class View<T> {
  //propriedade
  //modificador protected = só o view tem acesso ao elemento, mas as filhas (herdeiras) podem acessar
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }

  abstract template(model: T): string 
}
