<template>
  <v-btn-toggle
    class="border !h-7"
    v-model="selected"
    selected-class="item-selected"
    rounded="xl"
  >
    <v-btn elevation="0" rounded="fill" value="today">Today</v-btn>
    <v-btn rounded="fill" value="week">This week</v-btn>
  </v-btn-toggle>

  <!-- <v-tabs class="rounded-full" selected-class="item-selected">
    <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
  </v-tabs> -->
</template>

<script lang="ts" setup>
const selected = ref("today");
</script>

<style lang="scss" scoped>
.item-selected {
  @apply bg-primary rounded-full text-white;
  border-radius: 9999px !important;

  // .v-btn__content {
  //   @apply text-white;
  //   display: block !important;;
  //   background-color: rgb(3 37 65 / var(--tw-bg-opacity));
  //   background: linear-gradient(to bottom right, #ccc9bf 0%, #1ec337 100%);
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  // }
}
</style>
