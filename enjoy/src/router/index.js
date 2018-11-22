import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import home from'../components/home.vue'
import list from'../components/list.vue'
import detail from'../components/detail.vue'
import discovery from'../components/discovery.vue'
import discoveryDes from'../components/discoveryDes.vue'
Vue.use(Router)

export default new Router({
  routes: [
 	{
    	path:"/home",
    	component:home
    },
    {
    	path:"/list",
    	component:list
    },
    {
    	path:"/detail",
    	component:detail
    },
    {
    	path:"/discovery",
    	component:discovery
    },
    {
    	path:"/discoveryDes",
    	component:discoveryDes
    },
    {
      path: '/',
      component: home
    }
  ]
})
