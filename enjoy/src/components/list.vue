<template>
  <div class="list">
   <ul  v-infinite-scroll="loadMore"  
  infinite-scroll-disabled="loading"
  infinite-scroll-immediate-check="false"
  infinite-scroll-distance="10">


	   <li v-for="data in datalist" class="list-des clear" @click="handleClick(data.product_id)">
	   		<img :src="data.product_image" width="40%"alt="" class="l">
	   		<div class="list-des-right l">

	   			
	   			<p>{{data.name}}</p>
	   			<p style="color:red">{{data.price/100}}/	{{data.show_entity_name}}</p>
	   			<del style="color:gray">￥{{data.original_price/100}}</del>
	   		</div>

	   </li>
   </ul>
  

  </div>
</template>

<script>
import axios from 'axios';
import { Indicator } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
    datalist:[],
      msg: 'Welcome to Your Vue.js App',
      current:0,
      loading:false,
      total:6
    }
  },
  mounted(){
  	 Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });

  	console.log(this.$route.params.mid)
  	axios.get('https://api.ricebook.com/4/tab/category_product_list.json?category_id='+this.$route.params.mid+'&sort=1&from_id=0&city_id=140&page=0').then(result=>{
  		this.datalist=result.data;
  		console.log(result.data);
  		Indicator.close();
  	})
  },
  methods:{
  	handleClick(id){
  		console.log(id)
  		this.$router.push('/detail/'+id)
  	},
  	loadMore(){

  			
  		this.current++;
  		if(this.current>this.total){
        this.loading = true
        return ;
      } Indicator.open({
  		    text: '加载中...',
  		    spinnerType: 'fading-circle'
  		  });
        axios.get('https://api.ricebook.com/4/tab/category_product_list.json?category_id='+this.$route.params.mid+'&sort=1&from_id=0&city_id=140&page='+this.current).then(res=>{
        console.log(res.data);

        this.datalist = [...this.datalist,...res.data]; //合并数组
        Indicator.close();

      })
  		// console.log('1111');
  	
  	}
  }
}
</script>

<style scoped>
/* .list{} */
.l{float:left;}
.r{float:right;}
.clear::after{content: "";display: block;clear: both}
.list-des{width: 100%;border-bottom: 1px solid #f6f6f6;padding: 20px;box-sizing: border-box}
.list-des-right{width: 50%;margin-left: 3%}
</style>