<template>
 
    <ul class="footernav">
 
      <li @click="handleClick('home')"><i class="iconfont icon-zhuye"></i></li>
      <li @click="handleClick('discovery')"><i class="iconfont icon-iconset0394"></i></li>
      
      <li><i class="iconfont icon-liwu"></i></li>
      <li><i class="iconfont icon-circle"></i></li>


    </ul>

</template>

<script>
import bus from '../bus.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleClick(path){
      this.$router.push('/'+path);
      console.log(location.hash)
      bus.$emit('fzh',location.hash)
    }
  }
}
</script>

<style scoped lang="scss">
.footernav{
  width: 100%;
  height: 50px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position:fixed;
  bottom: 0;
  i{
    font-size:22px;
    color:#b3b3b3;
  }
  

}
</style>