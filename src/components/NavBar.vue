<script setup lang="ts">

import { ref } from 'vue';

const show_overlay = ref(false);

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
        <button @click="show_overlay = false">
          Submit
        </button>
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
    overflow: scroll;
    text-align: center;
    color: black;
  }


</style>