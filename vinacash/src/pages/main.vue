<template>
  <div class="hello">
    <sjx_Header id='1'></sjx_Header>

    <div class="body" >

      <div class="banner" id="banner" >
        <div class="banner-main">
          <h3>Vinavay lựa chọn an toàn của bạn</h3><br>
          <p>đội ngũ với thái độ chuyên nghiệp nhất, tạo nên sản phẩm 
tài chính an tâm nhất</p>
        </div>
      </div>
      <div class="main-content pd_tb_60">
        <div class="mg_auto">
          <h2 class="con-title">Quy trình chung</h2>
          <div class="img1">
            <img src="../../static/img/icon_1.png" alt="">
          </div>
          <div >
            <ul class="flex four">
              <li v-for="(item,i) in arr2" :key="i">
                <p class="t1">{{item.title}}</p>
                <p class="t2">{{item.con}}</p>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      <div class="main-content bg1">
        <div class="mg_auto flex flex-center h100">
          <!-- <div class=""> -->
            <ul class="flex flex-wrap two pd_40">
              <li v-for="(item,i) in arr3" :key="i" class="flex">
                <div class="left pic">
                  <img :src="item.src" alt="">
                </div>
                <div class="right">
                  <p class="t1">{{item.title}}</p>
                  <p class="t2">{{item.con}}</p>
                </div>
              </li>
            </ul>
          <!-- </div> -->
        </div>
        
      </div>

      <div class="main-content pd_tb_60">
        <div class="mg_auto">
          <h2 class="con-title">Ví dụ vay thành công</h2>
          <div>
            <ul class="flex flex-justify-around three" >
              <li v-for="(item,index) in arr4" :key="index" class="userbox">
                <div class="userimg pic">
                  <img :src="item.img" alt="">
                </div>
                <div class="info" :class="{active:item.id==1}">
                  <p class="name" :class="{active:item.id==1}">{{item.name}}</p>
                  <p class="content" :class="{active:item.id==1}">{{item.title}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

    </div>
    <template>
      <sjx_Footer></sjx_Footer>
    </template>
  </div>
</template>

<script>
import sjx_Header from '../components/header'
import sjx_Footer from '../components/footer'
export default {
  name: 'Main',
  components:{
    sjx_Header,
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
      arr2: [
        {id:1,con:'Lựa chọn số tiền và kỳ hạn, điền thông tin chứng nhận theo hướng dẫn, click chọn vay',title:'Vay'},
        {id:2,con:'Thẩm định máy, thẩm định thủ công, thẩm định nhanh',title:'Thẩm định'},
        {id:3,con:'Thông qua thẩm định, lập tức nhận được tiền vay',title:'Giải ngân'},
        {id:4,con:'Nhiều loại lựa chọn',title:'Trả'}
      ],
      arr3: [
        {id:1,con:'Toàn bộ quy trình được phụ trách bởi đội ngũ chuyên nghiệp , nhiều đảm bảo',title:'Tuyệt đối an tâm',src:'../../static/img/icon_2.png'},
        {id:2,con:'Giản lược quy trình thẩm định, tỷ lệ thông qua đạt 90% trở lên',title:'Thẩm định siêu tốc',src:'../../static/img/icon_3.png'},
        {id:3,con:'Thông qua thẩm định, lập tức nhận được tiền vay',title:'Nhận tiền nhanh',src:'../../static/img/icon_4.png'},
        {id:4,con:'Tự do chọn số tiền vay',title:'Nhiều sự lựa chọn',src:'../../static/img/icon_5.png'}
      ],
      arr4: [
        {id:1,img:'../../static/img/tx_1.png',name:'Mai XX, 28 tuổi',title:'Vì nhiều lí do tôi cần vay gấp, tại đây tôi vay tiền rất nhanh, giải quyết được khó khăn của mình'},
        {id:2,img:'../../static/img/tx_2.png',name:'Nguai XX, 35 tuổi',title:'Khách quen ở đây rồi, vay tiền rất nhanh, dùng rất an tâm'},
        {id:3,img:'../../static/img/tx_3.png',name:'Bùi XX, 41 tuổi',title:'Đây là lần đầu tiên tôi sử dụng sản phẩm này, không ngờ trải nghiệm rất tốt. Quy trình rõ ràng, kịp thời nhắc nhở thanh toán. Sau này vẫn tiếp tục sử dụng'}
      ],
      id:1
    }
  },
  methods:{
    jump (top) {
      window.scrollTo(0, top);
      
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

  .banner{
    width: 100%;
    height: 750px;
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
      padding-top: 300px;
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
        margin-top: 30px;
      }
    }
  }
  
  .main-content{
    width: 100%;
    height: auto;
    .mg_auto{
      max-width: 1200px;
      margin: 0 auto;
      .img1{
        width: 1200px;
        height: 85px;
        margin-top: 80px;
      }
      .four{
        li{
          width: 30%;
          text-align: center;
          .t1{
            margin: 40px 0 20px;
            height: 40px;
            font-size: 24px;
            line-height: 40px;
            color:rgba(26,26,26,1);
          }
          .t2{
            font-size: 16px;
            padding: 0 40px;
            color:rgba(100,102,122,1);
            line-height: 20px;
          }
        }
      }
      .two{
        li{
          width: 50%;
          margin-bottom: 50px;
          .left{
            width: 60px;
            height: 60px;
          }
          .right{
            flex: 1;
            padding: 0 40px;
            .t1{
              margin-bottom: 10px;
              height: 40px;
              font-size: 20px;
              line-height: 40px;
              color:rgba(255,255,255,1);
            }
            .t2{
              font-size: 16px;
              // padding: 0 40px;
              color:rgba(255,255,255,1);
            }
          }
        }
      }
      .three{
        .userbox{
          width: 302px;
          height: 280px;
          margin-top: 90px;
          position: relative;
          .userimg{
            padding: 10px;
            border-radius: 50%;
            width: 118px;
            height: 118px;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            background-color: #fff;
            z-index: 1;
          }
          .info{
            position: absolute;
            bottom: 0px;
            left: 0;
            right: 0;
            margin: 0 auto;
            background-color: #fff;
            height: 200px;
            border-radius: 10px;
            box-shadow:0px 11px 43px 0px rgba(108, 114, 110, 0.35);
            
            padding: 70px 20px 0;
            .name{
              font-size: 18px;
              color: #4B79FF;
              text-align: center;
              margin-bottom: 14px;
            }
            .content{
              font-size: 14px;
              color: #1B1B1B;
              line-height: 20px;
            }
            .active{
              color: #ffffFF;
            }
          }
          .active{
            background-color: #4B79FF;
          }
        }
      }
    }
  }
  .bg1{
    height: 506px;
    background: url('../../static/img/bg_1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
  }

</style>
