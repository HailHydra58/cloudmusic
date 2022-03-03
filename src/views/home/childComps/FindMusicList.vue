<template>
	<div class="top">
		<span>发现好歌单</span>
		<p>查看更多</p>
	</div>
	<Scroll class="content" :scrollX="true">
		<div class="botton">
			<router-link :to="{path: '/musiclist', query:{id:item.id}}" class="bottonList" v-for="(item,index) in recommendMusic.list">
				<span class="playMusic">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-w24gl-play"></use>
					</svg>
					{{changeValue(item.playCount)}}
				</span>
				<img :src="item.picUrl" />
				<span>{{item.name}}</span>
			</router-link>
		</div>
	</Scroll>
</template>

<script>
	import { reactive, onMounted } from 'vue'
	import { getRecommendMusic } from '@/network/request.js'
	
	import Scroll from '@/components/common/scroll/Scroll.vue'
	
	export default {
	  name: 'FindMusicList',
		components: {
			Scroll
		},
		setup() {
			let recommendMusic = reactive({
				list: []
			})
			
			onMounted(() => {
				getRecommendMusic(6).then(res => {
					recommendMusic.list = res.data.result
				})
			})
			
			function changeValue(value) {
				if(value >= 100000000) {	//亿
					let num = value/100000000
					return num.toFixed(0) + "亿"	//.toFixed()是保留几位小数,默认为0
				}else if(value >= 10000) {	//万
					let num = value/10000
					return num.toFixed() + "万"
				}
			}
			
			return {
				recommendMusic,
				changeValue
			}
		}
	}
</script>

<style scoped>
	.top {
		display: flex;
		border-top: 0.1px solid #a1a1a1;
		padding: 10px;
		padding-left: 15px;
	}
	
	.top span {
		flex: 1;
		font-size: 14px;
		font-weight: bold;
	}
	
	.top p {
		border: 1px solid #000;
		border-radius: 25px;
		margin: 0px;
		padding: 2px 8px 2px 8px;
	}
	
	.botton {
		display: flex;
		float: left;/* 子元素宽度受flex影响，致父元素的宽度不能自动增长加float: left */
		padding-left: 15px;
	}
	
	.botton img {
		width: 105px;
	}
	
	.botton span {
		font-size: 13px;
		/* 下面4个属性关于文字多出X行出现... */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	.bottonList {
		height: 140px;
		padding-right: 10px;
		position: relative; /* 为了子元素的绝对定位做参照 */
		color: #000000;
	}
	
	.playMusic {
		right: 10px;
		position: absolute;
		color: white;
		background-color: #c8c8c8;
		border-radius:15px;
		z-index: 9;
	}
	
	.icon {
		width: 12px;
		height: 12px;
		vertical-align: -0.15em;
		overflow: hidden;
	}
</style>
