<template>
  <div class="hello">
    <sjx_Header id='4'></sjx_Header>

    <div class="body" >

      <div class="banner" id="banner" >
        <div class="banner-main">
        </div>
      </div>

      <div class="main-content pd_tb_60 bg1">
        <div class="mg_auto">
          <h2 class="con-title mb_70">Giới thiệu sản phẩm</h2>
          <div class="topimg flex flex-wrap flex-content-center flex-justify-center">
            <p class="t1">Vinacash là sản phẩm vay tài chính rất an tâm. Thông tin các nhận quá ít</p>
            <p class="t1">Quy trình thẩm định đơn giản, Tỷ lệ thông qua 90% trở lên</p>
            <p class="t1">Nhận tiền nhanh, Giám sát bởi đội ngũ chuyên nghiệp</p>
            <p class="t1">Nhận tiền nhanh, Giám sát bởi đội ngũ chuyên nghiệp</p>
          </div>
        </div>
        
      </div>
      <div class="main-content pd_tb_60">
        <div class="mg_auto">
          <h2 class="con-title mb_70">Giới thiệu sản phẩm</h2>
          <div >
            <ul >
              <li v-for="(item,i) in arr2" :key="i" class="flex mb_30">
                <template>
                  <div class="box flex flex-center" >
                    <div class="box-img pic w482" >
                      <img :src="item.src" alt="">
                    </div>
                  </div>
                  
                  <div class="box flex flex-wrap flex-content-center">
                    <p class="t2 mb_10">Vinacash là 1 Công ty chuyên tài chính vi mô. Chúng tôi có đội ngũ vô cùng chuyên nghiệp</p>
                    <p class="t2 mb_10">Chúng tôi có đội ngũ kinh nghiệm vô cùng phong phúChúng tôi có quy trình nghề nghiệp chuẩn mực</p>
                    <p class="t2 mb_10">Chúng tôi có thái độ phục vụ đại chúng</p>
                    <p class="t2 mb_10">Chúng tôi ở đây, Bạn có thể trải nghiệm sự phục vụ cao cấp</p>
                    <p class="t2 mb_10">Bạn có thể tận hưởng trải nghiệm vay tốc độ nhanh.Hãy tin Chúng tôi,</p>
                    <p class="t2">Tuyệt đối là sự lựac họn Tốt nhất của bạn.</p>
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
  name: 'Aboutwe',
  components:{
    sjx_Header,
    sjx_Footer
  },
  data () {
    return {
      arr1: [
        {id:1,name:'Thông tin Cá nhân',title:'Thông tin cá nhân, như họ tên, CMND, địa chỉ hiện tại v.v '},
        {id:2,name:'Kiểm tra CMND',title:'tải lên mặt trước và mặt sau CMND, kiểm tra thông tin cá nhân'},
        {id:3,name:'Thông tin Công ty',title:'Điền vào ngành nghề, tên Công ty, v.v những thông tin liên quan'},
        {id:4,name:'Kiểm tra chân dung',title:'click chọn mở camera, chụp chân dung'}
      ],
      arr2: [
        {id:1,con:'Chọn số tiền vay và thời hạn thanh toán, Click vay',title:'Click chọn vay',src:'../../static/img/tu.png'}
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
    height: 550px;
    background-image: url('../../static/img/banner_4.png') ;
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
        border-radius: 20px;
        bottom: 0; 
        margin: 0 auto;
        left: 0;
        right: 0;
        padding: 36px 30px;
        .bn-title{
          color: #ffffff;
          font-size: 48px;
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
      .topimg{
        width: 1200px;
        height: 470px;
        margin-top: 80px;
        background-image: url('../../static/img/di_4.png') ;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        .t1{
          font-size:16px;
          font-weight:400;
          color:rgba(51,51,51,1);
          line-height:40px;
          width: 100%;
          text-align: center;
        }
      }
      .con-title{
        text-align: center;
        color: #333333;
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
    // height: 264px;
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
  .bg1{
    background:rgba(248,246,249,1);
  }
  .w482{
    width: 482px;
  }

</style>
