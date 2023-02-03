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

export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
        let divisor = 1;
        let unidade = 'milissegundos'
        if(emSegundos){
            divisor = 1000;
            unidade = 'segundos';
        }
        const t1 = performance.now();
        //chamar o método original
        const retorno = metodoOriginal.apply(this, args);
        const t2 = performance.now();
        /* console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/divisor} ${unidade}`) */
        return retorno;
    };

    return descriptor;
  };
}
