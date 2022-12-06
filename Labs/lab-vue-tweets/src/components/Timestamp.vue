<template>
    <span class="timestamp">{{time}}</span>
</template>

<script setup>
    import {defineProps} from 'vue';

    const props = defineProps({
        time: String
    })
</script>

<style scoped>
</style>