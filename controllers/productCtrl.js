let laodData = () => {
    let id = getParameterByName("id");
    let product= ProductHandler.getDataById(id);
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-title").innerText = product.title;
    document.getElementById("product-price").innerText = product.price;
    document.getElementById("product-category").innerText = product.category;
    document.getElementById("product-description").innerText = product.description;
}

let addToBasket = () =>{
    let id = getParameterByName("id");
    let product = ProductHandler.getDataById(id);
    BasketDB.addToBasket(product);
}