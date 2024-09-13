const prompt = require("prompt-sync")()

class cliente {
    constructor(menbresiadelCliente, nombredelCliente, direcciondelCLiente, telefonodelCliente, estadodelCliente){
        this._menbresia= menbresiadelCliente
        this._nombre = nombredelCliente
        this._direccion = direcciondelCLiente
        this._telefono = telefonodelCliente
        this._estdo = estadodelCliente
        this._consulta=[]
    }

    rgtdelCliente(){
        let va = parseInt(prompt("Ingresa el numero de personas a registrar: "));
        for (let i = 0; i<va; i++){
           
            this._estdo} = prompt(`Tu actual estado es 1. Con deudas , 2. Sin deudas`);
            switch(parseInt(this._estdo)){
                case 1:
                    this._estdo =`Deudor`;
                    break;
                
                case 2:
                    this._estdo= `Libre`;
                    break;    
            }
            let datos = {
                nombre:this._nombre,
                menbresia:this._menbresia,
                direccion:this._direccion,
                telefono:this._telefono,
                estado:this._estado
            }
            this._consulta.push(datos)

        }
    }
    mensaje(){
        if(this._consulta.length>0){
            this._consulta.forEach((mvp)=>{
                console.log(`Hola ${mvp.nombre} tu  membresia ${mvp.menbresia} esta activa`);
            })
        }else{
            console.log("Nohat datos en el campo ");
        }
    }

    ElimDeudor(){
        for(let i = 0; i<this._consulta.length; i++){
            if(this._consulta[i].estado === `deudor`){
                this._consulta.slice(i, 1);
                console.log(` El cliente ${this._consulta[i].nombre} fue dado de baja`);
            }else{
                console.log(`El cliente ${this._consulta[i].nombre} esta libre de deudas`);
            }
        }
    }
}

class cine extends cliente {
    constructor(numero, titulo, clasificacion, disponibilidad, tipo){
        super()
        this._numero = numero
        this._titulo = titulo
        this._clasificacion = clasificacion
        this._disponible = diisponible
        this._tipo = tipo
        this._consultaDelaPelicula = []
        this._PrecioDePeliculas
    }

    ConsultarLasPeliculas(){
        let peliculas = parent(prompt("Ingresa el nombre de la pelicula que desea consultar"));
        for(let i=0; i <peliculas; i++){
            this._titulo= prompt("Nombre de la pelicula")
        }
    }
}
let cliente = new cliente();
cliente.registroCliente()
cliente.EliminarDeudor()