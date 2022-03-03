<template>
	<div class="padding">
		<div><slot name="left"></slot></div>
		<div class="padding_1">
			<span><slot name="center_1"></slot></span>
			<br />
			<span class="paddTop"><slot name="center_2"></slot></span>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'MusicMeChild',
	}
</script>

<style scoped>
	.padding {
		display: flex;
		padding-left: 10px;
	}
	
	.padding_1 {
		padding-left: 8px;
		margin-top: 7px;
		margin-bottom: 5px;
		font-size: 13px;
	}
	
	.paddTop {
		position: relative;
		top: 4px;
		color: #969696;
	}
</style>
