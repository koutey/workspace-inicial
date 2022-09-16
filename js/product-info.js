let productID = localStorage.getItem("prodID");
const productInfo = `https://japceibal.github.io/emercado-api/products/${productID}.json`
const commentsInfo = `https://japceibal.github.io/emercado-api/products_comments/${productID}.json`

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
}

function showComments(comment) {
    let comm = "";

    for (let comments of comment) {
        comm += `
                <br>
                <div class"comment-box">
                <h4> ${comments.user} -  ${comments.dateTime} - ${comments.score}</h4> 
                <hr>
                <p> ${comments.description} </p> 
                </div>
`}
    document.getElementById("comentarios").innerHTML = comm;
}

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(commentsInfo).then(function (resultObj) {
        if (resultObj.status === "ok") {
            ;
            showComments(resultObj.data);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(productInfo).then(function (resultObj) {
        if (resultObj.status === "ok") {
            ;
            showInfoProds(resultObj.data);
        }
    });
});