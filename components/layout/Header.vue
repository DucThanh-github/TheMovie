<template>
  <div
    class="bg-primary fixed h-16 inset-x-0 z-50"
    :class="[isScrollUp ? 'scroll-up' : 'scroll-down']"
  >
    <div class="mx-auto container h-full">
      <div class="h-full flex items-center px-10">
        <div class="flex space-x-6">
          <v-img :width="154" src="~/public/images/logo.svg"></v-img>
          <div class="flex space-x-6">
            <BaseHeaderMenu
              v-for="(item, index) in listMenuHeader"
              :key="index"
              :data="item"
            />
          </div>
        </div>
        <v-spacer></v-spacer>
        <div class="flex space-x-6 items-center">
          <BaseHeaderMenu
            :open-on-hover="false"
            activator-icon="mdi mdi-plus-thick"
            :data="{ menu: addNewProgramAction }"
          />
          <LayoutComponentsHeaderNoti />
          <LayoutComponentsHeaderProfile />
          <div>
            <v-icon
              :color="isSearching ? 'white' : 'primary-500'"
              size="x-large"
              @click="isSearching = !isSearching"
            >
              {{ isSearching ? "mdi mdi-close" : "mdi mdi-magnify" }}
            </v-icon>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isSearching" class="border-b bg-white sticky top-0">
      <div  class="mx-auto container">
        <Search class="px-10" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IData {
  activator?: string;
  menu: string[];
}
const listMenuHeader: IData[] = [
  {
    activator: "Movies",
    menu: ["Popular", "Now Playing", "Upcoming", "Top Rated"],
  },
  {
    activator: "TV Shows",
    menu: ["Popular", "Airing Today", "On TV", "Top Rated"],
  },
  {
    activator: "People",
    menu: ["Popular People"],
  },
  {
    activator: "More",
    menu: ["Discussions", "Leaderboard", "Support", "API"],
  },
];

const addNewProgramAction = ["Add New Movie", "Add New TV Show"];
const isSearching = ref<boolean>(false);
const isScrollUp = ref<boolean>(true);
let initY = 0;
const checkScroll = () => {
  const newY = window.scrollY;

  if (newY > initY && newY > 128) {
    isScrollUp.value = false;
  } else {
    isScrollUp.value = true;
  }

  initY = newY;
};

onMounted(() => {
  document.addEventListener("scroll", checkScroll);
});
</script>

<style lang="scss">
.scroll-down {
  top: -64px;
  animation: scrollDown 0.3s linear;
}

.scroll-up {
  top: 0;
  animation: scrollUp 0.3s linear;
}

@keyframes scrollUp {
  from {
    top: -64px;
  }
  to {
    top: 0px;
  }
}
@keyframes scrollDown {
  from {
    top: 0px;
  }
  to {
    top: -64px;
  }
}
</style>
