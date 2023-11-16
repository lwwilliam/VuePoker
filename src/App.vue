<script setup lang="ts">

import { ref } from 'vue';
import NavBar from './components/NavBar.vue'
import Game from './components/Game.vue'

const player_name = ref([] as string[]);

const updatePlayerName = (newNames: string[]) => {
  player_name.value = newNames;
};

</script>

<template>
  <div class="page">
    <NavBar :player_name="player_name"/>
    <!-- Player Name: {{ player_name }} -->
    <Game :player_name="player_name" @updatePlayerName="updatePlayerName"/>
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
