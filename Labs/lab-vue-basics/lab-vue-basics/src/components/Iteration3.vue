<template>
  <h1>Iteration3</h1>
  <div>
    <p v-if="iftype">
      TRUE IFTYPE Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum, aliquid temporibus doloribus eos recusandae! Magnam laboriosam molestias ducimus facilis, eaque repellendus. Quod delectus quasi voluptatum quas ab harum sapiente?
    </p>
    <p v-else>
      FALSE IFTYPE Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit reiciendis magnam alias dolore nemo qui dolorem iure, placeat laborum. Dolores non dolorum voluptates. Laborum sunt pariatur necessitatibus. Nobis, alias?
    </p>
  </div>
  <div>
    <p v-show="showtype">
      SI LEES ESTO ES PORQUE ESTA EN TRUE
    </p>
  </div>
  <div>
    <p v-if="cond === true">
SI LEES ESTO HE ASIGNADO TRUE A LA VARIABLE MEDIANTE V IF
    </p>
    <p v-else>
      SI LEES ESTO HE ASIGNADO FALSE A LA VARIABLE MEDIANTE V IF
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const iftype = ref(false);
const showtype = ref(true);
const cond = ref(false);
</script>

<style>
</style>
