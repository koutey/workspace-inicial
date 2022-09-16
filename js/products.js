const products = "https://japceibal.github.io/emercado-api/cats_products/"

const ORDER_ASC_BY_SOLD = "AZ";
const ORDER_DESC_BY_SOLD = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let productsArray = [];
let currentProductsArray = [];
let min = undefined;
let max = undefined;
let currentSortCriteria = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_SOLD)
    {
        result = array.sort(function(a, b) {
            let aCost = a.soldCount;
            let bCost = b.soldCount;

            if ( a.soldCount < b.soldCount ){ return -1; }
            if ( a.soldCount > b.soldCount ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_SOLD){
        result = array.sort(function(a, b) {
            let aCost = a.soldCount;
            let bCost = b.soldCount;

            if ( a.soldCount > b.soldCount ){ return -1; }
            if ( a.soldCount < b.soldCount ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.cost);
            let bCount = parseInt(b.cost);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function setID(id) {
    localStorage.setItem("prodID", id);
    window.location.href = "product-info.html"
}

function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

        if (((min == undefined) || (min != undefined && parseInt(product.cost) >= min)) &&
            ((max == undefined) || (max != undefined && parseInt(product.cost) <= max))){

            htmlContentToAppend += `
            <div onclick="setID(${product.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name} - ${product.currency} - ${product.cost}</h4>
                            <small class="text-muted">${product.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </div>
            `
            }

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);

    showProductsList();
}

document.addEventListener("DOMContentLoaded", function(){
    var id=localStorage.catID;
    getJSONData(products+id+".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data.products;
            showProductsList(productsArray);
        }
    });
});

document.getElementById("sortAsc").addEventListener("click", function(){
    sortAndShowProducts(ORDER_ASC_BY_SOLD);
});

document.getElementById("sortDesc").addEventListener("click", function(){
    sortAndShowProducts(ORDER_DESC_BY_SOLD);
});

document.getElementById("sortByCount").addEventListener("click", function(){
    sortAndShowProducts(ORDER_BY_PROD_COUNT);
});

document.getElementById("clearRangeFilter").addEventListener("click", function(){
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    min = undefined;
    max = undefined;

    showProductsList();
});

document.getElementById("rangeFilterCount").addEventListener("click", function(){

    min = document.getElementById("rangeFilterCountMin").value;
    max = document.getElementById("rangeFilterCountMax").value;

    if ((min != undefined) && (min != "") && (parseInt(min)) >= 0){
        min = parseInt(min);
    }
    else{
        min = undefined;
    }

    if ((max != undefined) && (max != "") && (parseInt(max)) >= 0){
        max = parseInt(max);
    }
    else{
        max = undefined;
    }

    showProductsList();
});

/* //Creo una función para redireccionarme a la página de products-info y ver el producto
function mostrar(params) {
    console.log(params);
    window.location.href   = 'product-info.html'; 
    debugger
} */