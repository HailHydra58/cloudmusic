<template>
	<div class="hotList">
		<span :class="{isBold: listIndex == index}" v-for="(item, index) in hotList" @click="listIndex = index">
			{{item}}
		</span>
	</div>
	<div class="hotSearchBox">
		<div v-show="!isShow" class="hotSearchBox_1" v-for="(item, index) in hotSearch">
			<span style="color: #b0b0b0;">{{index+1}}</span> {{item.first}}
		</div>
		<div v-show="isShow" class="hotSearchBox_1" v-for="(item, index) in hotSearchs">
			<span style="color: #b0b0b0;">{{index+1}}</span> {{item.searchWord}}
		</div>
		<div v-show="!isShow" class="hotSearchBox_2" @click="showMore">
			展开更多↓
		</div>
	</div>
</template>

<script>	
	import { getHotSearch, getHotSearchX } from '@/network/request.js'
	import { ref, nextTick } from 'vue'
	
	export default {
	  name: 'HotSearch',
		setup() {
			const hotList = ref(['热搜榜','视频榜','播客榜'])
			const listIndex = ref(0)
			const isShow = ref(false)
			
			const hotSearch = ref()
			getHotSearch().then(res => { 
				hotSearch.value = res.data.result.hots
				// console.log(hotSearch.value)
			})
			
			const hotSearchs = ref()
			getHotSearchX().then(res => {
				hotSearchs.value = res.data.data
				// console.log(hotSearchs.value)
			})
			const showMore = () => {
				isShow.value = !isShow.value
			}
			
			return {
				hotList,
				listIndex,
				hotSearch,
				hotSearchs,
				showMore,
				isShow
			}
		}
	}
</script>

<style scoped>
	.hotList {
		width: 100%;
		height: 25px;
		line-height: 40px;
		font-size: 15px;
	}
	
	.hotList span {
		margin: 20px;
	}
	
	.isBold {
		font-weight: bold;
	}
	
	.hotSearchBox {
		display: flex;
		flex-wrap: wrap; /* flex布局自动换行 */
		margin: 20px;
		background-color: #f3f3f3;
		border-radius: 10px;
	}
	
	.hotSearchBox_1 {
		width: 40%;
		height: 40px;
		line-height: 40px;
		margin-left: 30px;
		font-size: 13px;
		overflow: hidden;
	}
	
	.hotSearchBox_2 {
		width: 100%;
		height: 30px;
		text-align: center;
		font-size: 14px;
		color: #b0b0b0;
	}
	
	.isRed{
		color: red;
	}
</style>
