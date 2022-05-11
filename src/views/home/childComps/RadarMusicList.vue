<template>
  <div id="box">
    <MusicListItem :recommendMusic="recommendMusic">
      <template v-slot:topLeft>你的雷达歌单</template>
      <template v-slot:topRight>查看更多</template>
    </MusicListItem>
  </div>
</template>

<script>
import { ref } from "vue";
import { getRecommendMusic } from "@/network/request.js";

import MusicListItem from "@/components/content/musicListItem/MusicListItem.vue";

export default {
  components: {
    MusicListItem,
  },
  setup() {
    const recommendMusic = ref();

    getRecommendMusic(36).then((res) => {
      recommendMusic.value = res.data.result;
    });

    return {
      recommendMusic,
    };
  },
};
</script>

<style scoped>
#box {
  margin-top: 15px;
}
</style>
