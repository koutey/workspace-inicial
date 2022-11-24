let USER_ID = localStorage.getItem("nombre");
document.getElementById("user").placeholder = USER_ID;
let formularioGuar = {};
/* datosGuardados = false; */


document.addEventListener("DOMContentLoaded", function (){
    if (!USER_ID){
        redirect();
    }
    if (localStorage.getItem("formulario") != {} || undefined){
        let form = JSON.parse(localStorage.getItem("formulario"));

        let mostrar = `
        <div class="form-perfil col-6" id="formus">
        <h2>Perfil</h2>
        <hr>
        <div class="perfil">
        <div class="campo">
        <label for="nombre">Nombre</label>
        <input class="form-control mb-2" type="text" id="name" value="${form.name}" required></input>
        </div>
        <div class="campo">
        <label for="segundonombre">Segundo nombre</label>
        <input class="form-control mb-2" type="text" id="secondname" value="${form.secondname}"></input>
        </div>
        <div class="campo">
        <label for="apellido">Apellido</label>
        <input class="form-control mb-2" type="text" id="lastname" value="${form.lastname}" required></input>
        </div>
        <div class="campo">
        <label for="segundoapellido">Segundo Apellido</label>
        <input class="form-control mb-2" type="text" id="secondlastname" value="${form.secondlastname}"></input>
        </div>
        <div class="campo">
        <label for="nombre">E-mail</label>
        <input class="form-control mb-2" type="email" placeholder="${USER_ID}" disabled>
        </div>
        <div class="campo">
        <label for="teléfono">Telefono</label>
        <input class="form-control mb-2" type="number" id="cellphone" value="${form.cellphone}" required></input>
        </div>
        <div class="col-12">
        <button class="btn  btn-primary btn-block" type="submit" onclick="guardarDatos()">Guardar Cambios</button>
        </div>
        </div>
        </div>
        `
        document.getElementById("profile").innerHTML = mostrar;
    } 
})

function redirect() {
    window.location.href = "index.html";
}

function guardarDatos() {
    let nomb = document.getElementById("name");
    let secondname = document.getElementById("secondname");
    let lastname = document.getElementById("lastname");
    let secondlastname = document.getElementById("secondlastname");
    let cellphone = document.getElementById("cellphone");
    let formulario = {
        "name": nomb.value,
        "secondname": secondname.value,
        "lastname": lastname.value,
        "secondlastname": secondlastname.value,
        "cellphone": cellphone.value
    }
    this.formularioGuar = formulario;
    localStorage.setItem("formulario", JSON.stringify(formulario));
    /* datosGuardados = true; */

    let mostrar = `
        <div class="form-perfil col-6" id="formus">
        <h2>Perfil</h2>
        <hr>
        <div class="perfil">
        <div class="campo">
        <label for="nombre">Nombre</label>
        <input class="form-control mb-2" type="text" id="name" value="${nomb.value}" required></input>
        </div>
        <div class="campo">
        <label for="segundonombre">Segundo nombre</label>
        <input class="form-control mb-2" type="text" id="secondname" value="${secondname.value}"></input>
        </div>
        <div class="campo">
        <label for="apellido">Apellido</label>
        <input class="form-control mb-2" type="text" id="lastname" value="${lastname.value}" required></input>
        </div>
        <div class="campo">
        <label for="segundoapellido">Segundo Apellido</label>
        <input class="form-control mb-2" type="text" id="secondlastname" value="${secondlastname.value}"></input>
        </div>
        <div class="campo">
        <label for="nombre">E-mail</label>
        <input class="form-control mb-2" type="email" placeholder="${USER_ID}" disabled>
        </div>
        <div class="campo">
        <label for="teléfono">Telefono</label>
        <input class="form-control mb-2" type="number" id="cellphone" value="${cellphone.value}" required></input>
        </div>
        <div class="col-12">
        <button class="btn  btn-primary btn-block" type="submit" onclick="guardarDatos()">Guardar Cambios</button>
        </div>
        </div>
        </div>
        `
        document.getElementById("profile").innerHTML = mostrar;
}

/* function bandera() {
    if (this.datosGuardados){
        this.datosGuardados = false;
    } else if (!this.datosGuardados){
        this.datosGuardados = true;
    } console.log(this.datosGuardados);
} */

