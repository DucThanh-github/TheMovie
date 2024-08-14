<template>
  <div class="h-[1000px] container mx-auto">
    <HomeWelcome />

    <HomeMovieTrending />

    <HomeLastTrailers />
    <HomePopular/>
    <HomeLeaderBoard />
  </div>
</template>

<script setup>
const selected = ref();
watch(selected, (value) => {
  console.log(value);
});
</script>
