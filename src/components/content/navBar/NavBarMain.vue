<template>
	<NavBar>
		<template v-slot:left>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-gengduo"></use>
			</svg>
		</template>
		<template v-slot:center>
			<div id="center">
				<span :class="{centerShow:listNum === index}" v-for="(item,index) in list"
					@click="listNum = index">{{item}}</span>
			</div>
		</template>
		<template v-slot:right>
			<svg class="icon" aria-hidden="true" @click="$router.push('/search')">
				<use xlink:href="#icon-sousuo"></use>
			</svg>
		</template>
	</NavBar>
</template>

<script>
	import {ref, watch} from 'vue'
	import { useRouter } from 'vue-router'
	
	import NavBar from '@/components/common/navBar/NavBar.vue'

	export default {
		name: 'NavBarMain',
		components: {
			NavBar
		},
		setup() {
			const list = ref(['我的', '发现', '云村', '视频'])
			let listNum = ref(1)

			const router = useRouter()
			watch(listNum, () => {
				switch(listNum.value) {
					case 0:
						router.push('/me')
						break;
					case 1:
						router.push('/find')
						break;
					case 2:
						// router.push('/')
						break;
					case 3:
						// router.push('/')
						break;
				}
			})

			return {
				list,
				listNum
			}
		}
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

	#center {
		text-align: center;
	}

	span {
		margin: 8px;
		font-size: 17px;
	}

	.centerShow {
		font-weight: bold;
	}
</style>
