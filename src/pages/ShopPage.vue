<script setup lang="ts">
import ProductItem from '../components/ProductItem.vue';
import {useShopStore} from '../stores/ShopStore';
const shop = useShopStore();
</script>

<template>
    <h2>Список продуктов и категорий</h2>
    <input 
      v-model="shop.searchName"
      placeholder="Поиск по названию"
      class="search"
    />
    <main class="Shop">
      <article
        v-if="!shop.searchedProducts.length"
        class="error"
      >
        Продуктов с таким названием нет :(
      </article>
      <ProductItem 
        v-for="product in shop.searchedProducts"
        :product="product"
      />
    </main>
</template>

<style scoped>
.Shop {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.search {
  display: flex;
  font-size: 1.1rem;
  margin: 4px auto;
  padding: 4px;
}

.error {
  display: flex;
  padding: 24px;
  margin: 8px auto;
  background-color: pink;
  color: darkred;
  box-shadow: 0px 0px 4px black;
}
</style>