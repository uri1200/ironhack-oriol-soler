<template>
  <section>
    <h1>Iteration 4</h1>
    <div v-for="(data, index) in data" :key="index">
      <h2>{{ data.title }}</h2>
      <h3>{{ index }} - {{ data.description }}</h3>
      <p>{{ data.content }}</p>
    </div>
  </section>
</template>
<script setup>
import { reactive } from "vue";

const data = reactive([
  {
    title: "Titulo1n",
    description: "esta es la descripcion del titulo 1",
    content: "Contenido serio",
  },
  {
    title: "Titulo2n",
    description: "esta es la descripcion del titulo 2",
    content: "Contenido cojonudo",
  },
    {
    title: "Titulo3n",
    description: "esta es la descripcion del titulo 3",
    content: "Contenido de verdad",
  },
]);
</script>

<style>
</style>
