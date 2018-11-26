<template>
  <div id="home">
    <ul class="all">
      <li v-for="data in datalist" class="bar" @click="handleClick(data.data.enjoy_url.split('?')[1])">
        <img :src="data.data.url" alt="">
        <p>{{data.data.title}}</p>
        <p>{{data.data.desc}}</p>
        <span>{{data.data.price}}</span>
        <span>元</span>
        <span>/</span>
        <span>位</span>
        <span>{{data.data.original_price}}</span>
      </li>
    </ul>
    <div class="logo">
      <img src="data:image/png;base64,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" alt="" class="imglogo">
    </div>
  </div>
</template>

<script>
import discoveryDes from './discoveryDes.vue';
import axios from 'axios'
export default {
  name: 'news',
  data () {
    return {
      datalist:[]
    }
  },
  components:{
    discoveryDes,
  },
  mounted(){
    axios.get('https://api.ricebook.com/hub/home/v1/web/category_detail.json?city_id=140&category_id=8&type=newly&page=0').then(res=>{

      this.datalist = res.data.list;
    })
  },
  methods:{
    handleClick(id){
      this.$router.push('/details/'+id)
    }
  }
}
</script>

<style scoped lang="scss">
  .all{
    background: #f6f6f6;
  }
  .bar{
    width: 100%;
    height: 103px;
    overflow: hidden;
    background: white;
    border-top: 10px solid #f6f6f6;
    img{
      width: 109px;
      height: 71px;
      float: right;
      padding-top: 16px;
      padding-right: 18px;
    }
    p:nth-of-type(1){
      font-size: 15px;
      color: #2c3038;
      margin-left: 14px;
      margin-top: 22px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 200px;
    }
    p:nth-of-type(2){
      font-size: 12px;
      color: #92969c;
      margin-left: 14px;
      margin-top: 7px;
    }
    span:nth-of-type(1){
      font-size: 12px;
      color: #ff3939;
      margin-left: 14px;
      margin-top: 9px;
    }
    span:nth-of-type(2){
      font-size: 10px;
      color: #ff3939;
    }
    span:nth-of-type(3){
      font-size: 10px;
      color: #ff3939;
    }
    span:nth-of-type(4){
      font-size: 10px;
      color: #ff3939;
    }
    span:nth-of-type(5){
      font-size: 10px;
      color: #9a9ea3;
      text-decoration: line-through;
    }
}
    .logo{
      width: 100%;
      height: 111px;
      background: #f6f6f6;
    }
    .imglogo{
      width: 115px;
      height: 11px;
      margin-top: 50px;
      margin-left: 130px;

    }
</style>