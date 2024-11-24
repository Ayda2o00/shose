window.onload = function () {
    let dataList = ProductDB.load();
    if (dataList == null) {
        dataList = ProductHandler.createData();
        ProductDB.save(dataList);
    }
    ProductHandler.setData(dataList);
    laodData();
}

getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}