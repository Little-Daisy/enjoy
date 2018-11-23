<template>
 
    <ul class="footernav">
 
    	<li @click="handleClick('home')">昕怡页</li>
    	<li @click="handleClick('discovery')">刘禹麟页</li>
    	
    	<li>谁也不做</li>
    	<li>谁也不做</li>


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

<style scoped>
.footernav{
	width: 100%;
	height: 50px;
	border-top: 1px solid black;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position:fixed;
	bottom: 0;
}
</style>