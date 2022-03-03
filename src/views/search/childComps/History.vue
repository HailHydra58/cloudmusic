<template>
	<!-- 顶部 -->
	<div class="flexbox">
		<span class="box1">
			<!-- placeholder为默认显示内容 -->
			<input type="text" v-model="keyHistory" :placeholder="searchDefault" @keyup.enter="saveHistory(keyHistory)" />
		</span>
		<span class="ziti1" @click="$router.go(-1)">取消</span>
	</div>
	<!-- 历史 -->
	<div class="box" v-show="showHistory">
		<span class="ziti">历史</span>
		<div class="box_1">
			<Scroll class="content" :scrollX="true">
				<div class="content_1">
					<span class="hisList" v-for="item in history" @click="clickHistory(item)">
						{{item}}
					</span>
				</div>
			</Scroll>
		</div>
		<span class="vsg" @click="deleteHistory">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-shanchu"></use>
			</svg>
		</span>
	</div>
	<!-- 点击删除vsg出现的弹窗 -->
	<van-popup round v-model:show="show" duration="0.3">
		<div class="flex1">确定要清空历史记录吗?</div>
		<div class="flex2">
			<span @click="show = false" class="flexChild" style="border-right: 1px solid #dddddd;">取消</span>
			<span @click="deleteAll" class="flexChild">清空</span>
		</div>
	</van-popup>
</template>

<script>
	import { useRouter } from 'vue-router'
	import { Popup } from 'vant';
	import { getSearchDefault, getSearchMusic } from '@/network/request.js'
	import { ref } from 'vue'
	
	import Scroll from '@/components/common/scroll/Scroll.vue'
	
	export default {
	  name: 'History',
		components: {
			Scroll,
			[Popup.name]: Popup
		},
		setup() {
			const history = ref(['小学生','大学生','中学生','高中生'])
			
			// axios请求的默认搜索关键字
			const searchDefault = ref()
			getSearchDefault().then(res => {
				searchDefault.value = res.data.data.realkeyword
			})
			
			//搜索歌曲
			const searchSong = ref()
			const keyHistory = ref()
			const router = useRouter()
			function saveHistory(keyHistory) {
				// 判断是否默认搜索
				if(keyHistory) {
					history.value.splice(0,0,keyHistory)
					// axios请求搜索
					getSearchMusic(keyHistory).then(res => {
						searchSong.value = res.data.result.songs
						console.log(searchSong.value)
					})
				} else {
					history.value.splice(0,0,searchDefault.value)
					// axios请求搜索
					getSearchMusic(searchDefault.value).then(res => {
						searchSong.value = res.data.result.songs
						console.log(searchSong.value)
					})
				}
				// 回车路由跳转
				// router.push('/searchend')
			}
			
			// 历史记录点击搜索
			function clickHistory(item) {
				
			}
			
			//点击删除全部历史记录
			const showHistory = ref(true)
			const show = ref(false)
			const deleteHistory = () => {
				show.value = true
			}
			const deleteAll = () => {
				history.value.splice(0,history.value.length)
				show.value = false
				showHistory.value = false
			}
			
			return {
				history,
				keyHistory,
				saveHistory,
				clickHistory,
				deleteHistory,
				show,
				deleteAll,
				showHistory,
				searchDefault
			}
		}
	}
</script>

<style scoped>
	.flexbox {
		width: 100%;
		height: 60px;
		display: flex;
		align-items:center;		/* 垂直 */
	}
	
	.box1 {
		flex: 1;
	}
	
	.box1 input {
		width: 91%;
		height: 30px;
		margin-top: 1px;
		margin-left: 15px;
		border-radius: 20px;	/* 使其边框变圆滑 */
		border: 0;
		background-color: #efefef;
		padding-left: 10px;
		font-size: 15px;
	}
	
	.ziti1 {
		width: 60px;
		text-align: center;
		font-size: 18px;
		font-weight: 500;
		
	}
	
	.box {
		width: 100%;
		height: 32px;
		display: flex;
	}
	
	.ziti {
		margin: 5px 10px 0 20px;
		font-size: 14px;
	}
	
	.box_1 {
		flex: 1;
		overflow:hidden;	/* 和flex配合防止宽度被子元素撑大 */
		height: auto;
		font-size: 13px;
		margin-top: 2px;
	}
	
	.hisList {
		width: auto;
		height: 20px;
		border-radius: 20px;	/* 使其边框变圆滑 */
		background-color: #efefef;
		margin: 0 6px 0 6px;
		padding: 5px 12px 5px 12px;
		white-space: nowrap;	/* 内容自动不换行 */
	}
	
	.vsg {
		margin-top: 1px;
		width: 40px;
	}
	
	.icon {
		padding-top: 5px;
		padding-left: 10px;
		width: 20px;
		height: 20px;
		vertical-align: -0.15em;
		overflow: hidden;
	}
	
	.content {
		width: 100%;
	}
	
	.content_1 {
		display: flex;
		float: left;/* 子元素宽度受flex影响，致父元素的宽度不能自动增长加float: left */
	}
	
	.flex1 {
		width: 200px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border-bottom: 1px solid #dddddd;
	}
	
	.flex2 {
		height: 40px;
		display: flex;
		align-items:center;
	}
	
	.flexChild {
		flex: 1;
		text-align: center;
	}
</style>
