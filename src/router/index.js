import Vue from 'vue'
import Router from 'vue-router'

const home = resolve=>System.import('@/pages/home')							//导航页
const index = resolve=>System.import('@/pages/Index/index');				//首页
const trading = resolve=>System.import('@/pages/Trading/trading');			//交易
const fait = resolve=>System.import('@/pages/Fait/fait');					//法币
const financial = resolve=>System.import('@/pages/Financial/financial');	//财务
const info = resolve=>System.import('@/pages/Info/info');					//信息

Vue.use(Router)

export default new Router({
	routes: [
	{
    path: '/home',
    component: home,
    children:[
      { path: '/index',name:"index", component: index},
      { path: '/trading',name:"trading", component: trading},
      { path: '/fait',name:"fait", component: fait},
      { path: '/financial', name:"financial",component: financial},
      { path: '/info', name:"info",component: info}
    ]
  },
	]
})
