<template>
	<NavBar>
		<template v-slot:left>
			<svg @click="$router.go(-1)" class="icon" aria-hidden="true">
			  <use xlink:href="#icon-xiajiantou-copy"></use>
			</svg>
		</template>
		<template v-slot:center>
			<div class="text">
				{{playList[playMusicIndex].name}}
			</div>
		</template>
		<template v-slot:right>
			<svg class="icon" aria-hidden="true">
			  <use xlink:href="#icon-fenxiang-copy-copy"></use>
			</svg>
		</template>
	</NavBar>
</template>
<script>
	import NavBar from '@/components/common/navBar/NavBar.vue'
	
	export default {
	  name: 'MusicTop',
		components: {
			NavBar
		},
		props:['playList', 'playMusicIndex']
	}
</script>
<style scoped>
	.icon {
		width: 25px;
		height: 25px;
		padding-top: 9px;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
	
	.text {
		text-align: center;
		font-size: 18px;
	}
</style>
