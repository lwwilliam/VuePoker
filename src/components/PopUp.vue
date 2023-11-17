<script setup lang="ts">

import { ref, defineEmits, defineProps } from 'vue';

const player_number = ref([2, 3, 4, 5, 6] as const);
const player_selected = ref(0);
const { player_name } = defineProps(['player_name']);
const emit = defineEmits();

const submitForm = () => {
  for (let i = 0; i < player_selected.value; i++) {
    if (!player_name[i]) {
      player_name[i] = `Player${i + 1}`;
    }
  }
  emit('closeOverlay');
};

</script>

<template>
  <div class="popup_box">
    <h1 class="option_header">Game Option</h1>
      <div class="dropdown">
        Number of player: {{ player_selected }}
        <img src="../assets/downarrow.svg" alt="downarrow" width="10" height="10"/> 
        <div class="dropdown-content">
          <button class="" @click="player_selected = num" v-for="num in player_number" :key="num">
            {{ num }}
          </button>
        </div>
      </div>
    <div>
      Set Player Name
      <div class="player_name">
        <div v-for="num in player_number[player_number.length - 1]" :key="num">
          <input class="playername_box" v-model="player_name[num-1]" :placeholder="`Player Name ${num}`" :disabled="num > player_selected" />
        </div>
      </div>
    </div>
    <button @click="submitForm" class="button">
      Submit
    </button>
    <button @click="player_name.splice(0)" class="button">
      Reset
    </button>
  </div>
</template>

<style>
  .option_header{
    /* border-bottom: 1px solid black; */
    background-image: url("./images/wood.jpg");
    border-radius: 17.5px 17.5px 0 0;
    color: white;
  }

  .popup_box {
    height: 50vh;
    width: 50vw;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    border: 2px solid #2B1E16;
    /* display: flex; */
    align-items: center;
    /* overflow: scroll; */
    text-align: center;
    color: black;
  }

  .dropdown {
    padding: 2px 0;
    color: black;
    position: relative;
    font-size: larger;
    align-items: center;
    border-top: 1px solid #2B1E16;
    border-bottom: 1px solid #2B1E16;
    background-color: white;
  }

  .dropdown:hover {
    /* color: blue; */
    background-color: #d9d9d9;

  }

  .dropdown-content {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.5s, opacity 0.5s linear;
    min-width: 160px;
    position: absolute;
    z-index: 1;
    color: black;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
  }

  
  .dropdown:hover .dropdown-content {
    visibility: visible;
    opacity: 1;
  }

  .player_name {
    display: flex ;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 29vh;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(50%, 1fr));
  }

  .playername_box {
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    height: 4rem;
    width: 90%;
    margin-bottom: 1.5vh;
  }

  .playername_box:disabled {
    background-color: gray;
    color: gray;
  }

  .button {
    background-color: #04AA6D; /* Green */
    color: white;
    text-align: center;
    display: inline-block;
    margin: 4px 10px;
    transition-duration: 0.4s;
    border: 2px solid #04AA6D;
  }

  .button:hover {
    background-color: white; 
    color: black; 
  }

</style>