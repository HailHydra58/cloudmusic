<template>
	<!-- 背景图 -->
	<img class="bg" :src="playList.coverImgUrl" />
	<!-- 顶部 -->
	<Top />
	<Scroll class="content">
		<div>
			<!-- 歌单详情页 -->
			<SongDetails :playList="playList" :creator="creator" />
			<!-- 歌单列表 -->
			<List :playList="playList" :trackIds="trackIds" :songs="songs" />
		</div>
	</Scroll>
</template>
<script>
	import { reactive, toRefs } from 'vue'
	import { useRoute } from 'vue-router'
	import { getMusiList, getLimit } from '@/network/request.js'
	import { useStore } from 'vuex'
	
	import Top from './childComps/Top.vue'
	import SongDetails from './childComps/SongDetails.vue'
	import List from './childComps/List.vue'
	import Scroll from '@/components/common/scroll/Scroll.vue'
	
	export default {
	  name: 'MusicList',
		components: {
			Top,
			SongDetails,
			List,
			Scroll
		},
		setup() {
			let musicList = reactive({
				playList: {},
				creator: {},
				trackIds: [],
				songs: []
			})
			
			//从路由中获取ID
			const id = useRoute().query.id
			getMusiList(id).then(res => {
				musicList.playList = res.data.playlist
				musicList.creator = res.data.playlist.creator	//上传歌单的用户信息
				musicList.trackIds = res.data.playlist.trackIds	//歌曲
			})
			let store = useStore()
			getLimit(id).then(res => {
				musicList.songs = res.data.songs	//歌曲
			})
			
			return {
				...toRefs(musicList),	//解构出来可以直接使用里面的对象
			}
		}
	}
</script>
<style scoped>
	.bg {
		position: absolute;	/* fixed固定定位,不会随着窗口大小改变.absolute绝对定位,会随着窗口大小与页面一起改变 */
		left: 0;
		top: 0;
		width: 100%;
		z-index: -1;	/* 层级-1 */
		filter: blur(40px);	/* 图片模糊度 */
	}
	
	.content {
		margin-top: 45px;
		height: calc(100vh - 30px - 38px);
	}
</style>
