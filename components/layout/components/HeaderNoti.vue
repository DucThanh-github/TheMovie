<template>
  <div class="flex items-center justify-center">
    <v-menu>
      <template v-slot:activator="{ props }">
        <div class="hover:cursor-pointer" v-bind="props">
          <v-icon> mdi mdi-bell </v-icon>
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
