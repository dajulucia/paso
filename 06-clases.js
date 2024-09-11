//definir clases y atributos dentro del constructor
class Persona{
    constructor(nombre, edad,sexo,direccion){
        this.nombre=nombre;
        this.edad=edad;a
        this,sexo=sexo;
        this.direccion=direccion;
    }
//Metodo saludar
    saludar(){
console.log(`hola ${this.nombre}`);
    }

//encapsulamiento
get nombre(){
    return this.monbre
}
set nombre (valores){
    this.nombre=valores;
}


}
let persona1=new persona("lucia",19,"F","Balancan");
console.log(persona1);
persona1.saludar()
