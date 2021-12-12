import Vue from 'vue'
import App from './App'
import router from './router'
import '@/utils/rem'
import { Tabbar, TabbarItem,Toast,Progress } from 'vant';
Vue.use(Tabbar).use(TabbarItem).use(Toast).use(Progress);

Vue.prototype.judgmentPhone = /^1[3456789]\d{9}$/;		//手机号正则
Vue.prototype.judgmentCode = /^\d{6}$/;					//验证码正则
// Vue.prototype.judgmentCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;	//身份证号正则
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
