/*/Realizar un arreglo con 2 dimensiones y guardar 2 arreglos internos y dar lectura a los datos internos
let A=[[1,2,3],[4,5,6]]
const datosArreglos=()=>{
A.map((datos,index)=>{
    datos.map((i,valores)=>{
        console.log(${i}=${valores});
    })
});
}
datosArreglos()*/

//for of
let b=[[8,5,4],[4,6,1]]
for (let arreglo of b){
    for(let numero of arreglo){
        console.log(numero)
    }
}

//for in
let d=[[5,2,9]]
for(let i in d){
    for (let elemns in d[1]){
        console.log(d[i][elemns]);
    }
}

//for each
let z=[[3,6,9],[4,8,7]]
z.forEach(arreglo=>{
    arreglo.forEach(elem=>{
        console.log(elem)
    })
})
//funcion flecha
let a=[[6,9,2],[3,2,4,]]
let arreglo=(fle)=>fle.flat();
console.log(arreglo(a));
//while
let m=[[7,6,8],[4,3,2]]
let i=0
while(i<g.length){
    let uno=0
    while(uno<g[i].length){
        console.log(f[i][uno]);
        uno++
    }
    i++
}


