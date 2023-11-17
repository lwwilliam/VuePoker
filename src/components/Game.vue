<script setup lang="ts">
import { defineProps, watch, ref } from 'vue';

const props = defineProps(['player_name', 'start']);
const emit = defineEmits(['changeStart']);
// const cards = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
const cards = ["2_of_diamonds", "2_of_clubs", "2_of_hearts", "2_of_spades", "3_of_diamonds", "3_of_clubs", "3_of_hearts", "3_of_spades", "4_of_diamonds", "4_of_clubs", "4_of_hearts", "4_of_spades", "5_of_diamonds", "5_of_clubs", "5_of_hearts", "5_of_spades", "6_of_diamonds", "6_of_clubs", "6_of_hearts", "6_of_spades", "7_of_diamonds", "7_of_clubs", "7_of_hearts", "7_of_spades", "8_of_diamonds", "8_of_clubs", "8_of_hearts", "8_of_spades", "9_of_diamonds", "9_of_clubs", "9_of_hearts", "9_of_spades", "10_of_diamonds", "10_of_clubs", "10_of_hearts", "10_of_spades", "jack_of_diamonds", "jack_of_clubs", "jack_of_hearts", "jack_of_spades", "queen_of_diamonds", "queen_of_clubs", "queen_of_hearts", "queen_of_spades", "king_of_diamonds", "king_of_clubs", "king_of_hearts", "king_of_spades", "ace_of_diamonds", "ace_of_clubs", "ace_of_hearts", "ace_of_spades"];
const num_arr = ref([] as number[]);

function generate_number() {
  for (let i = 0; i < props.player_name.length; i++) {
    let randomNumber = Math.round(Math.random() * (52 - 1) + 1);
    while (num_arr.value.includes(randomNumber)) {
      randomNumber = Math.round(Math.random() * (52 - 1) + 1);
    }
    num_arr.value[i] = randomNumber;
  }
  console.log(num_arr.value);
}


watch(() => props.start, (newStart) => {
  if (newStart) {
    generate_number();
    emit('changeStart');
  }
});

</script>

<template>
  <div class="game_container">

    <div v-for="(name, index) in player_name" :key="index" class="game_box">
      <!-- Player Name: {{ name }} -->
      <!-- Card Number: {{ num_arr[index] }} -->
      <!-- Card Value: {{ cards[num_arr[index] - 1] }} -->
      <!-- <img :src="`./src/components/images/cards/${cards[num_arr[index] - 1]}.png`" alt="card" class="img"/> -->
    </div>

  </div>
</template>

<style>

  .game_container {
    /* border: 2px solid rgb(255, 0, 0); */
    height: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(50%, 1fr));
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

  .img {
  height: 100%;
  width: auto;
  /* max-width: 100%; */
  /* overflow: auto; */
}

</style>