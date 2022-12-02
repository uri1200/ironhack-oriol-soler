<!-- HTML -->
<template>
    <h1>{{ msg }}</h1>
    <img style='width: 100px' v-bind:src="meme.image" :alt="meme.alt" />

    <!-- <button v-on:click="wuTang()">Click me - LONG SYNTAX</button> -->
    <!-- Short Version - SYNTAX -->
    <button @click="buttonAlert">Alerta - pulsame!</button>
</template>
<!-- JS -->
<script setup>
import { ref, reactive } from "vue";
//EX2
const msg = ref("Hola me llamo Oriol");
const meme = reactive({
  image: "https://ih1.redbubble.net/image.2955202663.5204/fposter,small,wall_texture,product,750x1000.jpg",
  alt: "default-image",
});

//EX3
const buttonAlert = () => {
  alert("Sal de mi cienaga");
};
</script>
<!-- CSS -->
<style>


</style>