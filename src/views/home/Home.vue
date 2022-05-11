<template>
  <!-- 顶部导航栏 -->
  <NavBarMain />
  <!-- 轮播图 -->
  <HomeSwiper />
  <!-- 第二行推荐类小图标 -->
  <IconList />
  <!-- 发现好歌单 -->
  <FindMusicList />
  <!-- 你的雷达歌单 -->
  <RadarMusicList />
</template>

<script>
import NavBarMain from "@/components/content/navBar/NavBarMain.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import IconList from "./childComps/IconList.vue";
import FindMusicList from "./childComps/FindMusicList.vue";
import RadarMusicList from "./childComps/RadarMusicList.vue";

export default {
  name: "Home",
  components: {
    NavBarMain,
    HomeSwiper,
    IconList,
    FindMusicList,
    RadarMusicList,
  },
};
</script>

<style></style>
