var nombre = document.getElementById('nombre');
var contrasena = document.getElementById('contrasena')

function  redireccion(){
    window.location.href   = 'login.html';  
}

function redirect(){
    window.location.href   = 'index.html';
}

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

function cerrarSesion(){
    localStorage.removeItem("nombre");
}

/* document.getElementById("cerrar").addEventListener('submit', function(){
    cerrarSesion(); 
    redirect();
})
 */