const prompt=require("prompt-sync")();

let arr=[`nombre`,`apellido`,`rfc`,`direccion`,`telefono`];

let info;
const dat=()=>{
    const dim=parseInt(prompt(`ingresa el numero de empleos solicitados`));
    for(let i=0;  i<dim;i++){
       let nombre =prompt("Ingresa el nombre: ")
       let apellido =prompt("Ingresa el apellido: ")
       let rfc =prompt("Ingresa el apellido: ")
       let direccion =prompt("Ingresa la direccion: ")
       let telefono =prompt("Ingresa el numero telefomico")
       info={
        nombre,
        apellido,
        rfc,
        direccion,
        telefono,
       }
       arreglo.push(info);
    }
    arreglo.map((hello)=>{
        console.log(`el empleado se llama ${hello.nombre} se apellida ${hello.apellido} su edad es  ${hello.edad} viven en ${hello.direccion} y su numero telefonico es ${hello.edad} `);
    });

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
