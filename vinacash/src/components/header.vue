<template>
  <header class="sjxheader">
    <div class="header-main" >
      <div class="header-left">
        <div class="logo pic">
          <img src="static/img/logo_1.png">
        </div>
        <div class="logo-title">
          Vinavay
        </div>
      </div>
      <nav class="header-right">
        <ul class="nav-ul">
          <li class="nav-li" v-for="(item,index) in arr" :key="index" >
            <a class="title" @click="jump(item.id,item.path)">{{item.title}}</a>
            <span v-if="item.id==id" class="active"></span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "sjxheader",
  props:{
    id: {
      default: 1
    }
  },
  data() {
    return {
      arr: [
        {id:1,name:'#home',title:'Đầu trang',path:'/home'},
        {id:2,name:'#loan',title:'Làm sao vay',path:'/loan'},
        {id:3,name:'#back',title:'Làm sao trả',path:'/back'},
        {id:4,name:'#aboutwe',title:'Về chúng tôi',path:'/aboutwe'}
      ],
    }
  },
  methods: {
    jump(id,path) {
      // this.id = id
      this.$router.push(path);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainCol:#458afe;
  .sjxheader {
    width: 100%;
    height: 90px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background:rgba(0,0,0,0.4);
    // opacity:0.4;
    .header-main {
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .header-left {
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        .logo {
          width: 60px;
          height: 60px;
        }
        .logo-title {
          font-size: 24px;
          font-weight: bold;
          margin-left: 26px;
          color: #fff;
        }
      }
      .header-right {
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        .nav-ul {
          width: auto;
          height: 100%;
          display: flex;
          align-items: center;
          .nav-li {
            width: 160px;
            height: 100%;
            // margin: 0 30px;
            // display: flex;
            // align-content: center;
            // justify-content: center;
            text-align: center;
            color: $mainCol;
            // flex-wrap: wrap;
            position: relative;
            .title{
              cursor: pointer;
              display: block;
              width: 100%;
              height: 90px;
              color: #fff;
              line-height: 90px;
              font-size: 16px;
              // margin: 0 20px;
            }
            .active{
              width: 60px;
              height: 2px;
              background: #ddd;
              position: absolute;
              left: 0;
              right: 0;
              margin: 0 auto;
              bottom: 20px;
            }
          }
        }
      }
    }
  }
</style>