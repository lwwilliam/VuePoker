<script setup lang="ts">
import { defineProps, watch, ref, watchEffect } from 'vue';

// const { player_name } = defineProps(['player_name']);

// defineProps({
//   start: Boolean,
//   player_name: Array,
// });

const props = defineProps(['player_name', 'start']);

// watch(start, (newX) => {
//   console.log(`x is ${newX}`)
//   // props.start = false;
// })

console.log(props);


watch(props.start, (newX) => {
  if (newX)
  {
    console.log("running somehign")
    console.log(`x is ${newX}`)
  }
  props.start.value = false;
})

</script>

<template>
  <div class="game_container">
    Player Name: {{ player_name }}
    start: {{ start }}
    <!-- <div v-for="name in player_name" :key="name" class="game_box">
      Player Name: {{ name }}
    </div> -->
  </div>
</template>

<style>

  .game_container {
    /* border: 2px solid rgb(255, 0, 0); */
    height: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(50%, 1fr));
    padding: 0 0 0 0;
    place-items: center;
    /* align-items: center; */
    /* vertical-align: middle; */
  }
  
  .game_box {
    border: 2px solid #bdbd00;
    align-items: center;
    /* padding: 3px 0 0 0; */
    width: 98%;
    height: 98%;
  }

</style>