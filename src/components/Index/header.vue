<template>
	<div>
		<div class="header_box">
			<div class="logo_title">
				<img class="coin_logo" src="../../static/coin_logo.png">
				<div class="title">中币</div>
			</div>
			<div class="icons">
				<img class="search_icon" src="../../static/search_icon.png">
				<img class="menu_icon" src="../../static/menu_icon.png">
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.header_box{
	display: flex;
	align-items: center;
	justify-content: space-between;
	.logo_title{
		display:flex;
		align-items: center;
		.coin_logo{
			width: .56rem;
			height: .56rem;
		}
		.title{
			font-size: .36rem;
			font-weight: 500;
			margin-left: 0.1rem;
			color: #fff;
		}
	}
	.icons{
		display:flex;
		align-items: center;
		.search_icon{
			margin-right: .16rem;
		}
		.menu_icon{
			width: .48rem;
			height: .48rem;
			color: #fff;
		}
	}
}
</style>
<script>
	export default{

	}
</script>