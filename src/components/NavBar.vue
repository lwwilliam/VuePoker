<script setup lang="ts">

import { ref, defineProps } from 'vue';
import PopUp from './PopUp.vue';

const show_overlay = ref(false);
// const { player_name } = defineProps(['player_name']);
const props = defineProps(['player_name']);
const emit = defineEmits(['gameStart', 'resetPoints']);

const closeOverlay = () => {
  show_overlay.value = false;
};

const overlayButton = () => {
  show_overlay.value = true;
  props.player_name.splice(0);
  emit('resetPoints');
};

const gameStart = () => {
  // console.log('Game Start');
  emit('gameStart');
};

</script>

<template>
  <div class="sidebar_container">
      <button @click="overlayButton" class="sidebar_content">
        Game Init
      </button>
      <button @click="gameStart" class="sidebar_content">
        Draw
      </button>
    </div>
    <div v-if="show_overlay" class="overlay">
      <PopUp :player_name="player_name" @closeOverlay="closeOverlay" />
    </div>
</template>

<style>
  .sidebar_container {
    height: 10vh;
    width: 100vw;
    background-color: #2B1E16;
    background-image: url("./images/wood.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sidebar_content {
    height: 100%;
    width: 20%;
    padding: 0 2rem;
    border:1px solid black;
    display: grid;
	  align-items: center;
    background-color: gray;
  }

  .overlay {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>