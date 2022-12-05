<!-- EX1 -->
<template>
  <div>
          <!-- PT1 -->
    <div>
      <h1>Iteration2.1</h1>
      <p>{{ 2 + 2 }}</P>
      <p>{{ calc }}</p>
      <p>{{ n1 + n2 }}</p>
    </div>
          <!-- PT2 -->
    <div>
      <h1>Iteration2.2</h1>
      <h2>{{ myFuncText() }}</h2>
      <h2 v-text="text"></h2>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";

//  PT1
const calc = ref(2 * 4);
const n1 = ref(4);
const n2 = ref(5);

//PT2
const myFuncText = () => {
  return "Hola me llamo Oriol en una funcion";
};
const text = ref("Hola me llamo Oriol en una variable");

</script>

<style scoped>

</style>
