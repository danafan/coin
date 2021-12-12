<template>
	<div class="container">
		<div class="tabContent">
			<router-view></router-view>
		</div>
		<div class="tab">
			<van-tabbar route v-model="active" active-color="#E22034" inactive-color="#7e7e8a">
				<van-tabbar-item replace :to="item.path" v-for="item in tab_list">
					<span>{{item.name}}</span>
					<template #icon="props">
						<img :src="props.active ? item.active_img : item.inactive_image" />
					</template>
				</van-tabbar-item>
			</van-tabbar>
		</div>		
	</div>
</template>
<style lang="less" scoped>
.container{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.tabContent{
		background: #12121A;
		flex:1;
	}
	.tab{
		.van-tabbar{
			background: #12121A!important;
		}
		.van-tabbar-item--active{
			background: #12121A!important;
		}
		.van-hairline--top-bottom::after{
			border:#12121A!important;
			border-top: 1px solid hsla(0,0%,100%,0.1)!important;
		}
	}
}
</style>
<script>
	export default{
		data(){
			return{
				active:0,
				tab_list:[{
					path:'/index',
					name:'首页',
					active_img:require('../static/active_index.png'),
					inactive_image:require('../static/index.png'),
				},{
					path:'/trading',
					name:'交易',
					active_img:require('../static/active_trading.png'),
					inactive_image:require('../static/trading.png'),
				},{
					path:'/fait',
					name:'法币',
					active_img:require('../static/active_fait.png'),
					inactive_image:require('../static/fait.png'),
				},{
					path:'/financial',
					name:'财务',
					active_img:require('../static/active_financial.png'),
					inactive_image:require('../static/financial.png'),
				},{
					path:'/info',
					name:'信息',
					active_img:require('../static/active_info.png'),
					inactive_image:require('../static/info.png'),
				}]
			}
		}
	}
</script>










