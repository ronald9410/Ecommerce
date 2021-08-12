let articlesArray = [];

function showProducts() {

    let htmlContentToAppend = "";
    for (let i = 0; i < articlesArray.length; i++) {
        let article = articlesArray[i];



        htmlContentToAppend += `
            <a href="category-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + article.imgSrc + `" alt="` + article.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + article.name + `</h4>
                            <small class="text-muted">` + article.cost + article.currency + ` </small>
                        </div>
                        <p class="mb-1">` + article.description + `</p>
                    </div>
                </div>
            </a>
            `


        document.getElementById("products-list").innerHTML = htmlContentToAppend;
    }
}




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {

    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            articlesArray = resultObj.data;
            showProducts(articlesArray);
        }






    });
});