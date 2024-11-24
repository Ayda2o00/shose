let laodData = () => {
    let template = document.getElementById("product-item-template").innerHTML;
    let holder = document.getElementById("products");
    ProductHandler.getData().forEach((product, index) => {
        let currentProduct = template;
        currentProduct = currentProduct.replace('__ID__', product.id);
        currentProduct = currentProduct.replace('__IMG__', product.image);
        currentProduct = currentProduct.replace('__TITLE__', product.title);
        currentProduct = currentProduct.replace('__PRICE__', product.price);
        currentProduct = currentProduct.replace('__CAT__', product.category);
        holder.innerHTML = currentProduct + holder.innerHTML;
    });
}