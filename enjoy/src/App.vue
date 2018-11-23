<template>
  <div id="app">
   <navbar>
    <div @click="handleClick" >{{title}}</div> 
   </navbar>
   <section>
     
      <router-view></router-view>
     
   </section>
  </div>
</template>

<script>
  import bus from './bus.js';
  import navbar from './components/navbar.vue';
  export default {
    name: 'App',
    data(){
      return {
        // path:'/category',
        title:'分类',
        path:''
      }
    },
    mounted(){
      this.path=location.hash;
      bus.$on('fzh',(data)=>{
        this.path=data;
        console.log(data)
        if(data!=='#/home'&&this.path!=='#/'){
           this.title='首页';
           console.log(this.title)
        }else{
           this.title='分类';
        }
      })
    },
    components:{
      navbar
    },
    methods:{
      handleClick(){
        console.log(this.path)
      if(this.path!=='#/home'&&this.path!=='#/'){
        this.title='分类';
        this.path='#/home'
        this.$router.push('/home');
      }else{
        this.title='首页';
        this.path='#/category'
        this.$router.push('/category')
         
      }
    }}}

</script>

<style>

</style>
