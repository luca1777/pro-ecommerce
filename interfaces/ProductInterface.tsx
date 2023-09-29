interface Product {
    name: string,
    price: string,
    description: string,
    images: ProductImage[]
}


interface ProductImage {
    alt: string,
    id: number,
    name: string
    src: string
}