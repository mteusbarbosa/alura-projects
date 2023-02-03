export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    console.log(
      `Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`
    );
    //guarda o elemento HTML
    let elemento: HTMLElement | null = null;

    //Closure
    const getter = function () {
      //se não existe o elemento, elemento recebe o querySelector, mas se existir passa direto
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
        /* console.log(
          `Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`
        ); */
      }
      return elemento;
    };

    Object.defineProperty(target, propertyKey, { get: getter });
  };
}
