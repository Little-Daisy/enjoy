<template>
  <div class="container">
    <div class="navbar">
    <slot></slot>
      <div>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAA4CAYAAAAmcLAnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzVGQjVDRUQ5M0QwMTFFNDgyRjhFMDUxNDRFRkNDQzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzVGQjVDRUU5M0QwMTFFNDgyRjhFMDUxNDRFRkNDQzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0M2NDRCODkzQzQxMUU0ODJGOEUwNTE0NEVGQ0NDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NUZCNUNFQzkzRDAxMUU0ODJGOEUwNTE0NEVGQ0NDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk/edd0AAAZ4SURBVHja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" alt="">
        <p>北京<i class="iconfont icon-triangle-bottom"></i></p>
      </div>
    <p class="login">登录</p>
    <div>
      <i class="iconfont icon-fangdajing" @click="handleClick()"></i>
    </div>
  </div>
  
    <div class="search" v-show="isShow">
      <input type="text" name="" placeholder="搜索本地精选 / 快递到家">
      <button type="">搜索</button>
    </div>

 </div>
</template>

<script>
  // import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isShow:false
    }
  },
  methods:{
    handleClick(){
      this.isShow =! this.isShow
    }
  }
}
</script>

<style scoped lang="scss">
.navbar{
	height: 44px;
	width: 100%;
	background: black;
  color: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
    div{
      img{
        width:70px;

      }
      p{
        float: right;
        color: white;
        font-size:8px;
        padding-top:10px;
        i{
          font-size:8px;
        }
      }
    }
    .login{  
      color: white;
    }

}

.search{
  position: relative;
  width:100%;
  height:55px;
  background: white;
  position: fixed;
  top:45px;
  left: 0;
  input{
    width:80%;
    height:36px;
    background:#f2f3f4;
    border: none;
    margin-left: 15px;
    margin-top: 11px;
    padding-left: 15px;
    box-sizing: border-box;
    outline: none;
  }
  button{
    background: white;
    border: none;
    font-size:14px;
    margin-left: 12px;
    outline: none;
  }
}

.search:before{
    content: "";
    position: absolute;
    border: 10px solid #fff;
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    right:20px;
    top:-21px;
}
</style>