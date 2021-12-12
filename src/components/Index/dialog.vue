<!-- 首页账户保留弹窗 -->
<template>
	<div class="dialog_container">
		<div class="content_box">
			<div class="dialog_title">账户保留</div>
			<div class="desc">&nbsp&nbsp&nbsp&nbsp尊敬的ZB（中币用户），您的核心数据正在同步至ZB（中币）Global全球站，操作过程中切勿退出或长时间离开，以免造成数据损失，该过程大概需要十分钟左右
			</div>
			<van-progress :stroke-width="8" :show-pivot="false" color="#747E94" track-color="#EFEFEF" :percentage="50" />
			<input class="input_ele" type="number" placeholder="手机验证码，请输入6位数的验证码" v-model="code">
			<Button text="验证" :is_active="is_active" @buttonCallback="validation"/>
		</div>
	</div>
</template>
<style lang="less" scoped>
.dialog_container{
	background: rgba(0,0,0,.8);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	.content_box{
		padding: .6rem .4rem 0 .4rem;
		border-radius: 20px 20px 0 0;
		height: 100%;
		width: 100%;
		margin-top: .5rem;
		background:#12121A;
		.dialog_title{
			font-weight: bold;
			font-size: .48rem;
			color: #fff;
		}
		.desc{
			margin-top: .3rem;
			margin-bottom: .3rem;
			font-size: .24rem;
			color: #fff;
		}
		.input_ele{
			margin-top: 1.6rem;
			margin-bottom: .6rem;
			box-sizing: border-box;
			border-radius: .08rem;
			background: #0C0C11;
			font-size: .32rem;
			width: 100%;
			height: 1.08rem;
			padding-left: .3rem;
			padding-right: .3rem;
			color: #fff;
			border: none;
			outline: none;
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
}
</style>
<script>
	import Button from '../Common/button.vue'
	export default{
		data(){
			return{
				code:"",			//验证码
				is_active:false,	//按钮是否可点击
			}
		},
		watch:{
			code:function(n,o){
				if(n != "" && this.judgmentCode.test(this.code)){
					this.is_active = true;
				}else{
					this.is_active = false;
				}
			}
		},
		methods:{
			//点击验证
			validation(){
				if(this.code == ''){
					this.$toast('请输入6位数的验证码');
				}else if(this.code != '' && !this.judgmentCode.test(this.code)){
					this.$toast('验证码格式有误');
				}else{
					//发送请求
					let arg = {
						code:this.code
					}
					console.log(arg)
				}
			}
		},
		components:{
			Button
		}
	}
</script>

















