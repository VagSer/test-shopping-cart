<script setup lang="ts">
import { useCartStore } from '../stores/CartStore';
import CartItem from './CartItem.vue';

const cart=useCartStore()
</script>

<template>
    <section class="wrapper">
        <table v-if="cart.selectedProducts.length" class="cartTable">
            <thead>
                <tr>
                    <th></th>
                    <th>Название товара</th>
                    <th>Цена за 1 ед.</th>
                    <th>Кол-во товара</th>
                    <th>Стоимость</th>
                </tr>
            </thead>
            <tbody>
                <CartItem 
                    v-for="product in cart.selectedProducts"
                    :productInCart="product"
                />
            </tbody>
        </table>
    </section>
        <section class="cartInfo">
            <section class="Buttons">
                <AppButton 
                    label="Очистить корзину"
                    variant="danger"
                    @click="cart.removeAll"
                />
                <AppButton 
                    label="Оформить заказ"
                    variant="success"
                    @click="cart.createOrder"
                />
            </section>
            <h3>Итоговая стоимость: {{ cart.totalCost }} ₽</h3>
    </section>
</template>

<style scoped>
.wrapper {
    max-height: 50svh;
    overflow-y: auto;
    width: max(90vw, 800px);
    margin: 4px auto;
    box-shadow: 1px 1px 4px black;
}
.cartTable {
    width: 100%;
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