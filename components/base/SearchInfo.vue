<template>
  <div>
    <v-text-field
      v-model="textSearch"
      density="comfortable"
      class="search-bar"
      placeholder="Search for a movie, tv show, person..."
      variant="solo"
      hide-details
      rounded="pill"
    >
      <template #append-inner>
        <button
          @click="refetch"
          class="h-full bg-gradient-to-r from-green-500 to-cyan-500 w-24 rounded-full font-semibold text-white"
        >
          Search
        </button>
      </template>
    </v-text-field>

  </div>
</template>

<script lang="ts" setup>
import { searchTrendMovie } from "~/services/UseSearch";
import { useQueryClient } from "@tanstack/vue-query";
const textSearch = ref<string>("");

const { isLoading, isError, data, error, refetch } = searchTrendMovie(
  textSearch,
  "week"
);

const {newData} = useTestUseQuery(data.value)

// watch()

</script>
