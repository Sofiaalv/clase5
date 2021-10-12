let estudiante = prompt("Ingrese su nombre").toLowerCase(); {

    if (estudiante == "alan") {
        console.log("Alumno ingresado");

        class alumno{
            constructor(nombre, edad, curso){
        
                this.nombre = nombre;
                this.edad = edad;
                this.curso = curso;
            }
        
        
            getEdad(){
        
                console.log(this.nombre + " tiene " + this.edad + " años ");
        
            }
        
        
        
            getCurso(){
        
                return this.nombre + " cursa " + this.curso;
        
            }
        
        }
        
        let alumno1 = new alumno( "Alan", 28, "biologia" );
        
        alumno1.getEdad();
        console.log("Cursando: "+ alumno1.getCurso());
    } else {

        console.log("Alumno denegado");
        }
 }


