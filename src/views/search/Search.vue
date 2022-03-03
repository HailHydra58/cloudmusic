<template>
	<!-- 顶部,历史和推荐搜索 -->
	<History />
	<!-- 热搜 -->
	<HotSearch />
	<!-- 音乐专区 -->
	<MusicZone />
</template>

<script>
	import History from './childComps/History.vue'
	import HotSearch from './childComps/HotSearch.vue'
	import MusicZone from './childComps/MusicZone.vue'
	
	export default {
	  name: 'Search',
		components: {
			History,
			HotSearch,
			MusicZone
		},
		setup() {
			
		}
	}
</script>

<style scoped>
</style>
