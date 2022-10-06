export function suma(arr:string[]){
    let sumado:number = 0
    arr.forEach(element => {
        sumado += Number(element)
    });
    return sumado
}