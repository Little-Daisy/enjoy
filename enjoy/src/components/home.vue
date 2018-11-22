<template>
  <div id="home">
  	<div class="load"
   	 v-infinite-scroll="loadMore"
  	 infinite-scroll-disabled="loading"
  	 infinite-scroll-immediate-check= "false"
  	 infinite-scroll-distance="0">
  		<div class="container" v-for="item in itemlist">
  		  <div class="title">
  		     <h2>{{item.group_section.title}}</h2>
  		     <p>{{item.group_section.desc}}</p>
  		  </div>
  		  <div class="content">
  		      <ul>
  		        <li v-for="data in item.tabs">   
  		          <img :src="data.url" alt="">
  		          <h3>{{data.title}}</h3>
  		          <p>{{data.desc}}</p>
  		        </li>
  		      </ul>
  		  </div>
  	</div>
    

   
    </div>
     <footernav></footernav> 
  </div>
</template>

<script>
  import footernav from './footernav.vue'
  import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      title:'',
      desc:'',
      itemlist:[],
      current:0
    }
  },
  components:{
    footernav
  },
   methods:{
  	loadMore(){
  		this.current++;
  		axios.get(`/hub/home/v1/web/week_choice.json?city_id=140&page=${this.current}`).then(res=>{
  			this.itemlist = [...this.itemlist,...res.data]
  		})

  	}
  },
  mounted(){
       axios.get(`/hub/home/v1/web/week_choice.json?city_id=140&page=0`).then(res=>{

       	  this.itemlist = res.data
          // this.title = res.data[this.current].group_section.title;
          // this.desc = res.data[this.current].group_section.desc;
          // this.datalist = res.data[this.current].tabs;
          // this.current++;
          
      })
  }

}
</script>

<style scoped lang="scss">
  .container{
    margin-left: 20px;
    margin-right: 20px;
  }
  .title{
    margin-top: 30px;
    h2{
      font-size: 20px;
      color: #2c3038;
    }
    
    p{
      font-size:8px;
      color:#ff3939;
    }
  }
  .content{
    ul{
      li{
        margin-top: 20px;
        border-bottom: 1px solid #f0f0f0;
        img{
           width:100%;
           display: block;
        }
        h3{
          margin-top: 18px;
          font-size: 16px;
          font-weight: normal;
          color: #2c3038;
        }
        p{
          font-size: 10px;
          color:#92969c;
          line-height:26px;
          margin-bottom: 5px;
        }
      }
    }
    
   
  }
</style>