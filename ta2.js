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
const ejemplo1=[[8,5,4],[4,6,1]]
for (let arreglo of ejemplo1){
    for(const nunber of arreglo){
        console.log(number)
    }
}

//for in
const ejemplo2=[[5,2,9][9,8,7]]
for(const i in ejemplo2){
    for (const elemns in ejemplo2[1]){
        console.log(ejemplo2[i][elemns]);
    }
}

//for each
const z=[[3,6,9],[4,8,7]]
z.forEach(arreglo_ejemplo3=>{
    arreglo_ejemplo3.forEach(elem=>{
        console.log(elem)
    })
})
//funcion flecha
const ejem=[[6,9,2],[3,2,4,]]
let arreglo_ejemplo4=(fle)=>fle.flat();
console.log(arreglo_ejemplo4(ejem));
//while
const ejemplo5=[[7,6,8],[4,3,2]]
const i=0
while(i<g.length){
    let uno=0
    while(uno<g[i].length){
        console.log(f[i][uno]);
        uno++
    }
    i++
}


