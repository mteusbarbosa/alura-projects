//Esqueleto de um decorator export function logarTempoDeExecucao() {return function (target: any, property: string, descriptor: PropertyDescriptor){    return descriptor;};}

export function logarTempoDeExecucao() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    console.log(metodoOriginal)
    descriptor.value = function (...args: Array<any>) {
        const t1 = performance.now();
        //chamar o método original
        const retorno = metodoOriginal.apply(this, args);
        const t2 = performance.now();
        console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/1000} segundos`)
        return retorno;
    };

    return descriptor;
  };
}
