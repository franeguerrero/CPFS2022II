export function resta(arr:string[]){
    let resta:number = Number(arr[0])
    for(let i=1;i<arr.length;i++){
        resta-=Number(arr[i])
    }
    return resta
}