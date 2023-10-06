import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { ProductInCart, Product, Order } from "../types";
export const useCartStore = defineStore('cart', () => {
    const selectedProducts = ref([] as ProductInCart[])

    const productsInStorage = localStorage.getItem('selectedProducts')
    if (productsInStorage) {
        const savedProducts = JSON.parse(productsInStorage)._value
        savedProducts.forEach((saved: ProductInCart) => {
            const savedProduct: Product = new Product(saved.name, saved.price, saved.cover) 
            selectedProducts.value.push(new ProductInCart(savedProduct, saved.howMany))
        })
    }

    const totalCost = computed(() => {
        let sum = 0
        selectedProducts.value
            .forEach(productInCart => 
            sum += productInCart.price * productInCart.howMany)
        return sum.toFixed(2)
    })

    const totalHowMany = computed(() => {
        let counter = 0
        selectedProducts.value.forEach(product => counter += product.howMany)
        return counter
    })

    const addProduct = (newProduct: Product) => {
        const isInCart = selectedProducts.value
            .some(productInCart => productInCart.name === newProduct.name)
        if (isInCart) {
            selectedProducts.value.forEach(productInCart => {
                if (productInCart.name === newProduct.name) {
                    productInCart.howMany++
                }
            })
        } else {
            selectedProducts.value.push(new ProductInCart(newProduct))
        }
    }

    const removeProduct = (removeProduct: string) => {
        selectedProducts.value = selectedProducts
            .value.filter(productInCart => productInCart.name !== removeProduct)
    }

    const removeAll = () => selectedProducts.value.length = 0

    const changeQuantity = (changedProduct: ProductInCart, number: number) => {
        selectedProducts.value.forEach(productInCart => {
            if (productInCart.name === changedProduct.name) {
                productInCart.howMany += number
            }
        })
    }

    const createOrder = () => {
        const orderId = Date.now()
        alert(`Ваш заказ №${orderId} успешно создан`)
        const order = new Order(orderId, [...selectedProducts.value], +totalCost.value)
        removeAll()
        console.log(order)
    }

    watch(() => selectedProducts, () => {
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts))
    }, {deep: true})

    return {
        selectedProducts, 
        totalCost,
        totalHowMany,
        addProduct,
        removeProduct,
        removeAll,
        changeQuantity,
        createOrder
    }
})