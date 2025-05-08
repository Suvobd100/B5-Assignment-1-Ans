interface Product {
    name: string;
    price: number;
}

export function getMostExpensiveProduct(products: Product[]): Product | null {
    // product array is empty 
    if (products.length === 0) {
        return null
    }
    //    checking products price 
    let mostExpensive = products[0];

    for (const product of products) {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    }

    return mostExpensive;
}