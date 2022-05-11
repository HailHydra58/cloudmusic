<template>
  <div id="list">
    <Scroll class="content" :scrollX="true">
      <div class="list">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use></svg
          ><br />
          <span>每日推荐</span>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-diantai1"></use></svg
          ><br />
          <span>私人FM</span>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gedan"></use></svg
          ><br />
          <span>歌单</span>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangdianxiaoshoupaihangbang"></use></svg
          ><br />
          <span>排行榜</span>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhibo"></use></svg
          ><br />
          <span>直播</span>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yinlezhuanji"></use></svg
          ><br />
          <span>数字专辑</span>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mingxiang"></use></svg
          ><br />
          <span>专注冥想</span>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-iconzhengli-"></use></svg
          ><br />
          <span>歌房</span>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youxishoubing"></use></svg
          ><br />
          <span>游戏专区</span>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";

export default {
  name: "IconList",
  components: {
    Scroll,
  },
};
</script>
<style scoped>
#list {
  padding: 10px 0 10px 5px;
}

.icon {
  width: 25px;
  height: 25px;
  vertical-align: -0.15em;
  overflow: hidden;
}

.list {
  display: flex;
  float: left; /* 子元素宽度受flex影响，致父元素的宽度不能自动增长加float: left */
}

.list div {
  width: 70px;
  text-align: center;
  font-size: 14px;
}

.content {
  width: 100%;
}
</style>
