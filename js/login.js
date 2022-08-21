var nombre = document.getElementById('nombre');
var contrasena = document.getElementById('contrasena');
var error = document.getElementById('error');


function  redireccion(){
    window.location.href   = 'login.html'     
}

function funcionEnviar(){

    var mensajeError = [];

    if(nombre.value == '' || nombre.value == null){
        alert('faltan datos')
    }
    else if(contrasena.value == '' || contrasena.value == null){
        alert('faltan datos')
    }   else{
        redireccion();
    }
    

    return false;
}