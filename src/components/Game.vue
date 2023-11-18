<script setup lang="ts">
import { defineProps, watch, ref } from 'vue';

const props = defineProps(['player_name', 'start', 'reset']);
const emit = defineEmits(['changeStart' , 'resetPoints']);
const cards = ["2_of_diamonds", "2_of_clubs", "2_of_hearts", "2_of_spades", "3_of_diamonds", "3_of_clubs", "3_of_hearts", "3_of_spades", "4_of_diamonds", "4_of_clubs", "4_of_hearts", "4_of_spades", "5_of_diamonds", "5_of_clubs", "5_of_hearts", "5_of_spades", "6_of_diamonds", "6_of_clubs", "6_of_hearts", "6_of_spades", "7_of_diamonds", "7_of_clubs", "7_of_hearts", "7_of_spades", "8_of_diamonds", "8_of_clubs", "8_of_hearts", "8_of_spades", "9_of_diamonds", "9_of_clubs", "9_of_hearts", "9_of_spades", "10_of_diamonds", "10_of_clubs", "10_of_hearts", "10_of_spades", "jack_of_diamonds", "jack_of_clubs", "jack_of_hearts", "jack_of_spades", "queen_of_diamonds", "queen_of_clubs", "queen_of_hearts", "queen_of_spades", "king_of_diamonds", "king_of_clubs", "king_of_hearts", "king_of_spades", "ace_of_diamonds", "ace_of_clubs", "ace_of_hearts", "ace_of_spades"];
const num_arr = ref([] as number[]);
const point_arr = ref([] as number[]);
const largest_card_index = ref(0);

function generate_number() {
  for (let i = 0; i < props.player_name.length; i++) {
    let randomNumber = Math.round(Math.random() * (52 - 1) + 1);
    while (num_arr.value.includes(randomNumber)) {
      randomNumber = Math.round(Math.random() * (52 - 1) + 1);
    }
    num_arr.value[i] = randomNumber;
  }
  // console.log(num_arr.value);
}

function point_add() {
  console.log(largest_card_index.value);
  point_arr.value[largest_card_index.value] += 1;
}


watch(() => props.start, (newStart) => {
  if (newStart) {
    generate_number();
    largest_card_index.value = num_arr.value.indexOf(Math.max(...num_arr.value));
    point_add();
    console.log(point_arr.value);
    emit('changeStart');
  }
});

watch(() => props.reset, (newReset) => {
  if (newReset) {
    console.log('reset');
    // point_arr.value.splice(0);
    point_arr.value = [0, 0, 0, 0, 0, 0];
    emit('resetPoints');
  }
});

</script>

<template>
  <div class="game_container">
    <div v-for="(name, index) in player_name" :key="index" class="game_box">
      <!-- Player Name: {{ name }} -->
      <!-- Card Number: {{ num_arr[index] }} -->
      <!-- Card Value: {{ cards[num_arr[index] - 1] }} -->
      <div class="left_container">
        <div class="text_box">
          Player Name: {{ name }}
        </div>
        <div class="text_box">
          Point: {{ point_arr[index] }}
        </div>
      </div>
      <img :src="`./src/components/images/cards/${cards[num_arr[index] - 1]}.png`" alt="card"/>
    </div>

  </div>
</template>

<style scoped>

  .game_container {
    /* border: 2px solid rgb(255, 0, 0); */
    height: 90%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(50%, 1fr));
    place-items: center;
  }

  .left_container {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .game_box {
    border: 2px solid #bdbd00;
    align-items: center;
    width: 98%;
    height: 98%;
    display: flex;
    overflow: hidden;
  }

  .text_box {
    height: 50%;
    /* width: 50%; */
    object-fit: contain;
    color: white;
    padding-left: 20px;
    text-align: justify;
  }

  img {
    height: inherit;
    width: inherit / 2;
  }

  @media screen and (max-width: 1024px) {
    .game_container {
      border: 2px solid rgb(255, 0, 0);
      overflow: auto;
      display: block;
    }

    .game_box {
      border: 2px solid #bdbd00;
      width: 100%;
      height: 300px;
      align-items: center;
    }

    .text_box {
      height: 50%;
    }

    img {
      width: 50%;
      height: auto;
      padding-right: 20px;
    }
  }

</style>