<template>
  <van-swipe class="my-swipe" :autoplay="300000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in banner.list">
      <div class="bannerBox">
        <img :src="item.pic" />
        <span>{{ item.typeTitle }}</span>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { reactive, onMounted } from "vue";
import { Swipe, SwipeItem } from "vant";
import { getBanner } from "@/network/request.js";

export default {
  name: "HomeSwiper",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  setup() {
    let banner = reactive({
      list: [],
    });

    onMounted(() => {
      getBanner(2).then((res) => {
        banner.list = res.data.banners;
      });
    });

    return {
      banner,
    };
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 12px;
  text-align: center;
}
img {
  width: 93%;
  padding-top: 4px;
  border-radius: 15px;
}
.bannerBox span {
  width: 48px;
  height: 20px;
  right: 13.2px;
  bottom: 3px;
  position: absolute;
  z-index: 1;
  background-color: #007aff;
}
</style>
