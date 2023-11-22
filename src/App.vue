<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import NavBar from './components/NavBar.vue'
import Game from './components/Game.vue'

const player_name = ref([] as string[]);
const start = ref(false);
const reset = ref(false);
const emits = defineEmits(['gameStart', 'updatePlayerName', 'changeStart']);

const updatePlayerName = (newNames: string[]) => {
  player_name.value = newNames;
};

const handleButtonClick = () => {
  start.value = true;
};

const changeStart = () => {
  start.value = false;
};

const resetTrue = () => {
  reset.value = true;
};

const resetFalse = () => {
  reset.value = false;
};

</script>

<template>
  <div class="page">
    <NavBar :player_name="player_name" @gameStart="handleButtonClick" @resetPoints="resetTrue"/>
    <!-- Player Name: {{ player_name }} -->
    <Game :player_name="player_name" :start="start" :reset="reset" @updatePlayerName="updatePlayerName" @changeStart="changeStart" @resetPoints="resetFalse"/>
  </div>
</template>

<style>

  .page {
    height: 100vh;
    width: 100vw;
    background-image: url("./components/images/poker_background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #deb1b1;
    color: rgb(0, 0, 0);
  }

</style>
