class ProductDB {
    static save(dataList) {
        localStorage.setItem("data", JSON.stringify(dataList));
    }

    static load() {
        let str = localStorage.getItem("data");
        return JSON.parse(str);
    }
}