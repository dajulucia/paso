const prompt = require("prompt-sync")();

class empleado {
    constructor(nombre, pellido, rfc, direccion, telefono){
        this._nombre = nombre;
        this._apellido = apellido;
        this._rfc = rfc;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    saluda() {
        console,log(`Hola ${this._nombre} ${this._apellido}. Tus datos son: 
            ${this._rfc} ,
            ${this._direccion} ,
            ${this._telefono}. `);
    }
    despedir (){
        console.log(`hola  ${this._nombre} ${this._apellido}, te comunicamos que has sido despedidio.`);
    }


}
const per= ()=>{
    let cantidad = parseInt(prompt("cantidad de empleados para consultar: "));
    let personal=[];
     
    for (let i=0; i<cantidad; i++){
        let nombre = prompt("ingrese el nombre: ");
        let = apellido = prompt("ingrese el apellido: ");
        let =rfc = prompt("ingrese el rfc: ");
        let= direccion = prompt("ingresa tu direccion");
        let = telefono= prompt("ingresa el numero telefonico: ");
        let empleado = new empleado(nombre, apelldo , rfc , direccion, telefono);
        personal.push(empelado);
        empelado.saluda();
    }
    if (per.length >0){
        personal[per.length -1].despedir();
    }
}
per();

