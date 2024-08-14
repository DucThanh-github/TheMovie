<template>
  <div class="flex items-center">
    <v-text-field
      v-model="textSearch"
      variant="plain"
      hide-details
      class="text-black custom-input"
      placeholder="Search for a movie, tv show, person..."
      prepend-icon="mdi mdi-magnify"
     
    ></v-text-field>

    <div>
      <v-icon v-if="!isLoading && textSearch" color="primary" @click="textSearch = ''">mdi mdi-close</v-icon>
      <BaseLoading v-if="isLoading" />
      <div>{{ data }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { searchTrendMovie } from "~/services/UseSearch";
import { refDebounced } from '@vueuse/core'
import { values } from "lodash";

const textSearch = ref<string>();
const loading = ref<boolean>(false);

const debounceValue = refDebounced(textSearch,1000);


const { isLoading, isError, data, error } = searchTrendMovie(
  debounceValue,
  "week"
);

</script>
