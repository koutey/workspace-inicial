let USER_ID = localStorage.getItem("nombre");
const productInfo = `https://japceibal.github.io/emercado-api/user_cart/${USER_ID}.json`
let compra = document.getElementById("finCompra");
let terminos = document.getElementById("modalTerminos");

function cart(auto) {

    if (auto.data) {

        let cartImg = `
            <img class="imageTabla" src="${auto.data.articles[0].image}"/>`
        let mostrar = `
    <table id="tabla">
    <thead>
        <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Costo</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${cartImg}</td>
            <td>${auto.data.articles[0].name}</td>
            <td>${auto.data.articles[0].currency} <span id="item"> ${auto.data.articles[0].unitCost}</span></td>
            <td><input onchange="calculo()" type="number" id="cantidad" min="0" max="99" placeholder="0" required></input></td> 
            <td id="subtotal">${this.subTotal}</td> 
        </tr>
    </tbody>
</table>
`
        document.getElementById("show").innerHTML = mostrar;

        let costos = `
        <div>
        <div>
        <h4>Subtotal</h4>  <span style="float: right;" id="subtotaldos">0</span>
        <p>Costo unitario del producto por cantidad</p>
            </div>
            <div>
            <h4>Costo de envío</h4> <span style="float: right;" id="matrix">0</span>
            <p>Según el tipo de envío</p>
            </div>
            <div>
            <h4>Total($)</h4> <span style="float: right;" id="tote">0</span>
            </div>
        </div>    
        `
        document.getElementById("costos").innerHTML = costos;
    }

}

function envio() {
    let muestra = `<div id="porcent">
    <div class="form-check">
    <input type="radio" name="recargo" onclick="calcU()" class="porcT form-check-input" value="0.15">
    <label class="form-check-label" for="flexRadioDefault1">
      Premium 2 a 5 (15%)
    </label>
  </div>
  <div class="form-check">
  <input type="radio" name="recargo" onclick="calcU()" class="porcD form-check-input" value="0.07">
    <label class="form-check-label" for="flexRadioDefault2">
      Express 5 a 8 (7%)
    </label>
  </div>
  <div class="form-check">
  <input type="radio" name="recargo" onclick="calcU()" class="porcU form-check-input" value="0.05">
    <label class="form-check-label" for="flexRadioDefault2">
      Standard 12 a 15 días (5%)
    </label>
  </div>
  </div>
    `
    document.getElementById("tipoEnvio").innerHTML = muestra;
}

let descuento;

function calcU() {
    let ele = document.getElementsByName('recargo');
    for (i = 0; i < ele.length; i++) {
        if (ele[0].checked) {
           /*  console.log("loquevosquierasquedigacadauno"); */
            resultado = this.subTotal * 0.15
            total = resultado + this.subTotal;
        }
        if (ele[1].checked) {

            resultado = this.subTotal * 0.07
            total = resultado + this.subTotal;
        }
        if (ele[2].checked) {

            resultado = this.subTotal * 0.05
            total = resultado + this.subTotal;
        }
    }
    document.getElementById("matrix").innerHTML = resultado;
    document.getElementById("tote").innerHTML = total;
    
}

let subTotal;

function calculo() {
    let cantidad = document.getElementById("cantidad").value;
    let item = document.getElementById("item").innerHTML;
    let resultado = cantidad * parseFloat(item);
    /* console.log(resultado); */

    document.getElementById("subtotal").innerHTML = resultado;
    document.getElementById("subtotaldos").innerHTML = resultado;
    this.subTotal = resultado;
}

function finCompra(){

}

// Funcion para realizar las validaciones con bootstrap
(function () {
    "use strict";

    // Agarra todos los forms a los cuales aplicar bootstrap
    var forms = document.querySelectorAll(".needs-validation");

    // Loop para evitar que se realize el "submit"
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            },
            false
        );
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(productInfo).then(function (resultObj) {
        /* console.log("si"); */
        if (resultObj.status === "ok") {
            cart(resultObj);
            /* console.log(resultObj); */
            calculo();
            /* calcU(); */
        }

    });
});

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(productInfo).then(function (resultObj) {
        if (resultObj.status === "ok") {
            envio(resultObj);
        }

    });
});

compra.addEventListener("click", finCompra);