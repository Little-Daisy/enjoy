import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import home from'../components/home.vue'
import category from'../components/category.vue'
import list from'../components/list.vue'
import detail from'../components/detail.vue'
import discovery from'../components/discovery.vue'
import discoveryDes from'../components/discoveryDes.vue'
import login from'../components/login.vue'
Vue.use(Router)
import Goods from '../components/goods.vue'
import News from '../components/news.vue'
import Details from '../components/details.vue'

export default new Router({
  routes: [
 	{
    	path:"/home",
    	component:home
    },
    {
    	path:"/category",
    	component:category
    },
    {
        path:"/list",
        component:list,
        children:[
            {
                path:":mid",
                component:list
            }
        ]
    },
    {
    	path:"/detail",
    	component:detail,
        children:[
            {
                path:":mid",
                component:detail
            }
        ]
    },
    {
    	path:"/discovery",
    	component:discovery
    },
    {
    	path:"/discoveryDes",
    	component:discoveryDes,
        children:[
        {
            path:"goods",
            component:Goods
        },
        {
            path:"goods/:mid",
            component:Goods
        },
        {
            path:"news",
            component:News
        },
      
        ]
    },
    {
        path:"/login",
        component:login
    },
    {
        path:"/details/:mid",
        component:Details
    },
    {
      path: '/',
      component: home
    },
    
  ]
})
