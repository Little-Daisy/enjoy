<template>
  <div class="all">
	  <div class="mask">
	  	<img src="https://image.ricebook.com/business/20149528823712?imageView2/1/w/220/h/146|watermark/1/image/aHR0cHM6Ly9pbWFnZS5yaWNlYm9vay5jb20vd20ucG5n/dissolve/100/gravity/SouthEast/ws/.1" alt="" class="imgheader">
	  	<h2>{{title}}</h2>
	  	<span>{{desc}}</span>
	  	<div class="navigationall">
	  		<ul class="navigation">
			<router-link :to="'/discoveryDes/goods/'+id" tag="li" activeClass="active">精品店</router-link>
			<router-link to="/discoveryDes/news" tag="li" activeClass="active">新品店</router-link>
		</ul>
	  	</div>
	  	<router-view></router-view>
	  </div>

  

  </div>
</template>

<script>
import Vue from 'vue';
import axios from "axios";

export default {
  name: 'HelloWorld',
  data () {
    return {
      title:"",
      desc:"",
	  columns:[],
	  list:[],
	  id : ''
    }
     },
   mounted(){
   		axios.get('https://api.ricebook.com/hub/home/v1/web/category_detail.json?city_id=140&category_id=' + this.$route.params.mid +'&type=choice&page=0').then(res=>{
			this.id = this.$route.params.mid;
   			this.title = res.data.group_section.title;
   			this.desc = res.data.group_section.desc;
   			
   			// this.columns = res.columns.columns;
   			// this.list = res.columns.list;
   		})
  
  }
}
</script>

<style scoped lang="scss">
.mask{
	position:relative;
	width: 100%;
	height: 120px;
	.imgheader{
			width: 100%;
			height: 128px;
			
		}
	h2{
		position: absolute;
		left: 140px;
		top: 38px;
		/*text-align: center;*/
		color: white;
		font-size: 20px;
		font-weight: bold;
		z-index: 10; 
	}
	span{
		position: absolute;
		left: 124px;
		top: 68px;
		/*text-align: center;*/
		color: white;
		font-size: 14px;
		z-index: 10; 
	}
}
	.mask:after{
		display:block;
		content:'';
		position:absolute;
		left:0;
		top:0;
		width: 100%;
		height: 125px;
		background: #434447;
		opacity: 0.8;
		z-index: 5; 
	}
	.navigation{
		display: flex;
		height: 37px;
		width: 168px;

		li{
			line-height: 40px;
			list-style: none;
			z-index: 15;
			font-size: 14px;
			color: #2c3038;
			width: 168px;
			flex: 1;
			text-align: center;
		}

		
	}
	.navigationall{
		background: #f6f6f6;

	}
	.active{
		border-bottom: 2px solid #1a1a1a;
	}
</style>