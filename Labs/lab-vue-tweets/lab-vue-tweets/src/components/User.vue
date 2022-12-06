<template>
    <span class="user">
        <span class="name">{{userData.name}}</span>
        <span class="handle">@{{userData.handle}}</span>
    </span>
</template>

<script setup>
    import {defineProps} from 'vue';

    const props = defineProps({
       userData:{
        name: String,
        handle: String
       } 
    })
</script>

<style scoped>
</style>
