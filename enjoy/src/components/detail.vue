<template>



<div v-if='dataObj'>
   	 <div id="swiper">
        <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="pic in dataObj.product_images" >
                      <img :src="pic.img_url" width="100%" alt="">
                    </div> 
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-scrollbar"></div>
            </div>
 
    </div>
	<div class="title">
		<p>{{dataObj.name}} - {{dataObj.spec}}</p>
   		<!-- <p></p> -->
   		<p style="color:gray">{{dataObj.description}}</p>
   		<p style="color:red">￥{{dataObj.price/100}}/{{dataObj.show_entity_name}}</p> 
   		<!-- <p>{{dataObj.type}}</p> -->
   		<del style="color:gray">￥{{dataObj.origin_price/100}}</del>
	</div>

   
  
   
   
</div>
 <!--   {{datalist[0].basic.description}} -->
  

</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dataObj:null
    }
  },
  mounted(){

  	axios.get('https://api.ricebook.com/product/info/product_detail.json?product_id='+this.$route.params.mid).then(result=>{
  		this.dataObj=result.data.basic;
  		console.log(this.dataObj)

  		// console.log(result.data)
  		this.$nextTick(()=>{
  	// console.log(1)
	  	new Swiper('.swiper-container',{
	       pagination: {
	  	 	  el: '.swiper-pagination',
	  	 		},
	  	    loop: true, // 循环模式选项
	  	    autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		      },
	     	 navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	 });

  	})
  		console.log(result.data.basic)
  	});

  },

}
</script>

<style scoped>
.title{width: 100%;background: #f6f6f6;padding: 5%;box-sizing: border-box}
.title p{line-height: 30px;font-size: 20px}
</style>