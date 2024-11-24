let laodData = () => {
    let template = document.getElementById("basket-template-body").innerHTML;
    let holder = document.getElementById("basket-table");
    let dataList = BasketDB.load();
    if (dataList == null || dataList.length == 0) {
        return;
    }
    holder.innerHTML = "";
    dataList.forEach((basket, index) => {
        if (basket != null) {
            let currentProduct = template;
            currentProduct = currentProduct.replace(/__ID__/g, basket.id);
            currentProduct = currentProduct.replace('__IMG__', basket.image);
            currentProduct = currentProduct.replace('__TITLE__', basket.title);
            currentProduct = currentProduct.replace('__PRICE__', basket.price);
            currentProduct = currentProduct.replace('__QTY__', basket.qty);
            holder.innerHTML += currentProduct;
        }
    });
}

increaseQTY = (id) => {
    let result = BasketDB.increaseQTY(id);
    if (result > 0) {
        document.getElementById("qty_" + id).innerText = result;
    }
}

decreaseQTY = (id) => {
    let result = BasketDB.decreaseQTY(id);
    if (result > 0) {
        document.getElementById("qty_" + id).innerText = result;
    } else {
        document.getElementById("basket-item-" + id).remove();
        location.href = location.href;
    }
}