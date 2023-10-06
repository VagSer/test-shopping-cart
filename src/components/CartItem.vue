<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '../stores/CartStore';
import { ProductInCart } from '../types';

interface Props {
    productInCart: ProductInCart,
}

const props = defineProps<Props>()
const cart = useCartStore()

const disableMinus = computed(() => {return props.productInCart.howMany < 2})
const altShow = computed(() => {return props.productInCart.cover.alt || props.productInCart.name})
const totalCost = computed(() => {
    const sum = props.productInCart.price * props.productInCart.howMany
    return sum.toFixed(2)
})
</script>

<template>
    <tr class="cartItem">
        <td>
            <img 
                v-if="props.productInCart.cover"
                :src="props.productInCart.cover.img"
                :alt="altShow"
            />
            <img 
                v-else
                src="/img/emptyProduct.png"
                alt="Product without image"
            />
        </td>
        <td>{{ props.productInCart.name }} <AppButton 
                variant="warning"
                icon="delete"
                class="deleteButton"
                outlined
                @click="cart.removeProduct(props.productInCart.name)"
            /></td>
        <td>{{ props.productInCart.price }} ₽</td>
        <td>
            <AppButton 
                label="-"
                outlined
                @click="cart.changeQuantity(props.productInCart, -1)"
                :disabled="disableMinus"
            />
            {{ props.productInCart.howMany }}
            <AppButton 
                label="+"
                outlined
                @click="cart.changeQuantity(props.productInCart, +1)"
            />
        </td>
        <td>
            {{ totalCost }} ₽
        </td>
    </tr>
</template>

<style scoped>
.cartItem {
    & img {
        max-height: 50px;
        aspect-ratio: '4/3';
    }

    & td {
        text-align: center;
    }
}
</style>