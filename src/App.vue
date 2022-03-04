<template>
  <router-view />
  <PlayMusic />
</template>

<script>
import PlayMusic from "@/components/content/playMusic/PlayMusic.vue";
export default {
  name: "App",
  components: {
    PlayMusic,
  },
};
</script>

<style></style>
