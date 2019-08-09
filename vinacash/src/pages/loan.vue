<template>
  <div class="hello">
    <sjx_Header id='2'></sjx_Header>

    <div class="body" >

      <div class="banner" id="banner" >
        <div class="banner-main">
          <div class="banner-info">
            <h2 class="bn-title mb_10">Cần gì để vay?</h2>
            <ul class="flex flex-wrap two">
              <li v-for="(item,i) in arr1" :key="i" >
                <div class="index mb_10">{{i+1}}</div>
                <p class="t1">{{item.name}}</p>
                <p class="t2">{{item.title}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="main-content pd_tb_60">
        <div class="mg_auto">
          <h2 class="con-title mb_70">Các bước vay</h2>
          <div >
            <ul >
              <li v-for="(item,i) in arr2" :key="i" class="flex mb_30">
                <template v-if="i==0||i==2">
                  <div class="box flex flex-center" >
                    <div class="box-img pic" >
                      <img :src="item.src" alt="">
                    </div>
                  </div>
                  <div class="box flex flex-wrap flex-content-center">
                    <p class="t1 mb_30 ">{{item.title}}</p>
                    <p class="t2">{{item.con}}</p>
                  </div>
                </template>
                <template v-else>
                  <div class="box flex flex-wrap flex-content-center">
                    <p class="t1 mb_30 ">{{item.title}}</p>
                    <p class="t2">{{item.con}}</p>
                  </div>
                  <div class="box flex flex-center" >
                    <div class="box-img pic" >
                      <img :src="item.src" alt="">
                    </div>
                  </div>
                  
                </template>
                
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
// import sjx_Header from './header'
import sjx_Header from '../components/header'
import sjx_Footer from '../components/footer'
export default {
  name: 'Loan',
  components:{
    sjx_Header,
    sjx_Footer
  },
  data () {
    return {
      href:'https://play.google.com/store/apps/details?id=com.ps.getpeso',
      arr1: [
        {id:1,name:'Thông tin Cá nhân',title:'Thông tin cá nhân, như họ tên, CMND, địa chỉ hiện tại v.v ',src:'../../static/img/t_1.png'},
        {id:2,name:'Kiểm tra CMND',title:'tải lên mặt trước và mặt sau CMND, kiểm tra thông tin cá nhân',src:'../../static/img/t_2.png'},
        {id:3,name:'Thông tin Công ty',title:'Điền vào ngành nghề, tên Công ty, v.v những thông tin liên quan',src:'../../static/img/t_3.png'},
        {id:4,name:'Kiểm tra chân dung',title:'click chọn mở camera, chụp chân dung',src:'../../static/img/t_4.png'}
      ],
      arr2: [
        {id:1,con:'Chọn số tiền vay và thời hạn thanh toán, Click vay',title:'Click chọn vay',src:'../../static/img/t_1.png'},
        {id:2,con:'Điền vào thông tin vay tương ứng. Để bảo vệ an toàn, chúng tôi cần tên thật trên CMND. Hãy nhập thông tin cá nhân chính xác',title:'Nhập thông tin',src:'../../static/img/t_2.png'},
        {id:3,con:'Chúng tôi sẽ dùng kỹ thuật chuyên nghiệp nhất để kiểm tra bạn có đủ điều kiện vay không',title:'Thẩm định vay',src:'../../static/img/t_3.png'},
        {id:4,con:'Khoản vay thông qua thẩm định, số tiền vay lập tức được chuyển đến tài khoản của Khách',title:'Nhận tiền vay',src:'../../static/img/t_4.png'}
      ],
    }
  },
  methods:{
    jump (top) {
      window.scrollTo(0, top);
      
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
    height: 820px;
    background-image: url('../../static/img/banner_2.png') ;
    // background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
    .banner-main{
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      .banner-info{
        position: absolute;
        width: 1180px;
        height: 429px;
        background-color: #204AB4;
        background-image: url('../../static/img/bj.png') ;
        background-size: cover;
        border-radius: 20px;
        bottom: 0; 
        margin: 0 auto;
        left: 0;
        right: 0;
        padding: 36px 30px;
        .bn-title{
          color: #ffffff;
          font-size: 48px;
          margin-bottom: 40px;
        }
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
      .con-title{
        text-align: center;
      }
    }
  }
  .two{
    li{
      width: 50%;
      margin-bottom: 30px;
      .index{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ffffff;
        line-height: 40px;
        text-align: center;
        font-size: 24px;
        color: #5483F9;
      }
      .t1{
        margin-bottom: 10px;
        height: 40px;
        font-size: 18px;
        line-height: 40px;
        color:rgba(255,255,255,1);
        font-weight:bold;
      }
      .t2{
        font-size: 16px;
        // padding: 0 40px;
        color:rgba(255,255,255,1);
      }
    }
  }
  .box{
    width: 50%;
    height: 264px;
    .box-img{
      // width: 370px;
      height: 100%;
    }
    .t1{
      width: 100%;
      font-size:36px;
      font-weight:bold;
      color:rgba(26,26,26,1);
      line-height:23px;
    }
    .t2{
      font-size:16px;
      font-weight:400;
      color:rgba(25,25,25,1);
      line-height:23px;
    }
  }

</style>
