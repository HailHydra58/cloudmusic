<template>
	<!-- 上半部分 -->
	<div id="details">
		<div class="details_1">
			<img :src="playList.coverImgUrl" />
			<div class="details_1_1">
				<div id="details_1_1_1">
					<!-- 歌单名字 -->
					<span class="musicListName">{{playList.name}}</span>
					<!-- 上传用户头像和名字 -->
					<div class="user">
						<!-- 加下面的图要报错,应该是图片来的太慢 -->
						<img :src="creator.avatarUrl" />
						<span>{{creator.nickname}}</span>
					</div>
				</div>
				<!-- 歌单详情介绍 -->
				<div class="introduce">
					{{playList.description}}
				</div>
			</div>
		</div>
	</div>
	<!-- 下半部分 -->
	<div class="details2">
		<div>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-pinglun-copy"></use>
			</svg>
			<div>{{playList.commentCount}}</div>
		</div>
		<div>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-fenxiang-copy"></use>
			</svg>
			<div>{{playList.shareCount}}</div>
		</div>
		<div>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-xiazai-copy"></use>
			</svg>
			<div>下载</div>
		</div>
		<div>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-duoxuananniu-copy"></use>
			</svg>
			<div>多选</div>
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'SongDetails',
		props: {
			playList: {
				type: Object,
				default: {}
			},
			creator: {
				type: Object,
				default: {}
			},
		}
	}
</script>
<style scoped>
	#details {
		margin-top: 30px;
		padding: 20px;
		padding-top: 5px;
	}
	
	.details_1 img {
		width: 105px;
		height: 105px;
	}
	
	.details_1 {
		display: flex;
	}
	
	.details_1_1 {
		display: flex;
		flex-direction: column;	/* flex布局向下 */
		margin-left: 20px;
		color: white;
	}
	
	#details_1_1_1 {
		height: 75px;
	}
	
	.musicListName {
		height: 40px;
		font-size: 16px;
		font-weight: bold;
	}
	
	.user {
		margin-top: 5px;
	}
	
	.user img {
		width: 25px;
		height: 25px;
		border-radius: 100%;	/* 使其变⚪ */
	}
	
	.user span {
		position: absolute;
		margin-top: 5px;
		margin-left: 10px;
		font-size: 14px;
		color: #e6e6e6;
	}
	
	.introduce {
		flex: 1;
		
		color: #989898;
		/* 下面4个属性关于文字多出X行出现... */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	.details2 {
		display: flex;
	}
	
	.details2 div {
		flex: 1;
		margin-bottom: 8px;
		text-align: center;
		color: #e6e6e6;
	}
	
	.icon {
		width: 25px;
		height: 25px;
		vertical-align: -0.15em;
		overflow: hidden;
	}
</style>
