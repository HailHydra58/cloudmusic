<template>
	<div id="top">
		<NavBar>
			<template v-slot:left>
				<svg @click="$router.go(-1)" class="icon" aria-hidden="true">
					<use xlink:href="#icon-fanhui"></use>
				</svg>
			</template>
			<template v-slot:center>
				<div style="display: flex">
					<span style="flex: 1">歌单</span>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-sousuo"></use>
						</svg>
				</div>
			</template>
			<template v-slot:right>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-gengduo1"></use>
				</svg>
			</template>
		</NavBar>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navBar/NavBar.vue'
	
	export default {
		name: 'Top',
		components: {
			NavBar
		}
	}
</script>

<style scoped>
	#top {
		position: fixed;
		top: 0px;
		width: 100%;
		z-index: 9;
	}
	
	.icon {
		width: 25px;
		height: 25px;
		padding-top: 9px;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
	
	span {
		font-size: 16px;
		font-weight: bold;
	}
</style>
