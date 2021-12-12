<template>
	<div>
		<div class="button_box" :class="{'active_button':is_active}" @click="buttonClick">{{text}}</div>
	</div>
</template>
<style lang="less" scoped>
.button_box{
	background:#7e7e8a;
	color: #ffffff;
	width: 100%;
	text-align: center;
	height: .92rem;
	line-height: .92rem;
	font-size: .32rem;
	font-weight: 500;
	border-radius: .08rem;
}
.active_button{
	background:#E22034;
}	
</style>
<script>
	export default{
		props:{
			//按钮文字
			text:{
				type:String,
				default:''
			},
			//是否高亮
			is_active:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			//按钮点击
			buttonClick(){
				this.$emit('buttonCallback');
			}
		}
	}
</script>