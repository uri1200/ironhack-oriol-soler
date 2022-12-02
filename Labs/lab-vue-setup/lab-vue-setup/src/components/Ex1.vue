<template>
    <button @click="increaseCount">count is: {{ state.count }}</button>
  </template>
   
  <script lang="ts">
  import { ref, defineComponent } from "vue";
   
  export default defineComponent({
    name: "App",
    setup: () => {
      const state = ref({
        count: 0
      });
   
      const increaseCount = () => {
        state.value.count++;
      }
   
      return { state, increaseCount };
    },
  });
  </script>