<template>
	<div id="musicDetail">
		<!-- 背景图 -->
		<img class="bg" :src="playList[playMusicIndex].al.picUrl" />
		<!-- 顶部 -->
		<MusicTop :playList="playList" :playMusicIndex="playMusicIndex" />
		<!-- 中间图片 -->
		<div class="centerImg">
			<div class="centerImg1"><img :class="{isImgChange: !isPlay}" src="@/assets/needle-ab.png" /></div>
			<div class="centerImg2">
				<div class="imgx">
				<img src="@/assets/heijiao.png" />
				<img id="img2" :src="playList[playMusicIndex].al.picUrl" />
				</div>
			</div>
		</div>
		<!-- 喜欢等一栏 -->
		<div class="licks">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-shoucang"></use>
			</svg>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-xiazai"></use>
			</svg>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-pinglun"></use>
			</svg>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-gengduo2"></use>
			</svg>
		</div>
		<!-- 进度条 -->
		<div class="slider">
			<!-- toString(转换为字符串),padStart表示至少2个字符,默认为'0' -->
			<span style="padding-right: 10px;">{{nowMin.toString().padStart(2,'0')}}:{{nowS.toString().padStart(2,'0')}}</span>
			<van-slider button-size="8px" bar-height="2px" 
									active-color="#ffffff" inactive-color="#b0b0b0" 
									v-model="value" @change="onChange" />
									<!-- toString(转换为字符串),padStart表示至少2个字符,默认为'0' -->
			<span style="padding-left: 10px;">{{min.toString().padStart(2,'0')}}:{{s.toString().padStart(2,'0')}}</span>
		</div>
		<!-- 播放暂停等一栏 -->
		<div class="playMusic">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-suijibofang"></use>
			</svg>
			<svg class="icon" aria-hidden="true" @click="upIndex">
				<use xlink:href="#icon-shangyiqu"></use>
			</svg>
			<span style="flex: 1; text-align: center;">
				<svg v-show="!isPlay" class="icon1" aria-hidden="true" @click="isPlays">
					<use xlink:href="#icon-zanting"></use>
				</svg>
				<svg v-show="isPlay" class="icon1" aria-hidden="true" @click="isPlays">
					<use xlink:href="#icon-bofangzhong"></use>
				</svg>
			</span>
			<svg class="icon" aria-hidden="true" @click="downIndex">
				<use xlink:href="#icon-xiayiqu"></use>
			</svg>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-bofangliebiao"></use>
			</svg>
		</div>
	</div>
</template>

<script>
	import { watch, ref, computed } from 'vue'
	import { mapState, useStore ,mapActions } from 'vuex'
	import { Slider } from 'vant'
	
	import MusicTop from './childComps/MusicTop.vue'
	
	export default {
		name: 'MusicDetail',
		components: {
			MusicTop,
			[Slider.name]: Slider
		},
		computed: {
			...mapState([
				'playList',
				'playMusicIndex',
				'isPlay'
			])
		},
		setup() {
			const store = useStore()
			// setTimeout(() => {
			// 	console.log(store.state.playList)
			// }, 1000)
			
			function upIndex() {
				store.getters.reduceIndex
				timeX()
			}
			function isPlays() {
				store.commit('setIsPlay')
			}
			function downIndex() {
				store.getters.addIndex
				timeX()
			}
			
			//要先用计算属性返回这样才能监听到实时变化
			const slider = computed(() => {
				return store.state.slider
			})
			const value = ref(slider)
			const onChange = (value) => {
				store.commit('setSlider', value)
			}
			
			//进度条右边音乐总时间
			const min = ref(0)
			const s = ref(0)
			setTimeout(() => {
				//要先用计算属性返回这样才能监听到实时变化
				const duration = computed(() => {
					return parseInt(store.state.duration)
				})
				const time = ref(duration)
				if(time.value >= 60) {
					min.value = parseInt(time.value / 60)
					s.value = parseInt(time.value % 60)
				} else {
					min.value = 0
					s.value = time.value
				}
			}, 500)
			
			function timeX() {
				setTimeout(() => {
					//要先用计算属性返回这样才能监听到实时变化
					const duration = computed(() => {
						return parseInt(store.state.duration)
					})
					const time = ref(duration)
					if(time.value >= 60) {
						min.value = parseInt(time.value / 60)
						s.value = parseInt(time.value % 60)
					} else {
						min.value = 0
						s.value = time.value
					}
				}, 1000)
			}
			
			//进度条左边音乐当前时间
			const nowMin = ref(0)
			const nowS = ref(0)
			setInterval(nowTime, 1000)
			function nowTime() {
				const currentTime = computed(() => {
					return parseInt(store.state.currentTime)
				})
				const nowTimes = ref(currentTime)
				if(nowTimes.value >= 60) {
					nowMin.value = parseInt(nowTimes.value / 60)
					nowS.value = parseInt(nowTimes.value % 60)
				} else {
					nowMin.value = 0
					nowS.value = nowTimes.value
				}
			}
			
			return {
				isPlays,
				upIndex,
				downIndex,
				value,
				onChange,
				min,
				s,
				nowMin,
				nowS
			}
		},
	};
</script>

<style scoped>
	.bg {
		position: fixed;	/* fixed固定定位,不会随着窗口大小改变.absolute绝对定位,会随着窗口大小与页面一起改变 */
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;	/* 层级-1 */
		filter: blur(90px);	/* 图片模糊度 */
	}
	
	#musicDetail {
		position: fixed;
		width: 100%;
		height: 100%;
		background: white;
		z-index: 11;
	}
	
	.centerImg {
		width: 100%;
		height: 440px;
	}
	
	.centerImg1 {
		width: 100%;
		height: 88px;
		text-align: center;
	}
	
	.centerImg1 img {
		position: absolute;
		left: 48%;
		top: 70px;
		width: 70px;
		height: auto;
		z-index: 9999;
		transform-origin: 10px 0;	/* 修正旋转带来的位置差 */
		transition: all 0.8s;	/* 旋转时间1s */
	}
	
	.isImgChange {
		transform: rotate(-30deg);	/* 旋转图片 */
	}
	
	.centerImg2 {
		width: 100%;
		height: 250px;
	}
	
	.centerImg2 img {
		width: 250px;
		position: absolute;
	}
	
	.imgx {
		width: 250px;
		height: 250px;
		margin: auto;	/* auto使其间距左右平分 */
	}
	
	#img2 {
		position: relative;
		left: 47px;
		top: 46px;
		width: 160px;
		z-index: -1;
	}
	
	.licks {
		width: 100%;
		height: 50px;
		display: flex;
	}
	
	.icon {
		width: 25px;
		height: 25px;
		padding-top: 9px;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		flex: 1;
	}
	
	.icon1 {
		width: 50px;
		height: 50px;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
	
	.playMusic {
		display: flex;
	}
	
	.slider {
		display: flex;
		align-items: center;	/* flex子元素垂直居中 */
		width: auto;
		height: 60px;
		margin: 0 15px 0 15px;
	}
</style>
