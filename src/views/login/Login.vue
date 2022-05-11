<template>
  <div class="bg">
    <div class="root">
      <div class="u-login-page">
        <div class="_1qWAAfje" style="background-color: #db2c1f">
          <div class="_3IWZfEd8">
            <img class="_3qURL07Y" src="@/assets/logo.png" />
          </div>
          <div class="_1L7D5io7">
            <!-- 点击跳转 手机号登录 -->
            <button class="_3fo6oHZe _2x7RrfYv _19WWNTbu" @click="clickPhone">
              手机号登录
            </button>
            <!-- 点击跳转 注册 -->
            <button
              class="_3fo6oHZe _2FHEwtiE _19WWNTbu"
              @click="clickRegister"
            >
              注册
            </button>
          </div>
          <div class="_277Hls_6">
            <span
              class="_72V7QLEK"
              :class="{ _26n8tS4z: isOk }"
              @click="isOk = !isOk"
            ></span>
            <label for="_277Hls_6" style="margin-left: 2px">同意</label>
            <a
              class="_1f7Tuvor"
              href="https://st.music.163.com/official-terms/service"
              target="_blank"
            >
              《服务条款》
            </a>
            <a
              class="_1f7Tuvor"
              href="https://st.music.163.com/official-terms/privacy"
              target="_blank"
            >
              《隐私政策》
            </a>
            <a
              class="_1f7Tuvor"
              href="https://st.music.163.com/official-terms/children"
              target="_blank"
            >
              《儿童隐私政策》
            </a>
          </div>
          <ul class="_1TT11CYD">
            <li class="L-9qxIrY">
              <img class="_1_K70I2U" src="@/assets/qq.png" />
            </li>
            <li class="L-9qxIrY">
              <img class="_1_K70I2U" src="@/assets/weibo.png" />
            </li>
            <li class="L-9qxIrY">
              <img class="_1_K70I2U" src="@/assets/wyy.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";

export default {
  name: "Login",
  components: {
    [Toast.name]: Toast,
  },
  setup() {
    const isOk = ref(false);

    const router = useRouter();
    function toastIsTrue() {
      Toast("请先勾选同意《服务条款》、《隐私政策》、《儿童隐私政策》");
    }
    function clickPhone() {
      if (isOk.value) {
        router.push("/login/phone");
      } else {
        toastIsTrue();
      }
    }
    function clickRegister() {
      if (isOk.value) {
        router.push("/login/register");
      } else {
        toastIsTrue();
      }
    }
    function clickEmail() {
      if (isOk.value) {
        router.push("");
      } else {
        toastIsTrue();
      }
    }
    return {
      isOk,
      clickPhone,
      clickRegister,
      clickEmail,
    };
  },
};
</script>

<style scoped>
.bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  /* 层级10 */
}

.EwZPH20z {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  background-color: var(--music-background);
}

._3RMiMrqt {
  padding-bottom: env(safe-area-inset-bottom);
}

.u-login-modal ._1qWAAfje {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  min-height: 420px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.u-login-modal ._1qWAAfje,
.u-login-page ._1qWAAfje {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  background-color: var(--music-background);
}

.u-login-page ._1qWAAfje {
  height: 100%;
  padding-top: 70px;
  padding-bottom: 30px;
}

._2YPkesvb {
  width: 343px;
  margin: 0 auto;
}

@media screen and (max-width: 374px) {
  ._2YPkesvb {
    width: 90%;
  }
}

.VbH6V0Q6 {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding: 18px 0;
  color: var(--music-font-c4);
  font-size: 14px;
  line-height: 16px;
}

._1ZyEREpu {
  box-sizing: border-box;
  margin-bottom: -33px;
  margin-top: -15px;
  padding: 0 16px;
  width: 100%;
  line-height: 30px;
}

._1ZyEREpu ._2bAJd11a {
  padding-left: 20px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAV1BMVEUAAADUOjHxWkvTOjLjTDnTOjHUOjHUOzLUOzHUOzLVOjHWOzPXPDPWQDXWPTPXPj3UOjHUOjHUOjLVOzLUOjPVOzPTOzTVOzTVPDLXQzbUOzHUPDLTOjFutShjAAAAHHRSTlMA7QT0CeTUxbGhcU80IhkM36yZhYN5Y0lIE5uaMAYo9QAAAZZJREFUSMeUktmygyAQREeEKKtLXJP8/3feNFC3SuMC82ApeKp7poeOihn1rtqiLIu2eivDKKmY7orPpopO37N8jNSOHfm12iQ+JyWmC9X5Ef8qa7XYlbHVLqou4+FjPuOe0ZbUfONey2j/eYg1dRAbmoO7IcjWB3c22OwdHZbrg137w3k3wtBpGeH72JGN16scXZSrvObWre9PbrPC0TZj6fv8mackugJRcjfb2fvk9yD3bv/zZGhQOLoHyQm0yeLXhF8MpYBkcDpFfYH8KA2kHu5CVyP2xaWCDjs0+g4R/UCpIA1YA3Sp8dKkgw2ENBF1PsJUMIbZRac6B9TBq8FoeA7IS5+e8uuXDsbFVvTCMw+E1ouwfUseuGCzqf0+bR5ovxctYahrHrhirIQRsTyQIYi/zuvgBAAQhqHoHnX/PT1J6EECL3dBtE1++CBflR+Hv0MH4PDI8ZDzWmWRu/Yixzq6tnXErLpiVsseu2KPbsgeAR46HnMerB7lDg+OKw5IjmQOgY6dDrqO1g7zqQ/z6sN86sMFs3RQyNz1WTQAAAAASUVORK5CYII=)
    0 no-repeat;
  background-size: 12px;
  color: var(--music-theme);
  font-size: 12px;
}

._1T0DQp9a {
  display: block;
  box-sizing: border-box;
  padding-left: 18px;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid var(--music-splitline);
  background-color: var(--music-background);
  color: var(--music-font-c1);
  font-size: 17px;
  line-height: 64px;
}

._2_XHImZM {
  display: inline-block;
  margin-right: 15px;
  width: 10px;
  height: 17px;
  background: url(https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9234692500/f30b/acc6/628c/35100f06431146a7fa5b79b385d74820.png)
    0 0 no-repeat;
  background-size: 100% 100%;
}

._2_XHImZM,
._5xADf7D5 {
  vertical-align: middle;
}

._3l1pPqbY {
  margin: 30px auto;
  color: var(--music-font-c1);
  text-align: center;
  font-size: 18px;
  font-weight: 400;
}

._2TRQMvCj {
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  top: 1px;
  background-image: unset;
  left: unset;
}

._2TRQMvCj .u-load-circle {
  -webkit-transform: translate(-50%, -50%) scale(0.5);
  transform: translate(-50%, -50%) scale(0.5);
}

.d8vgeBtB {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #328ad4;
}

.d8vgeBtB.qvkVPS6Z {
  color: #999;
}

._2M9UiRU_ {
  padding: 6px 17px 8px;
  color: var(--music-font-c4);
  font-size: 14px;
  line-height: 16px;
}

._2M9UiRU_,
._36aZ2m_f {
  width: 100%;
  box-sizing: border-box;
}

._36aZ2m_f {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  height: 60px;
}

._3HyBUfy8 {
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  z-index: 2;
  opacity: 0;
  -webkit-appearance: none;
  border-radius: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}

._2oeMv-Ch {
  box-sizing: border-box;
  font-size: 40px;
  color: var(--music-font-c1);
  width: 48px;
  height: 60px;
  border-bottom: 1px solid var(--music-b5-border);
  text-align: center;
}

._37oOgj_W {
  margin-top: 40px;
  text-align: center;
}

.u-login-page ._37oOgj_W {
  margin-top: 30px;
}

._3fo6oHZe {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  white-space: nowrap;
  margin: 0 auto;
  border: 0;
}

._3fo6oHZe._1W8xKkUH {
  opacity: 0.6;
}

._10mxG2UY {
  background: var(--music-theme);
  color: var(--music-background);
}

._34iSbAnD {
  background: var(--music-background);
  color: var(--music-theme);
  border: 1px solid var(--music-theme);
}

._2x7RrfYv {
  background: #fff;
  color: #ff3a3a;
}

._2FHEwtiE {
  background: #db2c1f;
  color: #fff;
  border: 1px solid #fff;
}

._19WWNTbu {
  width: 280px;
  height: 46px;
  border-radius: 46px;
  font-size: 16px;
}

._1Gh25bMk {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  font-size: 16px;
}

._2JFxkN6s .yidun.yidun--light .yidun_control {
  background: var(--music-input-bg);
  height: 43px !important;
  border-radius: 43px !important;
  border: none;
}

._2JFxkN6s .yidun.yidun--light .yidun_slider {
  top: -1px !important;
}

._2JFxkN6s .yidun.yidun--light .yidun_control .yidun_slide_indicator {
  height: 43px !important;
  border-radius: 43px !important;
  border: none;
}

._1_K70I2U {
  width: 36px;
  height: 36px;
}

._1rLVCovp {
  display: inline-block;
  vertical-align: middle;
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
  fill: var(--music-svg);
}

.XkG6q_Pj {
  width: 12px;
}

.Ac61VcCO,
.XkG6q_Pj {
  display: inline-block;
  vertical-align: middle;
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
  fill: var(--music-svg);
  height: 18px;
}

.Ac61VcCO {
  width: 14px;
}

._1OE69MVt {
  height: 14px;
}

._1OE69MVt,
._3PcKc2Al {
  display: inline-block;
  vertical-align: middle;
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
  fill: var(--music-svg);
  width: 16px;
}

._3PcKc2Al {
  height: 18px;
}

.b2Oio6NX {
  width: 15px;
  height: 15px;
}

._1MeSHB_z,
.b2Oio6NX {
  display: inline-block;
  vertical-align: middle;
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
  fill: var(--music-svg);
}

._1MeSHB_z {
  width: 5px;
  height: 9px;
}

._19eBJjhR,
._29IIQ25e {
  display: inline-block;
  vertical-align: middle;
  background-position: 0 0;
  background-size: contain;
  background-repeat: no-repeat;
  fill: var(--music-svg);
  width: 12px;
  height: 7px;
}

._2x5i08fd {
  margin: 0 auto 18px;
  width: 100%;
}

._2n2I009n {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 43px;
  line-height: 43px;
  background: var(--music-input-bg);
  border-radius: 25px;
}

._1_jgETMt {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  margin: 0 10px 0 15px;
  width: 18px;
  text-align: center;
}

.yBaMRPOP {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.yBaMRPOP,
.yBaMRPOP ._1LP_Yw3V {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 1%;
  color: var(--music-font-c1);
  font-size: 16px;
}

.yBaMRPOP ._1LP_Yw3V {
  display: block;
  outline: none;
  border: none;
  background: none;
}

.yBaMRPOP ._1LP_Yw3V::-webkit-input-placeholder {
  color: var(--music-font-c5);
}

.yBaMRPOP ._1LP_Yw3V::-webkit-input-placeholder,
.yBaMRPOP ._1LP_Yw3V::placeholder {
  color: var(--music-font-c5);
}

.yBaMRPOP ._1LP_Yw3V::-webkit-search-cancel-button {
  display: none;
}

.yBaMRPOP .KFb9BIqH {
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  margin-right: 10px;
}

.yBaMRPOP ._2iZTDHop {
  padding: 2px 18px;
  color: var(--music-font-c4);
  font-size: 15px;
}

.yBaMRPOP ._1zk5Wy3b {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 2px 18px;
  height: 20px;
  color: var(--music-theme);
  font-size: 13px;
}

.yBaMRPOP ._14MstDnO {
  margin-left: -5px;
  width: 50px;
  color: var(--music-font-c1);
}

.yBaMRPOP select {
  outline: none;
  border: none;
  border-radius: 0;
  background: none;
  text-align: center;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

._1BWvloQQ {
  box-sizing: border-box;
}

._1TT11CYD {
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin: 0 0 30px;
  padding: 0 47px;
}

._1TT11CYD,
.L-9qxIrY {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

.L-9qxIrY {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  min-width: 50px;
  font-size: 12px;
  line-height: 17px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

._1zXypW90 {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-top: 40px;
}

._1_EC84D5,
._1zXypW90 {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

._1_EC84D5 {
  width: 100%;
}

._1_EC84D5 input {
  background: none;
}

._3OxXTTgi {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 43px;
  line-height: 43px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 25px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 1%;
}

._1OO40MIX {
  color: var(--music-font-c1);
  font-size: 16px;
}

._11tz2D4b {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
  margin: 0 10px 0 15px;
  width: 18px;
  text-align: center;
}

._3uEZQsWx {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
  width: 88px;
  overflow: hidden;
  margin-left: 10px;
}

._95fpuXks {
  display: block;
  width: 88px;
  height: 43px;
}

.RXsNdMoP {
  box-sizing: border-box;
  margin: 0 auto 18px;
}

._1AdUVNjA {
  display: block;
  margin: 40px auto;
  width: 94px;
  height: 90px;
  background: url(http://p1.music.126.net/nmOAqRPOhJ9-dW7PGmLiZA==/109951163320756945.png)
    0 0 / contain no-repeat;
}

._1X3t9AZD {
  text-align: center;
  color: var(--music-font-c4);
  letter-spacing: 1px;
  line-height: 1.6;
}

.u-login-page ._1AdUVNjA {
  margin-top: 40%;
}

._3IWZfEd8 {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
}

._3qURL07Y {
  display: block;
  margin: 0 auto;
  width: 75px;
  height: 75px;
}

._277Hls_6 {
  margin: 30px auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  white-space: nowrap;
  font-size: 9px;
  color: hsla(0, 0%, 100%, 0.6);
}

._72V7QLEK {
  position: relative;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-image: url(https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9234692511/f328/dea0/a9a6/fbd053d76551b4c807b504bb12a236d5.png);
}

._72V7QLEK._26n8tS4z,
._72V7QLEK:after {
  background-image: url(https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9234693129/8bbc/09e3/b7c9/a9cfba31c896ee4d699dfaf505dc5447.png);
}

._72V7QLEK:after {
  content: "";
  position: absolute;
  opacity: 0;
  visibility: hidden;
  width: 37px;
  height: 32px;
  top: -8px;
  left: -14px;
}

._1f7Tuvor,
._1f7Tuvor:visited {
  color: #fff;
  text-decoration: none;
}

._1Ngdj0bB {
  background-color: #db2c1f;
}

._1L7D5io7 {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  height: 110px;
}

.m-toast,
.mrc-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  min-width: 70px;
  min-height: 30px;
  text-align: center;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.m-toast.toast-entering,
.mrc-toast.toast-entering {
  opacity: 0;
}

.m-toast.toast-entered,
.m-toast.toast-exiting,
.mrc-toast.toast-entered,
.mrc-toast.toast-exiting {
  opacity: 1;
}

.m-toast.toast-exited,
.mrc-toast.toast-exited {
  opacity: 0;
}

.m-toast .text,
.mrc-toast .text {
  padding: 10px 15px;
  line-height: 30px;
  font-size: 15px;
  color: #fff;
}

.m-toast-center,
.mrc-toast-center {
  margin-top: -100px;
  width: 180px;
  min-height: 116px;
  border-radius: 6px;
}

.m-toast-center .icn,
.mrc-toast-center .icn {
  display: inline-block;
  width: 35px;
  height: 35px;
  margin: 25px 0 6px;
}

.m-toast-center .text,
.mrc-toast-center .text {
  line-height: 20px;
  padding: 0 15px 10px;
}

.m-toast-top,
.mrc-toast-top {
  top: 15px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  min-width: 70px;
  height: 30px;
  padding: 0 15px;
  line-height: 30px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
}

.m-toast-top .text,
.mrc-toast-top .text {
  padding: 0;
  line-height: 30px;
}

.m-toast-top .icn,
.mrc-toast-top .icn {
  display: none;
  margin: 0;
}

.m-toast-top.toast-entering,
.mrc-toast-top.toast-entering {
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
  opacity: 0.5;
}

.m-toast-top.toast-entered,
.mrc-toast-top.toast-entered {
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  opacity: 1;
}

.m-toast-top.toast-exiting,
.mrc-toast-top.toast-exiting {
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  opacity: 0.5;
}

.m-toast-top.toast-exited,
.mrc-toast-top.toast-exited {
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
  opacity: 0.01;
}

.m-toast-loading,
.mrc-toast-loading {
  margin-top: -100px;
  width: 180px;
  min-height: 116px;
  border-radius: 6px;
}

.m-toast-loading .icn,
.mrc-toast-loading .icn {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 27px 0 6px;
  background: url(//p3.music.126.net/C9tJEnwLhYm4dvTdsukD0g==/19106213556354168.jpg)
    no-repeat;
  background-size: 30px 240px;
  background-position: 0 0;
  -webkit-animation: toastload 0.72s step-start infinite;
  animation: toastload 0.72s step-start infinite;
}

.m-toast-loading .text,
.mrc-toast-loading .text {
  line-height: 20px;
  padding: 0 15px 10px;
}

@keyframes toastload {
  0% {
    background-position-y: 0;
  }

  14.28% {
    background-position-y: -30px;
  }

  28.56% {
    background-position-y: -60px;
  }

  42.84% {
    background-position-y: -90px;
  }

  57.12% {
    background-position-y: -120px;
  }

  71.4% {
    background-position-y: -150px;
  }

  85.68% {
    background-position-y: -180px;
  }

  to {
    background-position-y: -210px;
  }
}

@-webkit-keyframes toastload {
  0% {
    background-position-y: 0;
  }

  14.28% {
    background-position-y: -30px;
  }

  28.56% {
    background-position-y: -60px;
  }

  42.84% {
    background-position-y: -90px;
  }

  57.12% {
    background-position-y: -120px;
  }

  71.4% {
    background-position-y: -150px;
  }

  85.68% {
    background-position-y: -180px;
  }

  to {
    background-position-y: -210px;
  }
}

.u-spin {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.u-spin_text {
  display: inline-block;
  min-width: 30px;
  background: url(//p3.music.126.net/0RX8forSK67QD7MDa4hp5g==/18582846023047943.gif)
    top no-repeat;
  background-size: 20px;
  padding-top: 30px;
  color: #333;
  text-align: center;
}

.u-load-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 19px;
  height: 19px;
  background-image: url(//p4.music.126.net/S4EF0NcfGSdnsGxfoXF6GQ==/109951163115654967.jpg);
  background-repeat: no-repeat;
  background-size: 152px 19px;
  background-position: 0 0;
  -webkit-animation: loadcircle 0.72s step-start infinite;
  animation: loadcircle 0.72s step-start infinite;
}

.u-load-circle_30 {
  width: 30px;
  height: 30px;
  background: url(//p3.music.126.net/C9tJEnwLhYm4dvTdsukD0g==/19106213556354168.jpg)
    no-repeat;
  background-size: 30px 240px;
  background-position: 0 0;
  -webkit-animation: loadcirclebig 0.72s step-start infinite;
  animation: loadcirclebig 0.72s step-start infinite;
}

@-webkit-keyframes loadcircle {
  0% {
    background-position-x: 0;
  }

  14.28% {
    background-position-x: -19px;
  }

  28.56% {
    background-position-x: -38px;
  }

  42.84% {
    background-position-x: -57px;
  }

  57.12% {
    background-position-x: -76px;
  }

  71.4% {
    background-position-x: -95px;
  }

  85.68% {
    background-position-x: -114px;
  }

  to {
    background-position-x: -133px;
  }
}

@keyframes loadcircle {
  0% {
    background-position-x: 0;
  }

  14.28% {
    background-position-x: -19px;
  }

  28.56% {
    background-position-x: -38px;
  }

  42.84% {
    background-position-x: -57px;
  }

  57.12% {
    background-position-x: -76px;
  }

  71.4% {
    background-position-x: -95px;
  }

  85.68% {
    background-position-x: -114px;
  }

  to {
    background-position-x: -133px;
  }
}

@-webkit-keyframes loadcirclebig {
  0% {
    background-position-y: 0;
  }

  14.28% {
    background-position-y: -30px;
  }

  28.56% {
    background-position-y: -60px;
  }

  42.84% {
    background-position-y: -90px;
  }

  57.12% {
    background-position-y: -120px;
  }

  71.4% {
    background-position-y: -150px;
  }

  85.68% {
    background-position-y: -180px;
  }

  to {
    background-position-y: -210px;
  }
}

@keyframes loadcirclebig {
  0% {
    background-position-y: 0;
  }

  14.28% {
    background-position-y: -30px;
  }

  28.56% {
    background-position-y: -60px;
  }

  42.84% {
    background-position-y: -90px;
  }

  57.12% {
    background-position-y: -120px;
  }

  71.4% {
    background-position-y: -150px;
  }

  85.68% {
    background-position-y: -180px;
  }

  to {
    background-position-y: -210px;
  }
}

:root {
  --music-theme: #ff3a3a;
  --music-theme-rgb: 255, 58, 58;
  --music-font-c0: #000;
  --music-font-c1: rgba(0, 0, 0, 0.8);
  --music-font-c2: rgba(0, 0, 0, 0.6);
  --music-font-c3: rgba(0, 0, 0, 0.5);
  --music-font-c4: rgba(0, 0, 0, 0.4);
  --music-font-c5: rgba(0, 0, 0, 0.25);
  --music-background: #fff;
  --music-splitline: rgba(0, 0, 0, 0.1);
  --music-b5-border: rgba(0, 0, 0, 0.1);
  --music-icon-l5: rgba(0, 0, 0, 0.3);
  --music-input-bg: rgba(0, 0, 0, 0.03);
  --music-svg: rgba(0, 0, 0, 0.4);
}

:root .th-dark {
  --music-font-c0: #fff;
  --music-font-c1: #fff;
  --music-font-c2: hsla(0, 0%, 100%, 0.8);
  --music-font-c3: hsla(0, 0%, 100%, 0.65);
  --music-font-c4: hsla(0, 0%, 100%, 0.35);
  --music-font-c5: hsla(0, 0%, 100%, 0.25);
  --music-background: #151515;
  --music-splitline: hsla(0, 0%, 100%, 0.1);
  --music-b5-border: hsla(0, 0%, 100%, 0.15);
  --music-icon-l5: hsla(0, 0%, 100%, 0.5);
  --music-input-bg: hsla(0, 0%, 100%, 0.03);
  --music-svg: hsla(0, 0%, 100%, 0.4);
}

.u-login-modal {
  position: fixed;
  z-index: 900;
}

.u-login-modal,
.u-login-page {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.u-login-page {
  position: absolute;
  height: 100vh;
}

.u-login-modal,
.u-login-page {
  font-family: HanHei SC, PingFang SC, Helvetica Neue, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 1.4;
  color: #333;
  text-size-adjust: none;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  box-sizing: border-box;
}

.u-login-modal img,
.u-login-modal input,
.u-login-page img,
.u-login-page input {
  border: 0;
}

.u-login-modal input,
.u-login-modal p,
.u-login-page input,
.u-login-page p {
  padding: 0;
  margin: 0;
}

.u-login-modal em,
.u-login-modal i,
.u-login-page em,
.u-login-page i {
  font-style: normal;
  text-align: left;
}

.u-login-modal i,
.u-login-modal li,
.u-login-page i,
.u-login-page li {
  list-style: none;
}

.u-login-modal a,
.u-login-modal a:hover,
.u-login-page a,
.u-login-page a:hover {
  text-decoration: none;
}

.u-login-modal input[type="number"]::-webkit-inner-spin-button,
.u-login-page input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.u-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
