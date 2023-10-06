<script setup lang="ts">
import { useRouter } from 'vue-router';
import CartTable from '../components/CartTable.vue';
import { useCartStore } from '../stores/CartStore';

const cart = useCartStore()

const router = useRouter()

const goTo = (way: string) => {
    router.push(way)
}
</script>

<template>
    <h2>Корзина</h2>
    <section v-if="!cart.selectedProducts.length" class="message">
        <p>Ваша корзина пуста :(</p>
        <AppButton 
            variant="primary"
            label="Добавить товары"
            @click="goTo('/shop')"
        />
    </section>
    <CartTable v-else />
</template>

<style scoped>
.message {
    background-color: lightblue;
    color: darkblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: auto;
    padding: 24px;
    box-shadow: 0px 0px 4px black;
}
.cartTable {
    border: 1px solid;
    width: max(90vw, 800px);
    margin: 4px auto;
    max-height: 500px;
    overflow-y: auto;
}

.cartInfo {
    display: flex;
    width: max(90vw, 800px);
    margin: auto;
    justify-content: space-between;
}

.Buttons {
    display: flex;
    border-radius: 8px;
    & :first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    & :last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
}
</style>