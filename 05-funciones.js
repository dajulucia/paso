//factory funtion
const persona1={
    nombre :"lucia",
    edad :19
}
const persona2={
    nobre:"jose",
    edad:23

}

function datospersona(nombre,edad){
    return{
        nombre,
        dead,
       active: true
    }
        

}
{
let persona1=datospersona("lucia,",24);
let persona2=datospersona("luis",19);
/* console.log(persona1,persona2);
 */

//camel case
const datosusuario={
    nombre:"lucia",
    ead:19,
    paswor:1234,
    direcion:{
        colonia:"el carmne",
        calle:"principal",
        numero:123
},
    sueldo:234.34,
    guardarusuario:function(){}

}
//Add registro y parametros
}
const user={id:1};
user.nombre="lucia";
user,guardaruser=function(){
    console.log("Guardandouser...");
    
}
console.log(user);
user.guardaruser();

// objetos definidos
/* const person=Object.freeze({id:1,nombre:"lucia"}) */
const person=Object.seal({id:1,nombre:"lucia"})
person.id=2;
person.nombre="luci"
person.edad=19;

//console.log(person)
//pasar funciones como parmetro
function pitbull(nombre){
    this._nombre=nombre;
}

function Animal(Fn,argumento){
    return new Fn(argumento)
}
let animal1=Animal(pitbull,"Firulais")
console.log(animal1);

