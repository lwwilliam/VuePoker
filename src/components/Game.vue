<script setup lang="ts">

import { defineProps } from 'vue';

const { player_name } = defineProps(['player_name']);

</script>

<template>
  <div v-for="name in player_name" :key="name">
    Player Name: {{ name }}
  </div>
</template>

<style>

</style>