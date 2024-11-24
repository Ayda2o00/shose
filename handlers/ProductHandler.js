class ProductHandler {
    static dataList = new Array();

    static addData(product) {
        this.dataList.push(product);
    }

    static setData(list) {
        for (let data of list) {
            this.dataList.push(data);
        }
    }

    static getData() {
        return this.dataList;
    }

    static getDataById(id) {
        return this.dataList.find((value) => value.id == id);
    }

    static createData() {
        let list = new Array();
        for (let index = 1; index <= 15; index++) {
            let product = new Product(index, "Fresh fowm X 860v" + index, this.getRandom(120, 480), "Men's Running", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, nihil, nisi, odit ipsa at beatae nemo aut aliquid iusto incidunt harum itaque eos quis debitis. Recusandae pariatur earum magnam ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam perferendis harum voluptatem, laborum nam provident maiores odit, exercitationem ipsam ab dolor placeat distinctio delectus consequuntur. Excepturi dolor rem optio hic aspernatur commodi necessitatibus quasi, eos ex consequuntur numquam aliquam soluta cum consequatur beatae voluptatem voluptatibus ratione. Inventore, nam expedita facilis quisquam architecto totam itaque nesciunt reiciendis vel sit, in, obcaecati molestias tempora dignissimos accusamus at aspernatur. Magni iusto porro reprehenderit et, corporis necessitatibus repudiandae sit reiciendis ad magnam in consequatur eum numquam officia aut amet alias, soluta sed recusandae tempore explicabo optio sunt accusamus autem. Expedita culpa rerum fugiat omnis!", "src/images/shoes" + index + ".jpeg");
            list.push(product);
        }
        return list;
    }

    static getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}