<template>
  <div class="flex items-center justify-center">
    <v-menu :open-on-hover="openOnHover">
      <template v-slot:activator="{ props }">
        <button v-bind="props">
          <v-icon v-if="activatorIcon && !!!data?.activator">
            {{ activatorIcon }}
          </v-icon>
          {{ data?.activator ? data.activator : "" }}
        </button>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in data?.menu"
          :key="index"
          density="compact"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts" setup>
interface IData {
  activator?: string;
  menu: string[];
}
interface IProps {
  data?: IData;
  openOnHover?: boolean;
  activatorIcon?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  openOnHover: true,
});
</script>
