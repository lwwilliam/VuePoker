<script setup lang="ts">

import { ref } from 'vue';

const show_overlay = ref(false);
const player_number = ref([2, 3, 4, 5, 6] as const);
const player_selected = ref(0);
const player_name = ref([] as string[]);
// const name1 = ref('');
// const name2= ref('');
// const name3 = ref('');
// const name4 = ref('');
// const name5 = ref('');
// const name6 = ref('');

</script>


<template>
	<div class="sidebar_container">
      <button @click="show_overlay =  true" class="sidebar_content">
        Overlay
      </button>
    </div>
    <div v-if="show_overlay" class="overlay">
      <div class="popup_box">
        <h1>Game Option</h1>
        
        <div class="dropdown">
          Player Number: {{ player_selected }}
          <div class="test">
            <div class="dropdown-content">
              <button class="" @click="player_selected = num" v-for="num in player_number" :key="num">
                {{ num }}
              </button>
            </div>
          </div>
        </div>
        <div class="player_name">
          Set Player Name
          <div v-for="num in 6" :key="num">
            <input class="playername_box" v-model="player_name[num-1]" placeholder="Player Name" :disabled="num > player_selected" />
          </div>
        </div>
        <button @click="show_overlay = false">
          Submit
        </button>
        <button @click="player_name.splice(0)">
          Reset
        </button>
        <!-- player_name: {{ player_name }} -->
      </div>
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
    text-align: center;
    display: grid;
	  align-items: center;
    background-color: gray;
    /* color: rgb(230, 210, 210); */
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

  .popup_box {
    height: 50vh;
    width: 50vw;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    border: 1px solid #2B1E16;
    /* display: flex; */
    align-items: center;
    /* overflow: scroll; */
    text-align: center;
    color: black;
  }

  .dropdown {
    color: black;
    position: relative;
  }

  .dropdown:hover {
    color: blue;
  }

  .test {
    /* color: red; */
    width: 100%;
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
    width: 100%;
  }
  
  .dropdown:hover .dropdown-content {
    visibility: visible;
    opacity: 1;
    /* border: 1px solid black; */
  }

  .playername_box {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    height: 2rem;
    width: 30%;
  }


</style>