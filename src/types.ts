export type ButtonVariant = 'primary' | 'secondary' | 'danger' 
    | 'success' | 'warning'    

export type ButtonIcon = '' | 'delete'

export class Cover {
    constructor (
        public img: string,
        public alt?: string,
    ) {}
}

export class Product {
    constructor(
        public name: string,
        public price: number,
        public cover: Cover = new Cover("/img/emptyProduct.png", name),
    ) {}
}

export class ProductInCart extends Product {
    public howMany: number

    constructor(product: Product, howMany: number = 1) {
        super(product.name, product.price, product.cover)
        this.howMany = howMany
    }
}

export class Order {
    constructor (
        readonly id: number,
        public Products: ProductInCart[],
        public totalCost: number,
    ) {}
}