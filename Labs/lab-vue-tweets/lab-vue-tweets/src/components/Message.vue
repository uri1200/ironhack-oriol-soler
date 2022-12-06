<template>
    <p class="message">
       {{message}}
    </p>
</template>

<script setup>
    import {defineProps} from 'vue';

    const props = defineProps({
        message: String
    })
</script>

<style scoped>
</style>