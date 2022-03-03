<template>
	<div class="bg1">
		<svg class="icon" aria-hidden="true">
			<use xlink:href="#icon-yinlezhuanji"></use>
		</svg>
		<span>含X首VIP专享歌曲</span>
		<span></span>
	</div>
	<div class="bg2">
		<div class="bg2-1">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-yinlezhuanji"></use>
			</svg>
			<span id="left"><span id="left1" @click="clickPlaySong">播放全部</span>(共{{trackIds.length}}首)</span>
			<span id="right">+ 收藏 ({{playList.subscribedCount}})</span>
		</div>
		<div class="list">
			<div class="list_1" v-for="(item,index) in songs" @click="showImg(index)">
				<span id="list_1_1">{{index+1}}</span>
				<div>
					<div id="names">{{item.name}}</div>
					<div class="name">
						<!-- 第一个创作者 -->
						<span>{{item.ar[0].name}}</span>
						<!-- 如果有多个创作者则会添加这行 -->
						<span v-for="(name,index) in item.ar.slice(1)">{{ifShow(item)}}{{name.name}}</span>
						<!-- 歌曲专辑 -->
						<span> - {{item.al.name}}</span>
						<!-- 如果有原创就显示 -->
						<span v-if="item.originSongSimpleData">{{showArtists(item)}}</span>
						<!-- <span>{{showArtists2(item)}}</span> -->
					</div>
				</div>
				<div style="flex: 1;">
					<span></span>
					<svg class="icon1" aria-hidden="true">
						<use xlink:href="#icon-gengduo2"></use>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { useStore } from 'vuex'
	
	export default {
	  name: 'List',
		props: {
			playList: {
				type: Object,
				default: {}
			},
			trackIds: {
				type:Array,
				default: []
			},
			songs: {
				type:Array,
				default: []
			}
		},
		setup(props) {
			function ifShow(item) {
				if(item.ar.length > 1 ) {
					return '/'
				}
			}
			
			function showArtists(item) {
				return " | 原唱: " + item.originSongSimpleData.artists[0].name
			}
			
			function showArtists2(item) {
				for (let i in item.originSongSimpleData.artists) {
					return "/" + i.name
				}
			}
			
			let store = useStore()
			function showImg(index) {
				store.commit('setPlayList', props.songs)
				store.commit('setPlayMusicIndex', index)
				store.commit('setIsPlayTrue')
			}
			
			//点击播放将歌曲传到vuex
			function clickPlaySong() {
				store.commit('setPlayList', props.songs)
				store.commit('setIsPlayTrue')
			}
			
			return {
				ifShow,
				showArtists,
				showArtists2,
				showImg,
				clickPlaySong
			}
		}
	}
</script>

<style scoped>
	.icon {
		position: relative;
		top: 7px;
		left: 15px;
		width: 30px;
		height: 30px;
		vertical-align: -0.15em;
		overflow: hidden;
	}
	
	.icon1 {
		position: absolute;
		right: 3px;
		margin-top: 5px;
		width: 25px;
		height: 25px;
		vertical-align: -0.15em;
		overflow: hidden;
	}
	
	.bg1 {
		width: 100%;
		height: 100px;
		background-color: #E2E2E0;
		border-radius: 18px;	/* 使其边框变圆滑 */
		z-index: -1;
		line-height: 60px;
		font-size: 16px;
	}
	
	.bg1 span {
		margin-left: 25px;
		font-weight: 500;
	}
	
	.bg2 {
		position: relative;
		top: -40px;
		width: 100%;
		background-color: white;
		border-radius: 18px;	/* 使其边框变圆滑 */
	}
	
	.bg2-1 {
		display: flex;
		margin-bottom: 8px;
	}
	
	#left {
		flex: 1;
		line-height: 45px;
		padding-left: 25px;
		color: #989898;
	}
	
	#left1 {
		font-size: 15px;
		color: #000000;
	}
	
	#right {
		background-color: #FF4C3C;
		border-radius: 30px;	/* 使其边框变圆滑 */
		line-height: 32px;
		margin: 6px;
		padding-left: 15px;
		padding-right: 15px;
		font-size: 13px;
		color: #FFCEC4;
	}
	
	.list {
		
	}
	
	.list_1 {
		display: flex;
		height: 40px;
		margin-bottom: 15px;
	}
	
	#list_1_1 {
		color: #989898;
		font-size: 16px;
	}
	
	.list_1 span {
		margin: 10px;
	}
	
	.name span {
		margin: 0;
		color: #989898;
	}
	
	#names {
		font-size: 15px;
	}
	
	.iconRigth {
		
		
	}
</style>
