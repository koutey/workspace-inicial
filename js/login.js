var nombre = document.getElementById('nombre');
var contrasena = document.getElementById('contrasena');


function  redireccion(){
    window.location.href   = 'login.html';  
}

/* class Usuario{
    constructor(nombre, contrasena){
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.isLogged = false;
    }
}

let nicolas = new Usuario("nicolas", "contrasena"); 

Esta función crea un objeto que es un Usuario*/


//funcion para rediccionar desde el login al inicio tras verificar si los campos están vacios.
function funcionEnviar(){

    if(nombre.value == '' || nombre.value == null){
        alert('faltan datos')
    }
    else if(contrasena.value == '' || contrasena.value == null){
        alert('faltan datos')
    }   else{
        redireccion();
    }
    
    localStorage.setItem("nombre", nombre.value);

    return false;
}

