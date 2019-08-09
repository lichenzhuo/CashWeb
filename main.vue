<template>
  <div class="hello">
    <header class="sjxheader">
      <div class="header-main" >
        <div class="header-left">
          <div class="logo pic">
            <img src="static/img/logo.png">
          </div>
          <div class="logo-title">
            vinacash
          </div>
        </div>
        <nav class="header-right">
          <ul class="nav-ul">
            <li class="nav-li" v-for="(item,index) in arr" :key="index" >
              <a class="title" @click="jump(item.top)">{{item.title}}</a>
              <span v-if="item.id==1" class="active"></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="body" >

      <div class="banner" id="banner" >
        <div class="banner-main">
          <h3>Vinacash lựa chọn an toàn của bạn</h3><br>
          <p>đội ngũ với thái độ chuyên nghiệp nhất, tạo nên sản phẩm  tài c</p>
        </div>
      </div>

      <div class="main-content pd_tb_60">
        <div class="mg_auto">
          <h2 class="con-title">Quy trình chung</h2>
        </div>
      </div>

    </div>
    <template>
      <sjx_Footer></sjx_Footer>
    </template>
  </div>
</template>

<script>
// import sjx_Header from './header'
import sjx_Footer from '../components/footer'
export default {
  name: 'Main',
  components:{
    sjx_Footer
  },
  data () {
    return {
      href:'https://play.google.com/store/apps/details?id=com.ps.getpeso',
      arr: [
        {id:1,name:'#banner',title:'Đầu trang'},
        {id:2,name:'#first',title:'Làm sao vay'},
        {id:3,name:'#second',title:'Làm sao trả'},
        {id:4,name:'#third',title:'Về chúng tôi'}
      ],
      id:1
    }
  },
  methods:{
    jump (top) {
      window.scrollTo(0, top);
      // var scroll = document.documentElement.scrollTop || document.body.scrollTop;
      
      // var times = 10
      // if (scroll<top) {
      //   var c = setInterval(()=>{
      //     console.log(scroll)
      //     console.log(top)
      //     times+=10
      //     document.documentElement.scrollTop = times
      //   },16);
      // }else {
      //   console.log(2)
      //   clearTimeout(c);
      // }
      
    },
    googlePlayDownload () {
      window.location.href="http://nas.getpeso.ph/GetPeso.apk";
    },
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello{
    width: 100%;
    height: auto;
    position: relative;
  }

  $mainCol:#458afe;
  .sjxheader {
    width: 100%;
    height: 90px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background:rgba(0,0,0,1);
    opacity:0.4;
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
          width: 62px;
          height: 62px;
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
            display: flex;
            align-content: center;
            justify-content: center;
            text-align: center;
            color: $mainCol;
            flex-wrap: wrap;
            .title{
              cursor: pointer;
              display: block;
              width: 100%;
              height: 40px;
              color: #fff;
              line-height: 40px;
              font-size: 16px;
              // margin: 0 20px;
            }
            .active{
              width: 60px;
              height: 2px;
              background: #ddd;
            }
          }
        }
      }
    }
  }

  .body{
    width: 100%;
    height: auto;
    margin: 0 auto;
    background-color: #ffffff;
  }
  .banner{
    width: 100%;
    height: 750px;
    background-image: url('../../static/img/bg-banner@2x.png') ;
    background-size: 100% 100%;
    .banner-main{
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      // display: flex;
      // flex-wrap: wrap;
      // align-items: center;
      padding-top: 320px;
      h3{
        // width: 50%;
        font-size: 48px;
        font-weight: 600;
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
  .main-content{
    width: 100%;
    height: auto;
    
    .mg_auto{
      max-width: 1200px;
      margin: 0 auto;
    }
    
  }

</style>
