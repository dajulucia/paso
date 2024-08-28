//crear una lista con diferentes tipos de datos
let datos = [{
    nombre: "lucia", 
    apellido: "damian,",
     edad: "19", 
     estudia: false },
     {
    nombre: "axl", 
    apellido: "gamas,",
    edad: "15", 
    estudia: true
     }];

/* let arreglo = ["lucia", 34, true]; */

const info = () =>{
     /*for(let arr in arreglo){
        console.log(arreglo[arr])
     }
      */   /* for (let lis in datos){
     console.log('$ {lis}:${datos[lis]}');
     } 
     }*/

      /* let valores = Objec.values(datos);
      valores.map((data,index) => {
        console.log(`${data}${data}`); */

 /* let valores = Object.keys(datos);
 for (let date of valores); {
    let info = valores[data];
    console.log(info);
  } */

    /* let valores=Object.entries(data);
    valores.map(dat=>{
        console.log(dat);
    })
 */

   /*  Object.entries(datos).forEach(([key,values])=>{
        console.log(`${key} ${value}`);
        
        
    }) */

        DataTransfer.map((data)=>{
            console.log(`elnombre es : ${data.nombre} ${data.apellido} su edad es : ${data.edad}`);
        })
 };

info();
