class alumno{
    constructor(numDeControl, Nombre, Edad){
        this._numDeControl=numDeControl;
        this._Nombre=Nombre;
        this._Edad=Edad;
    }
}

class materias{
    constructor(NombreDeLamateria, Calificaciones,Calificaciones2){
        this._NombreDeLamateria=NombreDeLamateria;
        this._Calificaciones=Calificaciones;
        this._Calificaciones2=Calificaciones2;
    }
}

class Calificaciones{
    constructor(Alumno, Materia, Promedio){
        this._alumno=Alumno;
        this._materia=Materia;
        this._promedio=Promedio;
    }
}

class docente {
    constructor(nombre, materia){
        
    }
}