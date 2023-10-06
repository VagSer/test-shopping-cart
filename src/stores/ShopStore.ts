import {defineStore} from 'pinia';
import { computed, ref } from 'vue';
import { Product } from '../types';
import { testProducts } from '../assets/testProducts';

export const useShopStore = defineStore('shop', () => {
    const products = ref([] as Product[]);

    const searchName = ref('')

    testProducts.forEach(product => products.value.push(new Product(
        product.name, product.price, product.cover
    )))

    const searchedProducts = computed(() => {
        return [...products.value].filter(product => product.name.toLowerCase().includes(searchName.value.toLowerCase()))
    })
  
    return { products, searchName, searchedProducts }
  })