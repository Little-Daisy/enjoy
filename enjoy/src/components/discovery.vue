<template>
  <div class="box">
    <div class="header">
      <p class="recommendation">{{title}}</p>
      <p class="guide">{{desc}}</p>
      <p style="display: none">{{asd}}</p>
      <span class="molecular">{{current}}</span>
      <span class="separator">/</span>
      <span class="denominator">8</span>
    </div>

    <div class="swiper-container">
        <ul class="swiper-wrapper">
         <li  class="swiper-slide one" v-for="item,index in datalist" :key="item.id" >
            <div class="figure"><img :src="item.url" alt=""></div>
             <p class="courier">{{item.tag}}</p>
             <p class="top">{{item.title}}</p>
             <p class="sell">{{item.desc}}</p>
         </li>
       </ul>
    </div>
      
    <div class="swiper-container2 navalll">
      <ul class="swiper-wrapper navall">
         <li  class="swiper-slide nav" v-for="nav in navlist" :key="nav.enjoy_url" @click="handleClick(nav.enjoy_url.split('category_id=')[1])">
             <p class="title">{{nav.title}}</p>
             <p class="goods">{{nav.desc}}</p>
         </li>
       </ul>
    </div>
    
   <div class="swiper-containers">
       <div class="swiper-wrapper three">
          <div class="swiper-slide" v-for="section in sectionlist" :key="section.id">
            <div class="listimg"><img :src="section.url" alt=""></div>
            <p class="list">{{section.title}}</p>
          </div>

       </div>
       <!-- Add Pagination -->
       <div class="swiper-paginations"></div>
    </div>
    <div class="commodity total" v-for="total in totallist" :key="total.id" >
      <ul>
        <li class="qwer">
          <span>{{total.data.group_section.title}}</span>
          <span>{{total.data.group_section.desc}}</span>
          <span>{{total.data.group_section.enjoy_url_text}}</span>
        </li>
      </ul>
      <ul class="imglist">
        <li v-for="pic in total.data.tabs" :key="pic.id" class="imgimg">
          <img :src="pic.url" alt="" class="imgsss">
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import footernav from './footernav.vue'
import axios from "axios";
import Vue from 'vue'
// import Swiper from "swiper";
var bus = new Vue()

export default {
  name: 'discovery',
  data () {
    return {
      desc:'',
      title:'',
      datalist:[],
      navlist:[],
      sectionlist:[],
      totallist:[],
      current:1

    }
  },
  components:{
    footernav

  },
  methods:{
    handleClick(id){
        this.$router.push('/discoveryDes/goods/'+id)
        console.log('/discoveryDes/goods/'+id)

    }
  },
  computed:{
    asd(){
      bus.$on('zzz',(data)=>{
        console.log(data)
        this.current = data + 1
        return data
      });

    }
  },
  mounted(){
    

    axios.get('/hub/home/v1/web/explore.json?city_id=140').then(res=>{
      
      // console.log(res.data[this.current].data.group_section.desc);
    
      this.desc = res.data[0].data.group_section.desc;
      this.title = res.data[0].data.group_section.title;
      this.datalist = res.data[0].data.tabs;
      this.navlist = res.data[1].data.tabs;
      this.sectionlist = res.data[2].data.tabs;
      this.totallist = res.data.slice(3);


      

      console.log(res.data[3].data.group_section.title);

      console.log(res.data[1].data.tabs);

      this.$nextTick(()=>{
         new Swiper('.swiper-container', {
               pagination: {
                 el: '.swiper-pagination',
               },
             });
         new Swiper('.swiper-container2', {
              slidesPerView: 'auto',
              centeredSlides: true,
              pagination: {
                clickable: true,
              },
            });
           new Swiper('.swiper-containers',{
                pagination: {
                  el: '.swiper-paginations',
                },
                loop: true, // 循环模式选项
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
            });

      })
    })
  }
}
</script>

<style scoped lang="scss">
    body,h1,h2,h3,h4,h5,h6,p,a,img,input,ul,li,ol,dl,dt,dd,figure,figcaption{ padding:0; margin:0;}
    ul,ol{ list-style:none;}
    img{ display:block; width:100%;}
    input{ outline:none}

    body{ font-size:16px; font-family:"微软雅黑"; color:#333;}

    a{ text-decoration:none; color:#909090;}

    header,footer,nav,section,aside,article,main,figure,figcaption{ display:block;}

    *{ box-sizing:border-box;}

    html,body{width:100%; height:100%;}
    .box{
      overflow-x:hidden;
    }
  .header{
    height: 82px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    .recommendation{
      font-size: 21px; 
      color: #191919;
      font-weight: bold;
      position: absolute;
      left: 18px;
      top: 27px;
    }
    .guide{
      font-size: 12px;
      color: #92969c;
      position: absolute;
      left: 18px;
      top: 53px;
    }
    .molecular{
      font-size: 20px;
      color: #1a1a1a;
      position: absolute;
      top: 34px;
      right: 29px;
    }
    .separator{
      font-size: 10px;
      color: #b2b2b2;
      position: absolute;
      top: 40px;
      right: 22px;
    }
    .denominator{
      font-size: 8px;
      color: #b2b2b2;
      position: absolute;
      top: 41px;
      right: 16px;
    }
  }


 .swiper-container {
      width: 100%;
      height:100%;
    }
    .swiper-slide {
   
      font-size: 18px;
      background: #fff;
      height: 270px;

      /* Center slide text vertically */
/*      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;*/
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .navalll{
      width:90%;
      margin-left:-70px;
    }
    .navall{
      width: 100%;
      height: 150px;
      position: relative;
    }
    .nav{
      background:url(https://image.ricebook.com/business/20373785523424?imageView2/2/w/325) no-repeat;
      background-size: 160px 90px;
     /* width: 100%;*/
      width: 150px;
      height: 94px;
      display: block;
      margin-right:10px;
      
      margin-top: 20px;
      margin-bottom: 20px;
    /*  margin-left: -93px;*/

    }
    .figure img{
      width: 90%;
      height: 190px;
      margin: 0 auto;
      display: block;
/*      border-bottom: 1px solid #f7f7f7;
      padding-top:10px;*/
    }
    .courier{
      font-size: 12px;
      color: #ff3939;
   /*   margin-left: 18px;
      margin-top: 15px;*/
      position: absolute;
      left: 18px;
      top: 200px;
    }
    .top{
      font-size: 16px;
      color: #121212;
      font-weight: bold;
   /*   margin-left: 18px;
      margin-top: 9px;*/
      position: absolute;
      left: 18px;
      top: 218px;
    } 
    .sell{
      font-size: 12px;
      color: #a6a6a6;
  /*    margin-left: 18px;
      margin-top: 7px;*/
      position: absolute;
      left: 18px;
      top: 241px;
    }
    .one{
      height: 280px;
    }

    .three{
      height: 300px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
   
    .listimg{
      width: 90%;
      height: 190px;
      margin:0 auto;
    }

    .list{
      margin-left: 18px;
      font-size: 16px;
      color: #9a9a9a;
    }

    .title{
      font-size: 16px;
      color: white;
      position: absolute;
      top: 30px;
    }

    .goods{
      font-size: 12px;
      color: white;
      position: absolute;
      top: 50px;
    }
    
    .qwer{
      width: 100%;
      height: 100%;
      position: relative;
    }
    .total{
      width: 90%;
      height: 200px;
      margin:0 auto;
      border-top:1px solid #f4f4f4;
      span:nth-of-type(1){
        font-size:22px;
        color:#2c3038; 
        font-weight: bold;
        position: absolute;
        top: 28px;
      }
      span:nth-of-type(2){
        font-size:10px;
        color:#9ea2a7; 
        position: absolute;
        top: 58px;
      }
      span:nth-of-type(3){
        font-size:14px;
        color:#ff5555; 
        position: absolute;
        top: 32px;
        right: 0px;
      }
    }
    .imglist{
      display: flex;
      justify-content :space-between;
      .imgimg{
        width: 33%;
        position: relative;
     }
    }
    .imgsss{
      position: absolute;
      top: 94px;
    }
/*.swiper-containers{
    .swiper-pagination-bullets{
      margin-left:157px;
      margin-top: -56px;


    }
}*/
    .swiper-paginations{
      margin-left:157px;
      margin-top: -56px;
    }
  
</style> 