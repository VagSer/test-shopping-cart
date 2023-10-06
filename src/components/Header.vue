<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useCartStore } from '../stores/CartStore';

const router = useRouter()

const cart = useCartStore()

const CartLabel = computed(() => {
    return cart.totalHowMany? `Корзина ${cart.totalHowMany}` : 'Корзина'}
)

const goTo = (way: string) => {
    router.push(way)
}
</script>

<template>
    <header class="Header">
        <section class="ButtonsField">
          <AppButton 
            outlined
            variant="secondary"
            :label="CartLabel"
            @click="goTo('/cart')"
          />
          <AppButton 
            outlined
            variant="primary"
            label="Товары"
            @click="goTo('/shop')"
          />
        </section>
    </header>
</template>

<style scoped>
.Header {
  position: sticky;
  top: 0;
  background-color: darkblue;
  margin: 0;
  padding: 4px;
}
</style>