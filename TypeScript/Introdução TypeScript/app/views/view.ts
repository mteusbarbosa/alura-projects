//O diamante <T> aceita qualquer tipo que vier
export abstract class View<T> {
  //propriedade
  //modificador protected = só o view tem acesso ao elemento, mas as filhas (herdeiras) podem acessar
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    this.elemento = document.querySelector(seletor);
    if(escapar) this.escapar = escapar;
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar){
        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    this.elemento.innerHTML = template;
  }

  protected abstract template(model: T): string 
}
