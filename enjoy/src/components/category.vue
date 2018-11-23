<template>
  <div class="cate-list">
<!-- 	<table v-for="data in datalist"  class="cate-section">
		<caption>{{data.name}} </caption>
		<tbody>
			<tr>
				<td v-for="datades in data.sub_category_list">{{datades.name}}</td>
			</tr>

		</tbody>
			
	</table> -->
	<ul v-for="data in datalist"  class="cate-section">
		<li style="width: 100%">{{data.name}}</li>
		<li v-for="datades in data.sub_category_list" @click="handleClick(datades.id)"> {{datades.name}}</li>
	<!-- 	https://api.ricebook.com/4/tab/category_product_list.json?category_id=5&sort=1&from_id=0&city_id=140&page=0




    https://api.ricebook.com/4/tab/sub_category.json?category_id=6&city_id=140&from_id=0

    https://api.ricebook.com/4/tab/sub_category.json?category_id=14&city_id=140&from_id=0 -->
	</ul>
  
  

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      datalist:[]
    }
  },
  mounted(){
  	axios.get("/cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9MTQwJmlzX25ld19sb2NhbD1mYWxzZSZtZDU9Yzg3ZGRmYjI4N2UyNWE1NGY5NDVhZGVhYmFiMWJlYzImMjAxODExMjEwODAw.json").then(res=>{this.datalist=res.data;
  		console.log(res.data)
  	})
  },
  methods:{
    handleClick(id){
      console.log(id);
      this.$router.push('/list/'+id)
    }
  }

}
</script>

<style scoped>

ul{display: flex;flex-wrap: wrap;align-items: center;background: #f6f6f6}
ul li:first-child{background: #f6f6f6}
ul li{width: 33.3%;background: white;border:1px solid #f6f6f6;box-sizing: border-box;text-align: center;height: 40px;line-height: 40px}
/* .cate-list{width: 100%;background: #f6f6f6}
.cate-list li{width: 100%}
.cate-section{width: 100%;background: white;display: inline-block}
.cate-section li{width: 33.3%;} */
</style>