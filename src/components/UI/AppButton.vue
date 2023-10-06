<script setup lang="ts">
import { computed } from 'vue';
import { ButtonIcon, ButtonVariant } from '../../types';

interface Props {
    label?: string,
    variant?: ButtonVariant
    disabled?: boolean,
    outlined?: boolean,
    icon?: ButtonIcon,
}

const props = withDefaults(defineProps<Props>(), {
    label: '',
    variant: 'primary',
    disabled: false,
    outlined: false,
    icon: '',
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
    return props.outlined ? `outlined ${props.variant}` : `button ${props.variant}`
})

const clickOnButton = () => emit('click')
</script>

<template>
    <button
     :class="buttonClasses"
     :disabled="disabled"
     @click="clickOnButton"
    >
        {{ label }}
        <img v-if="icon !== ''" src="/icons/delete.svg" class="icon"/>
    </button>
</template>

<style scoped>
button {
    padding: 8px;
    cursor: pointer;
    --lightness: 55%;
    --chroma: 0.2;
    --hue: 280;
    transition: 0.25s;
    --current-color: oklch(var(--lightness) var(--chroma) var(--hue));

    &:disabled {
        --chroma: 0.02;
        --lightness: 80%;
        color: gray;
        cursor: default;
    }
}
.button {
    color: white;
    border-radius: 8px;
    border: 1px solid var(--current-color);
    background-color: var(--current-color);

    &:hover:not(:disabled) {
        color: black;
        --lightness: 70%;
    }
}

.outlined {
    color: var(--current-color);
    border: 1px solid var(--current-color);
    border-radius: 8px;
    background-color: white;

    &:hover:not(:disabled) {
        color: white;
        background-color: var(--current-color);
    }
}

.icon {
    height: 1rem;
}

.danger {
    --hue: 20;
}

.warning {
    --hue: 70;
}

.secondary {
    --hue: 315;
}

.success {
    --hue: 170;
}
</style>