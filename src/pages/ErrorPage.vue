<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const goTo = (way: string) => {
    router.push(way)
}
</script>

<template>
    <h2>Ошибка :(</h2>
    <p>Такой страницы нет</p>
    <AppButton 
            variant="primary"
            label="Перейти к товарам"
            @click="goTo('/shop')"
        />
</template>

<style scoped>
</style>