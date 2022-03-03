<template>
	<div id="playMusic" @click="jump">
		<div id="box">
			<img :src="playList[playMusicIndex].al.picUrl" />
			<div id="box_1">
				<span class="text1">{{playList[playMusicIndex].name}}</span>
				<span class="text2">- {{playList[playMusicIndex].ar[0].name}}</span>
			</div>
		</div>
		<span style="flex: 1;">
			<svg v-show="!isPlay" class="icon1" aria-hidden="true" @click="isPlays">
				<use xlink:href="#icon-zanting"></use>
			</svg>
			<svg v-show="isPlay" class="icon1" aria-hidden="true" @click="isPlays">
				<use xlink:href="#icon-bofangzhong"></use>
			</svg>
			<svg class="icon2" aria-hidden="true">
				<use xlink:href="#icon-bofangliebiao"></use>
			</svg>
		</span>
		<audio ref="play" :src="`https://music.163.com/song/media/outer/url?id=${playList[playMusicIndex].id}.mp3`"></audio>
	</div>
</template>

<script>
	import { ref, watch, computed, nextTick } from 'vue'
	import { mapState, useStore } from 'vuex'
	import { useRouter } from 'vue-router'
	
	export default {
		name: 'PlayMusic',
		setup() {
			const play = ref(null)
			let store = useStore()
			function isPlays(e) {
				//阻止冒泡事件,防止误触父级元素的click事件
				e.stopPropagation()
				store.commit('setIsPlay')
			}
			
			//watch监听vuex 需要先设置一个计算属性返回
			const changeSong = computed(() => {
				return store.state.playMusicIndex
			})
			// const changeList = computed(() => {
			// 	return store.state.playList
			// })
			const changePlay = computed(() => {
				return store.state.isPlay
			})
			watch(changeSong,() => {
				//音乐请求需要时间,可以用nextTick等待,也可以设置定时器
				nextTick(() => {
					//切换歌图标设置为播放
					store.commit('setIsPlayTrue')
					play.value.play()
				})
			})
			// watch(changeList,() => {
			// 	//切换歌单图标设置为播放
			// 	store.commit('setIsPlayTrue')
			// 	//切换歌单设置第一首播放
			// 	store.commit('setlistChange')
			// 	//音乐请求需要时间,可以用nextTick等待,也可以设置定时器
			// 	nextTick(() => {
			// 		play.value.play()
			// 	})
			// })
			// 监听Vuex isPlay状态实现点击播放和暂停
			watch(changePlay, () => {
				//音乐请求需要时间,可以用nextTick等待,也可以设置定时器
				nextTick(() => {
					//三目运算符他不香吗
					store.state.isPlay ? play.value.play() : play.value.pause()
				})
			})
			
			//设置定时函数每隔1s向vuex发送计算出来的进度条
			setInterval(timer, 1000)
			function timer() {
				const changeSlider = computed(() => {
					return (play.value.currentTime / play.value.duration) * 100
				})
				store.commit('setSlider', changeSlider.value)
				store.commit('setCurrentTime', play.value.currentTime)
				store.commit('setDuration', play.value.duration)
			}
			
			const router = useRouter()
			function jump() {
				router.push('/musicDetail')
			}
			
			return {
				isPlays,
				play,
				jump
			}
		},
		computed: {
			...mapState([
				'playList',
				'playMusicIndex',
				'isPlay'
			])
		}
	}
</script>

<style scoped>
	#box {
		width: 70%;
		position: relative;
		top: -13px;
		display: flex;
	}
	
	#box_1 {
		margin-top: 27px;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	
	.text1 {
		margin-left: 10px;
		font-size: 16px;
	}
	
	.text2 {
		margin-left: 4px;
		color: #A1A1A1;
		font-size: 13px;
	}
	
	img {
		width: 50px;
		height: 50px;
		margin: 5px 0 0 6px;
		border-radius: 100%;	/* 使其边框变圆滑 */
	}
	
	.icon1 {
		width: 30px;
		height: 30px;
		vertical-align: -0.15em;
		overflow: hidden;
		position: absolute;
		top: 9px;
		right: 65px;
	}
	
	.icon2 {
		width: 25px;
		height: 25px;
		vertical-align: -0.15em;
		overflow: hidden;
		position: absolute;
		right: 9px;
		top: 12px;
	}
	
	#playMusic {
		position: fixed;	/* fixed布局不随着页面变动而改变位置 */
		bottom: 0px;
		width: 100%;
		height: 50px;
		background-color: #ffffff;
		border-top: .1px solid #a1a1a1;
		z-index: 9;
		display: flex;
	}
</style>
