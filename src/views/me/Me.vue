<template>
	<div class="bg">
		<NavBar>
			<template v-slot:left>
				<svg @click="$router.go(-1)" class="icon" aria-hidden="true">
					<use xlink:href="#icon-fanhui"></use>
				</svg>
			</template>
			<template v-slot:center></template>
			<template v-slot:right>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-gengduo1"></use>
				</svg>
			</template>
		</NavBar>
		<!-- 背景图 -->
		<img class="imgBg" :src="imgBackground" />
		
		<Scroll class="content">
			<div>
				<!-- 背景图 -->
				<img class="imgBg1" :src="imgBackground" />
				<div class="userDetail">
					<!-- 用户信息1 -->
					<div class="userDetail_1">
						<!-- 头像 -->
						<div class="imgFace">
							<img class="imgFace1" :src="imgFace" />
						</div>
						<!-- 名字 -->
						<div class="userName">{{user.userName}}</div>
						<div class="user_2">
							<span>{{newFollows}} 关注</span>
							<span>{{followeds}} 粉丝</span>
							<span>Lv.{{level}}</span>
						</div>
						<div class="user_3">
							<span>四川 乐山</span>
							<span>村龄{{parseInt(createDays/365)}}年</span>
						</div>
						<div class="user_4">
							<van-button class="editor" round size="small" @click="clickEditor">编辑资料</van-button>
							<span>
								<svg @click="isIconChange = !isIconChange" class="icon1" :class="{isIconChange: isIconChange}" aria-hidden="true">
									<use xlink:href="#icon-xiajiantou-copy"></use>
								</svg>
							</span>
						</div>
					</div>
					
					<!-- 用户信息2 -->
					<div class="userDetail_2">
						<!-- 选择主页 -->
						<div class="userDetail_2_1">
							<span v-for="(item,index) in zyDtBk">{{item}}</span>
						</div>
						<!-- 基本信息 -->
						<div class="userDetail_2_2">
							<div class="h1">
								<span>基本信息</span>
								<span>村民证</span>
							</div>
							<div class="detailMe detailMe_1">村龄: {{parseInt(createDays/365)}}年 ({{2018}}年{{12}}月注册)</div>
							<div class="detailMe">地区: 四川 乐山</div>
						</div>
						<!-- 音乐品味 -->
						<div class="musciTaste">
							<div class="h1">音乐品位</div>
							<!-- 第一行 -->
							<MusicMeChild>
								<template v-slot:left><img class="imgSmall" :src="playList[0].coverImgUrl" /></template>
								<template v-slot:center_1>听歌排行</template>
								<template v-slot:center_2>累计听歌{{5337}}首</template>
							</MusicMeChild>
							<!-- 第二行 -->
							<MusicMeChild>
								<template v-slot:left><img src="../../assets/weibo.png" /></template>
								<template v-slot:center_1>我喜欢的音乐</template>
								<template v-slot:center_2>{{227}}首, 播放{{6983}}次</template>
							</MusicMeChild>
							<MusicMeChild>
								<template v-slot:left><img src="../../assets/weibo.png" /></template>
								<template v-slot:center_1>我喜欢的音乐</template>
								<template v-slot:center_2>{{227}}首, 播放{{6983}}次</template>
							</MusicMeChild><MusicMeChild>
								<template v-slot:left><img src="../../assets/weibo.png" /></template>
								<template v-slot:center_1>我喜欢的音乐</template>
								<template v-slot:center_2>{{227}}首, 播放{{6983}}次</template>
							</MusicMeChild><MusicMeChild>
								<template v-slot:left><img src="../../assets/weibo.png" /></template>
								<template v-slot:center_1>我喜欢的音乐</template>
								<template v-slot:center_2>{{227}}首, 播放{{6983}}次</template>
							</MusicMeChild><MusicMeChild>
								<template v-slot:left><img src="../../assets/weibo.png" /></template>
								<template v-slot:center_1>我喜欢的音乐</template>
								<template v-slot:center_2>{{227}}首, 播放{{6983}}次</template>
							</MusicMeChild>
						</div>
					</div>
				</div>
			</div>
		</Scroll>
	</div>
</template>

<script>
	import { reactive, ref, toRefs, nextTick } from 'vue'
	import { mapState,useStore } from 'vuex'
	import { getUserDetail, getPlaylist } from '@/network/request.js';
	import { Button } from 'vant'
	
	import Scroll from '@/components/common/scroll/Scroll.vue'
	import NavBar from '@/components/common/navBar/NavBar.vue'
	import MusicMeChild from '@/components/content/musicMeChild/MusicMeChild.vue'
	
	export default {
	  name: 'Me',
		components: {
			Scroll,
			NavBar,
			MusicMeChild,
			[Button.name]: Button
		},
		setup() {
			const userDetail = reactive({
				imgBackground: null,	//背景图片
				imgFace: null,	//头像
				newFollows: null,	//关注
				followeds: null,	//粉丝
				level: null,	//等级
				createDays: null, //创建有多少天
				playList: [{coverImgUrl:''}],	//用户歌单
			})
			
			const store = useStore()
			getUserDetail(store.state.user.userId).then(res => {
				console.log(res.data)
				const userS = res.data.profile
				userDetail.imgBackground = userS.backgroundUrl
				userDetail.imgFace = userS.avatarUrl
				userDetail.newFollows = userS.newFollows
				userDetail.followeds = userS.followeds
				userDetail.level = res.data.level
				userDetail.createDays = res.data.createDays
			})
			getPlaylist(store.state.user.userId).then(res => {
				nextTick(() => {
					userDetail.playList = res.data.playlist
					console.log(userDetail.playList)
				})
			})
			
			//点击编辑资料
			function clickEditor() {
				
			}
			
			const isIconChange = ref(false)
			
			const zyDtBk = ['主页','动态','播客']
			
			return {
				...toRefs(userDetail),
				clickEditor,
				isIconChange,
				zyDtBk
			}
		},
		computed: {
			...mapState([
				'user'
			])
		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
		height: calc(100vh - 44px);
	}
	
	.icon {
		width: 25px;
		height: 25px;
		padding-top: 9px;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		fill: #ffffff;	/* 改其颜色 */
	}
	
	.icon1 {
		margin-left: 8px;
		width: 15px;
		height: 15px;
		padding: 4px;
		vertical-align: -0.15em;
		overflow: hidden;
		border: 1px solid #999999;
		border-radius: 100%;
		transition: all 0.3s;	/* 旋转时间1s */
	}
	
	.isIconChange {
		transform: rotate(180deg);	/* 旋转图片 */
	}
	
	.bg {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 10;
		/* 层级10 */
	}
	
	.h1 {
		font-size: 17px;
		font-weight: 500;
		padding: 10px 0 8px 10px;
	}
	
	.imgSmall {
		width: 50px;
		height: auto;
	}
	
	.imgBg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		z-index: -1;
	}
	
	.imgBg1 {
		position: absolute;
		top: -44px;
		left: 0;
		width: 100%;
		height: auto;
		z-index: -1;
	}
	
	.imgFace {
		text-align: center;
		width: 100%;
		height: 35px;
	}
	
	.imgFace1 {
		position: relative;
		top: -34px;
		width: 65px;
		height: auto;
		border-radius: 100%;	/* 圆角 */
	}
	
	.userDetail {
		width: 100%;
		height: calc(100vh + 300px);
		position: relative;
		top: 180px;
		margin-left: auto;
		margin-right: auto;
		background-color: #f1f1f1;
	}
	
	.userDetail_1 {
		position: relative;
		top: -15px;
		width: auto;
		height: auto;
		margin: 0 15px 0 15px;
		background-color: #FFFFFF;
		border-radius: 10px;	/* 圆角 */
	}
	
	.userName {
		text-align: center;
		font-size: 18px;
		font-weight: 500;
	}
	
	.user_2 {
		text-align: center;
		color: #999999;
		margin-top: 6px;
	}
	
	.user_2 span {
		padding: 0 10px 0 10px;
		font-size: 13px;
	}
	
	.user_3 {
		text-align: center;
		margin-top: 10px;
	}
	
	.user_3 span {
		margin: 0 10px 0 10px;
		padding: 2px 7px 1px 7px;
		font-size: 13px;
		font-weight: 300;
		border: 0.1px solid #999999;
		border-radius: 6px;	/* 圆角 */
	}
	
	.user_4 {
		display: flex;
		justify-content: center;
		margin-top: 12px;
		padding-bottom: 14px;
	}
	
	.user_4 span {
		font-size: 14px;
		font-weight: 600;
	}
	
	.editor {
		border: 0.1px solid #999999;
		--van-button-small-height: 28px;
	}
	
	.userDetail_2 {
		
	}
	
	.userDetail_2_1 {
		display: flex;
		justify-content: center;
	}
	
	.userDetail_2_1 span {
		flex: 1;
		text-align: center;
		font-size: 14px;
		color: #818181;
	}
	
	.isBold {
		font-weight: 400;
		color: #000000;
	}
	
	.userDetail_2_2 {
		margin: 15px 15px 15px 15px;
		background-color: #FFFFFF;
		border-radius: 6px;	/* 圆角 */
	}
	
	.musciTaste {
		margin: 15px;
		background-color: #FFFFFF;
		border-radius: 6px;	/* 圆角 */
	}
	
	.detailMe {
		padding: 0 0 10px 10px;
		color: #999999;
	}
	
	.detailMe_1 {
		padding-top: 8px;
		padding-bottom: 4px;
	}
</style>
