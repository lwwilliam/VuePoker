<script setup lang="ts">
import { ref, watch } from 'vue';
import NavBar from './components/NavBar.vue'
import Game from './components/Game.vue'

const player_name = ref([] as string[]);
const start = ref(false);

const updatePlayerName = (newNames: string[]) => {
  player_name.value = newNames;
};



const handleButtonClick = () => {
  console.log('Pressed Button');
  start.value = true;
};

// watch(start, (newX) => {
//   if (newX)
//   {
//     console.log("running somehign")
//     console.log(`x is ${newX}`)
//   }
//   start.value = false;
// })

</script>

<template>
  <div class="page">
    <NavBar :player_name="player_name" @gameStart="handleButtonClick"/>
    <!-- Player Name: {{ player_name }} -->
    <Game :player_name="player_name" :start="start" @updatePlayerName="updatePlayerName"  />
  </div>
</template>

<style scoped>

  .page {
    height: 100vh;
    background-image: url("./components/images/poker_background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    background-color: #deb1b1;
    color: rgb(0, 0, 0);
  }

</style>
