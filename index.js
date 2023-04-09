class ProductManager{
    constructor(){
        this.products = [];
        this.autoIncrementId = 1;
    }

    addProduct(title, description,price,thumbnail,code,stock){
        //validar que los campos sean obligatorios
        if(!title||!description||!price||!thumbnail||!code||!stock){
            throw new Error("todos los campos son obligatorios");
        }

//validar que  no se repita el campo "code"
if(this.products.some((product)=>product.code === code)){
    throw new Error("Ya esxiste un producto con el mismo codigo");
}

const newProduct = {
    id: this.autoIncrementId++,
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
};

this.products.push(newProduct);

return newProduct;
}

getProducts(){
    return this.products;
}

getProductById(id){
    const product = this.products.find((product)=>product.id === id);
    
    if(!product){
        console.error("Not found");
    }

    return product;
    }
}
    

module.exports = ProductManager;

