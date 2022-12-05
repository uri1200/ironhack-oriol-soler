<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Iteration2 from "./components/Iteration2.vue";
import Iteration3 from "./components/Iteration3.vue";
import Iteration4 from "./components/Iteration4.vue";
import Iteration5 from "./components/Iteration5.vue";
</script>

<template>
  <NavBar />
  <main>
    <Iteration2 />
    <Iteration3 />
    <Iteration4 />
    <!-- <Iteration5 /> -->
  </main>
  <Footer />
</template>


<style scoped>
body {
  padding: 0 2rem;
}
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}
</style>
