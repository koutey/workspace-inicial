let USER_ID = localStorage.getItem("nombre");
let formularioGuar = {};
datosGuardados = false;


function redirect() {
    window.location.href = "index.html";
}

function most() {
    if (!USER_ID) {
        redirect();
    } else { if (!datosGuardados){
        let mostrar = `
        <div class="form-perfil col-6" id="formus">
        <h2>Perfil</h2>
        <hr>
        <div class="perfil">
        <div class="campo">
        <label for="nombre">Nombre</label>
        <input class="form-control mb-2" type="text" id="name" required></input>
        </div>
        <div class="campo">
        <label for="segundonombre">Segundo nombre</label>
        <input class="form-control mb-2" type="text" id="secondname"></input>
        </div>
        <div class="campo">
        <label for="apellido">Apellido</label>
        <input class="form-control mb-2" type="text" id="lastname" required></input>
        </div>
        <div class="campo">
        <label for="segundoapellido">Segundo Apellido</label>
        <input class="form-control mb-2" type="text" id="secondlastname"></input>
        </div>
        <div class="campo">
        <label for="nombre">E-mail</label>
        <input class="form-control mb-2" type="email" placeholder="${USER_ID}" disabled>
        </div>
        <div class="campo">
        <label for="teléfono">Telefono</label>
        <input class="form-control mb-2" type="number" id="cellphone" required></input>
        </div>
        <div class="col-12">
        <button class="btn  btn-danger btn-block" type="submit" onclick="guardarDatos()">Guardar Cambios</button>
        </div>
        <div class="col-12">
        <button class="btn  btn-danger btn-block" type="submit" onclick="bandera()">fols</button>
        </div>
        </div>
        </div>
        `
        document.getElementById("profile").innerHTML = mostrar;
    }
    else if (datosGuardados){
        let mostrar = `
        <div class="form-perfil col-6" id="formus">
        <h2>Perfil</h2>
        <hr>
        <div class="perfil">
        <div class="campo">
        <label for="nombre">Nombre</label>
        <input class="form-control mb-2" type="text" id="name" required></input>
        </div>
        <div class="campo">
        <label for="segundonombre">Segundo nombre</label>
        <input class="form-control mb-2" type="text" id="secondname"></input>
        </div>
        <div class="campo">
        <label for="apellido">Apellido</label>
        <input class="form-control mb-2" type="text" id="lastname" required></input>
        </div>
        <div class="campo">
        <label for="segundoapellido">Segundo Apellido</label>
        <input class="form-control mb-2" type="text" id="secondlastname"></input>
        </div>
        <div class="campo">
        <label for="nombre">E-mail</label>
        <input class="form-control mb-2" type="email" placeholder="${USER_ID}" disabled>
        </div>
        <div class="campo">
        <label for="teléfono">Telefono</label>
        <input class="form-control mb-2" type="number" id="cellphone" required></input>
        </div>
        <div class="col-12">
        <button class="btn  btn-primary btn-block" type="submit" onclick="guardarDatos()">Guardar Cambios</button>
        </div>
        <div class="col-12">
        <button class="btn  btn-primary btn-block" type="submit" onclick="bandera()">true</button>
        </div>
        </div>
        </div>
        `
        document.getElementById("profile").innerHTML = mostrar;
    }}
}



function guardarDatos() {
    let nomb = document.getElementById("name").value;
    let secondname = document.getElementById("secondname").value;
    let lastname = document.getElementById("lastname").value;
    let secondlastname = document.getElementById("secondlastname").value;
    let cellphone = document.getElementById("cellphone").value;
    let formulario = {
        "name": nomb,
        "secondname": secondname,
        "lastname": lastname,
        "secondlastname": secondlastname,
        "cellphone": cellphone
    }
    this.formularioGuar = formulario;
    localStorage.setItem("formulario", JSON.stringify(formulario));
    datosGuardados = true;
}

function bandera() {
    if (this.datosGuardados){
        this.datosGuardados = false;
    } else if (!this.datosGuardados){
        this.datosGuardados = true;
    } console.log(this.datosGuardados);
}

document.addEventListener("DOMContentLoaded", function () {
   most();
})
