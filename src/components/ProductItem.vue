<script setup lang="ts">
import { computed, ref } from 'vue';
import { Product } from '../types';
import { useCartStore } from '../stores/CartStore';

interface Props {
    product: Product
}

const props = defineProps<Props>()

const isAdded = ref(false)

const buttonLabel = computed(() => isAdded.value? 'Добавлено' : 'Добавить')
const showAlt = computed(() => {
    return props.product.cover.alt || props.product.name
})

const cart = useCartStore()

const addToCart = () => {
    isAdded.value = true
    cart.addProduct(props.product)
    setTimeout(() => isAdded.value = false, 2000)
}
</script>

<template>
    <article class="productItem">
        <h3>{{ product.name }}</h3>
        <img :src="product.cover.img" :alt="showAlt"/>
        <footer>
            <AppButton 
                :label="buttonLabel"
                :disabled="isAdded"
                variant="success"
                @click="addToCart()"
            />
        </footer>
    </article>
</template>

<style scoped>
.productItem {
    box-shadow: 0px 0px 4px black;
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    margin: 12px;

    & h3{
        text-align: center;
    }

    & img {
        width: 200px;
        aspect-ratio: '4:3';
    }
}
</style>