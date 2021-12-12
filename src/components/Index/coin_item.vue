<template>
	<div>
		<div class="list_item">
			<div class="flex_box">
				<div class="flex_left">
					<img class="item_icon" :src="item.icon_url">
					<div class="title_desc">
						<div class="title">{{item.name}}</div>
						<div class="desc">{{item.cn_name}}&nbsp{{item.cj_price}}</div>
					</div>
				</div>
				<div class="flex_right">
					<div class="price" :class="{'up_price':item.is_up == 1}">{{item.new_price}}</div>
					<div class="desc">{{item.new_price}}&nbspCNY</div>
				</div>
			</div>
			<div class="right_box">
				<div class="button_text" :class="{'up_button':item.is_up == 1}">+{{item.num}}%</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
.list_item{
	border-bottom: 1px solid hsla(0,0%,100%,0.03);
	width: 100%;
	display:flex;
	height: 1.3rem;
	padding-right: .3rem;
	.flex_box{
		flex:1;
		display:flex;
		align-items: center;
		justify-content: space-between;
		.flex_left{
			display:flex;
			align-items: center;
			.item_icon{
				width: .48rem;
				height: .48rem;
				margin-right: .16rem;
			}
			.title_desc{
				height: 1.3rem;
				display:flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-evenly;
				.title{
					font-size: .34rem;
					font-weight: 700;
					color: #fff;
				}
			}
		}
		.flex_right{
			height: 1.3rem;
			display:flex;
			flex-direction: column;
			align-items: flex-end;
			justify-content: space-evenly;
			.price{
				font-size: .36rem;
				color: #28bc81;
				font-weight: 700;
			}
			.up_price{
				color: #E22034;
			}
		}
		.desc{
			font-size: .24rem;
			color: #7e7e8a;
		}
	}
	.right_box{
		width: 2.2rem;
		display:flex;
		align-items: center;
		justify-content: flex-end;
		.button_text{
			border-radius: 0.05rem;
			background:#28bc81;
			width: 1.6rem;
			text-align: center;
			height: .68rem;
			line-height: .68rem;
			color: #fff;
			font-size: .32rem;
			font-weight: 500;
		}
		.up_button{
			background:#E22034;
		}
	}
}
</style>
<script>
	export default{
		props:{
			item:{
				type:Object,
				default:{}
			}
		}
	}
</script>