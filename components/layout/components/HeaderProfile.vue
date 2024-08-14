<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props }">
        <div
          class="hover:cursor-pointer w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center"
          v-bind="props"
        >
          T
        </div>
      </template>
      <v-card>
        <v-card-title>Unread Notifications 0</v-card-title>
        <v-card-text
          >Good job! Looks like you're all caught up.
          <nuxt-link to="/" class="underline">View All</nuxt-link></v-card-text
        >
      </v-card>
    </v-menu>
  </div>
</template>

<script setup>
import { mergeProps } from "vue";
</script>
