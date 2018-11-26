<template>
	<div class="all">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide" v-for="data in datalist" :key="data.id">
					<img :src="data.img_url" alt="" class="imgall">
		      </div>
		    </div>
		    <!-- Add Pagination -->
		    <div class="swiper-pagination"></div>
		 </div>	
		 <div class="information">
		 	<p>{{title}}</p>
			<p>{{description}}</p>
			<span>{{parseInt(price)/100}}</span>
			<span>元</span>
			<span>/位</span>
			<span>312元/位</span>
			<span>|</span>
			<span>随时退</span>
		 </div>
		 <div class="gap">
		 	
		 </div>
		 <div class="merchants">
		 	<p>商户信息</p>
		 	<p>{{name}}(金融街店)</p>
		 	<p>
		 		<i class="iconfont icon-weizhi">
		 			<span class="content">西城区金城坊街2号金融街购物中心二层L217-219</span>
		 		</i>
		 	</p>
		 	<p>
		 		<i class="iconfont icon-tubiao210">
		 			<span class="call">010-66220039</span>
		 		</i>
		 	</p>
		 </div>	
		 <div class="gap">
		 	
		 </div>
		 <div class="evaluation">
		 	<p>用户评价</p>
		 	<p>
		 		<img lazy="loaded" src="https://image.ricebook.com/business/22268468523068?imageView2/2/w/60/h/60|watermark/1/image/aHR0cHM6Ly9pbWFnZS5yaWNlYm9vay5jb20vd20ucG5n/dissolve/100/gravity/SouthEast/ws/.1" class="avatar" style="width: 28px; height: 28px;">
		 		<span>Tangotian</span>
		 	</p>
			<p>菜品质量5.0|就餐环境4.0|餐厅服务3.0</p>
			<p class="foot">
				<span>餐具精美</span>
				<span>干净卫生</span>
				<span>食材新鲜</span>
			</p>
			<p>

					<img lazy="loaded" src="https://image.ricebook.com/feedback/1496288873340002?imageView2/2/w/210/h/210|watermark/1/image/aHR0cHM6Ly9pbWFnZS5yaWNlYm9vay5jb20vd20ucG5n/dissolve/100/gravity/SouthEast/ws/.1" style="width: 96px; height: 96px;">
	

					<img lazy="loaded" src="https://image.ricebook.com/feedback/1496288873340001?imageView2/2/w/210/h/210|watermark/1/image/aHR0cHM6Ly9pbWFnZS5yaWNlYm9vay5jb20vd20ucG5n/dissolve/100/gravity/SouthEast/ws/.1" style="width: 96px; height: 96px;">
	

					<img lazy="loaded" src="https://image.ricebook.com/feedback/1496288873340003?imageView2/2/w/210/h/210|watermark/1/image/aHR0cHM6Ly9pbWFnZS5yaWNlYm9vay5jb20vd20ucG5n/dissolve/100/gravity/SouthEast/ws/.1" style="width: 96px; height: 96px;">
	
			</p>
		 </div>
			
	

	</div>
</template>

<script>
import axios from 'axios';
export default {
	name:'details',
  data () {
    return {
      datalist:[],
      title:'',
      description:'',
      price:'',
      name:''
    }
  },

  methods:{

  },


  mounted(){
  	axios.get('https://api.ricebook.com/product/info/product_detail.json?product_'+this.$route.params.mid).then(res=>{
  		this.datalist = res.data.basic.product_images;
  		this.title = res.data.basic.name;
  		this.description = res.data.basic.description;
  		this.price = res.data.basic.price;
  		this.name = res.data.basic.name;
  		console.log(res.data.basic)

  		this.$nextTick(()=>{
         new Swiper('.swiper-container', {
               pagination: {
                 el: '.swiper-pagination'
               },
               loop:true
         })
         
      })
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.imgall{
		width: 100%;
		height: 250px;
	}
	.swiper-container {
	      width: 100%;
	      height: 100%;
	    }
	    .swiper-slide {
	      text-align: center;
	      font-size: 18px;
	      background: #fff;

	      /* Center slide text vertically */
	      display: -webkit-box;
	      display: -ms-flexbox;
	      display: -webkit-flex;
	      display: flex;
	      -webkit-box-pack: center;
	      -ms-flex-pack: center;
	      -webkit-justify-content: center;
	      justify-content: center;
	      -webkit-box-align: center;
	      -ms-flex-align: center;
	      -webkit-align-items: center;
	      align-items: center;
	    }
	.information{
		height: 176px;
		p:nth-of-type(1){
			font-size: 22px;
			color: #686b70;
			width: 250px;
			margin-left: 19px;
			padding-top: 23px;
		}
		p:nth-of-type(2){
			font-size: 20px;
			color: #a2a5ab;
			margin-left: 19px;
			margin-top: 15px;
		}
		span:nth-of-type(1){
			font-size: 20px;
			color: #fc4444;
			margin-left: 19px;
			margin-top: 24px;
		}
		span:nth-of-type(2){
			font-size: 20px;
			color: #fc4444;
		}
		span:nth-of-type(3){
			font-size: 16px;
			color: #fc4444;
		}
		span:nth-of-type(4){
			font-size: 14px;
			color: #979ba1;
			margin-left: 8px;
			text-decoration: line-through;
		}
		span:nth-of-type(5){
			font-size: 12px;
			color: #fc4444;
			margin-left: 6px;
		}
		span:nth-of-type(6){
			font-size: 18px;
			color: #a0a4a9;
			margin-left: 6px;
		}
	}
	.gap{
		width: 100%;
		height: 6px;
		border-top: 1px solid #f6f6f6;
		border-bottom: 1px solid #f6f6f6;
		background: #f0eaea;
	}
	.merchants{
		width: 100%;
		height: 240px;
		p:nth-of-type(1){
			font-size: 20px;
			color: #40444c;
			padding-top: 24px;
			margin-left: 134px;
		};
		p:nth-of-type(2){
			font-size: 20px;
			color: #2c3038;
			padding-top: 30px;
			margin-left: 18px;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			width: 230px;
		};
		p:nth-of-type(3){
			width: 330px;
			height: 46px;
			border-top: 1px solid #f8f2f2;
			border-bottom: 1px solid #f8f2f2;
			font-size: 20px;
			color: #40444c;
			margin:0 auto;
			margin-top: 17px;
		};
		.content{
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			width: 264px;
			color: #63666b;
			font-size: 14px;
			line-height: 46px;
		}
		.call{
			color: #63666b;
			font-size: 14px;
			line-height: 46px;
		}
		p:nth-of-type(4){
			width: 330px;
			height: 46px;
			border-bottom: 1px solid #f8f2f2;
			font-size: 20px;
			color: #40444c;
			margin:0 auto;
		};

	}
	.evaluation{
		width: 100%;
		height: 329px;
		p:nth-of-type(1){
			font-size: 20px;
			color: #40444c;
			padding-top: 24px;
			margin-left: 134px;
		};
		p:nth-of-type(2){
			span{
				font-size: 14px;
				color: #1a1a1a;
				margin-left: 4px;
			}
			img{
				margin-top: 22px;
				margin-left: 18px;
			}
		}
		p:nth-of-type(3){
			font-size: 12px;
			color: #92969c;
			margin-left: 18px;
			margin-top: 10px;
		}
		p:nth-of-type(4){
			float: left;
			margin-top: 14px;
			span:nth-of-type(1){
				font-size: 16px;
				color: #92969c;
				width: 75px;
				height: 21px;
				background: #f2f3f5;
				border-radius: 5px;
				text-align: center;
				line-height: 21px;
				margin-left: 18px;
				border:1px solid #f2f3f5;
			}
			span:nth-of-type(2){
				font-size: 16px;
				color: #92969c;
				width: 75px;
				height: 21px;
				background: #f2f3f5;
				border-radius: 5px;
				text-align: center;
				line-height: 21px;
				margin-left: 9px;
			
			}
			span:nth-of-type(3){
				font-size: 16px;
				color: #92969c;
				width: 75px;
				height: 21px;
				background: #f2f3f5;
				border-radius: 5px;
				text-align: center;
				line-height: 21px;
				margin-left: 9px;
		
			}
		}
		p:nth-of-type(5){
			float: left;
			margin-top: 14px;
			img:nth-of-type(1){
				margin-left: 18px;
			}
			img:nth-of-type(2){
				margin-left: 8px;
			}
			img:nth-of-type(3){
				margin-left: 8px;
			}
		}
	}	
</style>