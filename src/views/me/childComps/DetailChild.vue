<template>
  <div id="box" :class="{ isBoders: showBoder }">
    <span class="left"><slot name="left"></slot></span>
    <span class="right"><slot name="right"></slot></span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-jinrujiantou"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "DetailChild",
  props: {
    showBoder: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
#box {
  width: auto;
  height: 50px;
  font-size: 15px;
  line-height: 50px;
  background-color: #fafafa;
  padding-left: 15px;
  padding-right: 5px;
  display: flex;
}

.icon {
  margin-top: 11px;
  width: 25px;
  height: 25px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  fill: #b8b8b8; /* 改其颜色 */
}

.left {
  flex: 1;
}

.right {
  color: #909090;
}

.isBoders {
  border-bottom: 0.1px solid #d6d6d6;
}
</style>
