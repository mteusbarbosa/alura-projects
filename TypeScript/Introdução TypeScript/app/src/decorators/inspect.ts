/* Template para qualquer decorator:
 export function nomeDecorator(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            const retorno = metodoOriginal.aply(this, args)
            return retorno
        }
        return descriptor;
    }
} */

export function inspect() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`--- Método ${propertyKey}`);
      console.log(`------ Parâmetros ${JSON.stringify(args)}`);
      const retorno = metodoOriginal.apply(this, args);
      console.log(`------ retorno: ${JSON.stringify(retorno)}`);
      return retorno;
    };
    return descriptor;
  };
}
