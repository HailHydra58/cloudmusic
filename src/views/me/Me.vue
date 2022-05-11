<template>
  <!-- 顶部 -->
  <div class="topS" :class="{ topSS: isShowTop }">
    <NavBar>
      <template v-slot:left>
        <svg
          @click="$router.push('/find')"
          class="icon"
          :class="{ icons: isShowTop }"
          aria-hidden="true"
        >
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </template>
      <template v-slot:center></template>
      <template v-slot:right>
        <svg class="icon" :class="{ icons: isShowTop }" aria-hidden="true">
          <use xlink:href="#icon-gengduo1"></use>
        </svg>
      </template>
    </NavBar>
  </div>
  <!-- 背景图1不动或者往上显示 -->
  <img class="imgBg" :src="imgBackground" v-show="!isShowBgImg" />
  <!-- 内容 -->
  <Scroll class="content" :probe-type="3" @scroll="contentScroll">
    <div>
      <!-- 背景图2往下动显示 -->
      <img class="imgBg1" :src="imgBackground" v-show="isShowBgImg" />
      <div ref="userDetails" class="userDetail">
        <!-- 用户信息1 -->
        <div class="userDetail_1">
          <!-- 头像 -->
          <div class="imgFace">
            <img class="imgFace1" :src="imgFace" />
          </div>
          <!-- 名字 -->
          <div class="userName">{{ user.userName }}</div>
          <div class="user_2">
            <span>{{ newFollows }} 关注</span>
            <span>{{ followeds }} 粉丝</span>
            <span>Lv.{{ level }}</span>
          </div>
          <div class="user_3">
            <span>四川 乐山</span>
            <span>村龄{{ parseInt(createDays / 365) }}年</span>
          </div>
          <div class="user_4">
            <van-button class="editor" round size="small" @click="clickEditor"
              >编辑资料</van-button
            >
            <!-- 点击编辑资料弹出界面 -->
            <van-popup
              v-model:show="isShowPopup"
              position="right"
              closeable
              close-icon-position="top-left"
              :style="{ width: '100%', height: '100%' }"
            >
              <div class="myziliao">
                <NavBar>
                  <template v-slot:center>
                    <div style="text-align: center">我的资料</div>
                  </template>
                </NavBar>
              </div>
              <div class="myziliao2">
                <DetailChild :showBoder="true">
                  <template v-slot:left>头像</template>
                  <template v-slot:right
                    ><img class="imgFace2" :src="imgFace"
                  /></template>
                </DetailChild>
                <DetailChild :showBoder="true">
                  <template v-slot:left>昵称</template>
                  <template v-slot:right>相柳58</template>
                </DetailChild>
                <DetailChild :showBoder="true">
                  <template v-slot:left>性别</template>
                  <template v-slot:right>男</template>
                </DetailChild>
                <DetailChild>
                  <template v-slot:left>二维码</template>
                  <template v-slot:right>
                    <svg
                      class="icon qRcode"
                      style="fill: #909090"
                      aria-hidden="true"
                    >
                      <use xlink:href="#icon-erweima"></use>
                    </svg>
                  </template>
                </DetailChild>

                <div class="br"></div>

                <DetailChild :showBoder="true">
                  <template v-slot:left>生日</template>
                  <template v-slot:right>输入生日信息</template>
                </DetailChild>
                <DetailChild :showBoder="true">
                  <template v-slot:left>地区</template>
                  <template v-slot:right>四川 乐山</template>
                </DetailChild>
                <DetailChild :showBoder="true">
                  <template v-slot:left>大学</template>
                  <template v-slot:right></template>
                </DetailChild>
                <DetailChild :showBoder="true">
                  <template v-slot:left>音乐标签</template>
                  <template v-slot:right>选择标签</template>
                </DetailChild>
                <DetailChild :showBoder="true">
                  <template v-slot:left>简介</template>
                </DetailChild>
                <van-field v-model="value" placeholder="请输入个人介绍..." />
              </div>
            </van-popup>
            <span>
              <svg
                @click="isIconChange = !isIconChange"
                class="icon1"
                :class="{ isIconChange: isIconChange }"
                aria-hidden="true"
              >
                <use xlink:href="#icon-xiajiantou-copy"></use>
              </svg>
            </span>
          </div>
        </div>

        <!-- 用户信息2 -->
        <div class="userDetail_2">
          <!-- 选择主页 -->
          <div class="userDetail_2_1">
            <span v-for="(item, index) in zyDtBk">{{ item }}</span>
          </div>
          <!-- 基本信息 -->
          <div class="userDetail_2_2">
            <div class="h1">
              <span>基本信息</span>
              <span>村民证</span>
            </div>
            <div class="detailMe detailMe_1">
              村龄: {{ parseInt(createDays / 365) }}年 ({{ 2018 }}年{{
                12
              }}月注册)
            </div>
            <div class="detailMe">地区: 四川 乐山</div>
          </div>
          <!-- 音乐品味 -->
          <div class="musciTaste">
            <div class="h1">音乐品位</div>

            <router-link
              :to="{ path: '/musiclist', query: { id: item.id } }"
              v-for="(item, index) in playList"
              style="color: #000000"
            >
              <MusicMeChild class="bottomPadding">
                <template v-slot:left>
                  <img class="imgSmall" :src="item?.coverImgUrl" />
                </template>
                <template v-slot:center_1>{{ item?.name }}</template>
                <template v-slot:center_2
                  >{{ item?.trackCount }}首 播放{{
                    item?.playCount
                  }}次</template
                >
              </MusicMeChild>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </Scroll>
</template>

<script>
import { reactive, ref, toRefs, nextTick } from "vue";
import { mapState, useStore } from "vuex";
import { getUserDetail, getPlaylist } from "@/network/request.js";
import { Button, Popup, List, Field } from "vant";

import Scroll from "@/components/common/scroll/Scroll.vue";
import NavBar from "@/components/common/navBar/NavBar.vue";
import MusicMeChild from "@/components/content/musicMeChild/MusicMeChild.vue";

import DetailChild from "./childComps/DetailChild.vue";

export default {
  name: "Me",
  components: {
    Scroll,
    NavBar,
    MusicMeChild,
    DetailChild,
    [Button.name]: Button,
    [Popup.name]: Popup,
    [List.name]: List,
    [Field.name]: Field,
  },
  setup() {
    const userDetail = reactive({
      imgBackground: null, //背景图片
      imgFace: null, //头像
      newFollows: null, //关注
      followeds: null, //粉丝
      level: null, //等级
      createDays: null, //创建有多少天
      playList: [], //用户歌单
    });

    const store = useStore();
    getUserDetail(store.state.user.userId).then((res) => {
      console.log(res.data);
      const userS = res.data.profile;
      userDetail.imgBackground = userS.backgroundUrl;
      userDetail.imgFace = userS.avatarUrl;
      userDetail.newFollows = userS.newFollows;
      userDetail.followeds = userS.followeds;
      userDetail.level = res.data.level;
      userDetail.createDays = res.data.createDays;
    });
    getPlaylist(store.state.user.userId).then((res) => {
      nextTick(() => {
        userDetail.playList = res.data.playlist;
        // console.log(userDetail.playList);
      });
    });

    const isShowPopup = ref(false);
    //点击编辑资料
    function clickEditor() {
      isShowPopup.value = true;
    }

    const isIconChange = ref(false);

    const zyDtBk = ["主页", "动态", "播客"];

    // 显示背景图片
    const isShowBgImg = ref(false);
    //显示Top
    const isShowTop = ref(false);
    const userDetails = ref();
    //bestScroll传过来的实时y轴
    function contentScroll(position) {
      isShowBgImg.value = position.y < 0;
      isShowTop.value = -position.y > userDetails.value.offsetTop - 44;
    }

    return {
      ...toRefs(userDetail),
      clickEditor,
      isIconChange,
      zyDtBk,
      contentScroll,
      isShowBgImg,
      isShowTop,
      userDetails,
      isShowPopup,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: calc(100vh - 50px);
}

.icon {
  width: 25px;
  height: 25px;
  padding-top: 9px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  fill: #ffffff; /* 改其颜色 */
}

.qRcode {
  position: relative;
  top: 2px;
}

.icons {
  fill: #000000;
}

.icon1 {
  margin-left: 8px;
  width: 15px;
  height: 15px;
  padding: 4px;
  vertical-align: -0.15em;
  overflow: hidden;
  border: 1px solid #999999;
  border-radius: 100%;
  transition: all 0.3s; /* 旋转时间1s */
}

.isIconChange {
  transform: rotate(180deg); /* 旋转图片 */
}

.bg {
  /* z-index: 10; */
  /* 层级10 */
  background-color: #000000;
}

.h1 {
  font-size: 17px;
  font-weight: 500;
  padding: 10px 0 8px 10px;
}

.imgSmall {
  width: 50px;
  height: auto;
}

.imgBg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}

.imgBg1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
}

.imgFace {
  text-align: center;
  width: 100%;
  height: 35px;
}

.imgFace1 {
  position: relative;
  top: -34px;
  width: 65px;
  height: auto;
  border-radius: 100%; /* 圆角 */
}

.imgFace2 {
  width: 45px;
  position: relative;
  top: 3px;
  height: auto;
  border-radius: 100%; /* 圆角 */
}

.userDetail {
  width: 100%;
  /* height: calc(100vh + 300px); */
  height: auto;
  position: relative;
  top: 225px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 220px;
  background-color: #f1f1f1;
}

.userDetail_1 {
  position: relative;
  top: -15px;
  width: auto;
  height: auto;
  margin: 0 15px 0 15px;
  background-color: #ffffff;
  border-radius: 10px; /* 圆角 */
}

.userName {
  text-align: center;
  font-size: 18px;
  font-weight: 500;
}

.user_2 {
  text-align: center;
  color: #999999;
  margin-top: 6px;
}

.user_2 span {
  padding: 0 10px 0 10px;
  font-size: 13px;
}

.user_3 {
  text-align: center;
  margin-top: 10px;
}

.user_3 span {
  margin: 0 10px 0 10px;
  padding: 2px 7px 1px 7px;
  font-size: 13px;
  font-weight: 300;
  border: 0.1px solid #999999;
  border-radius: 6px; /* 圆角 */
}

.user_4 {
  display: flex;
  justify-content: center;
  margin-top: 12px;
  padding-bottom: 14px;
}

.user_4 span {
  font-size: 14px;
  font-weight: 600;
}

.editor {
  border: 0.1px solid #999999;
  --van-button-small-height: 28px;
}

.userDetail_2 {
}

.userDetail_2_1 {
  display: flex;
  justify-content: center;
}

.userDetail_2_1 span {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #818181;
}

.isBold {
  font-weight: 400;
  color: #000000;
}

.userDetail_2_2 {
  margin: 15px 15px 15px 15px;
  background-color: #ffffff;
  border-radius: 6px; /* 圆角 */
}

.musciTaste {
  margin: 15px;
  background-color: #ffffff;
  border-radius: 6px; /* 圆角 */
}

.detailMe {
  padding: 0 0 10px 10px;
  color: #999999;
}

.detailMe_1 {
  padding-top: 8px;
  padding-bottom: 4px;
}

.topS {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}

.topSS {
  background-color: #eeeeee;
}

.myziliao {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 19px;
  font-weight: 600;
}

.myziliao2 {
  margin-top: 44px;
  padding-top: 8px;
  height: calc(100vh - 44px - 8px);
  background-color: #f3f3f3;
}

.br {
  width: 100%;
  height: 8px;
}

.profiles {
  width: auto;
  height: 50px;
  font-size: 15px;
  line-height: 50px;
  background-color: #fafafa;
  padding-left: 15px;
  padding-right: 5px;
  display: flex;
}

.bottomPadding {
  padding-bottom: 5px;
}
</style>
