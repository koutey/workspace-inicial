let productID = localStorage.getItem("prodID");
const productInfo = `https://japceibal.github.io/emercado-api/products/${productID}.json`
const commentsInfo = `https://japceibal.github.io/emercado-api/products_comments/${productID}.json`
const relatedProds = productInfo.relatedProducts;
let relatedArray = [];

function showInfoProds(product) {
    let prodImg = "";

    for (let img of product.images) {
        prodImg += `
            <img src="${img}"/>`
    } let mostrar = `
                <div>
                    <br><br>
                    <h3>${product.name}</h3>
                    <hr>
                    <label><strong>Precio</strong></label>
                    <p>${product.currency} ${product.cost}</p>
                    <label><strong>Descripción</strong></label>
                    <p>${product.description}</p>
                    <label><strong>Vendidos</strong></label>
                    <p>${product.soldCount} artículos</p>
                    <label><strong>Categoría</strong></label>
                    <p>${product.category}<p>
                </div>
                <label><strong>Ilustraciones de ejemplo</strong></label>
                <br><br>
                <div class="prodImg">${prodImg}
                </div>
    `
    document.getElementById("mostrar").innerHTML = mostrar;
    console.log(product);
    console.log(relatedArray);
}

function showComments(comment) {
    let comm = "";

    for (let comments of comment) {
        comm += `
                <br>
                <div class="row">
                <div class="col">
                 <div class="d-flex w-100 justify-content-between comments ">
                <div class="mb-1">
                <div class"comment-box">
                <h4><small> ${comments.user} -  ${comments.dateTime} - `
                for (let index = 1; index <= 5; index++) {
                if (index <= comments.score) {
                comm += `<span class="fa fa-snowflake-o checked"></span>`;
                } else {
                comm += `<span class="fa fa-snowflake-o"></span>`;
                }
                }
                comm += `</h4>
                <hr>
                <p> ${comments.description} </small></p>
                </div>
                </div>
                </div>
                </div>
                </div>
`}
    document.getElementById("comentarios").innerHTML = comm;
}

function showRelated() {
    let prodRel = [];
    for (let index = 0; index < relatedArray.length; index++) {
        prodRel +=
            `
                <div class="rel"><div class="tarjeta">
                <div style=" margin: auto;" onclick="redirect(${relatedArray[index].id})">
                <p style="text-align: center;">${relatedArray[index].name}</p>
                <div class="prodImg cursor-active"><img src="${relatedArray[index].image}">
                </div>
                </div>
                </div>
    `
        document.getElementById("prodRel").innerHTML = prodRel;
    }
}

function redirect(id) {
    localStorage.setItem("prodID", id);
    window.location = "product-info.html";
}

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(productInfo).then(function (resultObj) {
        if (resultObj.status === "ok") {
            relatedArray = resultObj.data.relatedProducts;
            showRelated(resultObj.data);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(commentsInfo).then(function (resultObj) {
        if (resultObj.status === "ok") {
            showComments(resultObj.data);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(productInfo).then(function (resultObj) {
        if (resultObj.status === "ok") {
            showInfoProds(resultObj.data);
        }
    });
});