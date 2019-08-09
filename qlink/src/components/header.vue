<template>
  <div>
    <header class="sjxheader">
      <div class="header-main" >
        <div class="header-left">
          <div class="logo pic">
            <img src="static/img/logo.png">
          </div>
          <div class="logo-title">
            Qlink
          </div>
        </div>
        <nav class="header-right">
          <ul class="nav-ul">
            <li class="nav-li" v-for="(item,index) in arr" :key="index" >
              <a class="title" :class="item.id==id?'type':''"  @click="jump(item.id,item.path)">{{item.title}}</a>
              <span v-if="item.id==id" class="active"></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="banner" id="banner" >
      <div class="banner-main">
        <h3>Nhanh chóng, An toàn,</h3><br>
        <h3>Hãy chọn Chúng tôi</h3>
      </div>
    </div>
  </div>
  
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
    height: 70px;
    // position: absolute;
    // top: 0;
    // left: 0;
    // z-index: 999;
    background:#ffffff;
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
          width: 50px;
          height: 50px;
        }
        .logo-title {
          font-size: 32px;
          font-weight: bold;
          margin-left: 26px;
          font-weight:800;
          color:rgba(23,158,83,1);
          // line-height:76px;
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
            display: flex;
            align-content: center;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: $mainCol;
            flex-wrap: wrap;
            position: relative;
            .title{
              cursor: pointer;
              display: block;
              width: 100%;
              height: 40px;
              color: #333;
              line-height: 40px;
              font-size: 16px;
              // margin: 0 20px;
            }
            .type{
              color: rgba(23,158,83,1);
            }
            .active{
              width: 60px;
              height: 4px;
              background: rgba(23,158,83,1);
              margin-top: 10px;
              position: absolute;
              bottom: 0;
            }
          }
        }
      }
    }
  }

  .banner{
    width: 100%;
    height: 500px;
    background-image: url('../../static/img/banner.png') ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
    .banner-main{
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      // display: flex;
      // flex-wrap: wrap;
      // align-items: center;
      padding-top: 190px;
      h3{
        // width: 50%;
        font-size: 50px;
        font-weight: 800;
        color: #ffffff;
      }
      p{
        width: 50%;
        font-size: 30px;
        color: #ffffff;
        margin-top: 50px;
      }
    }
  }

</style>