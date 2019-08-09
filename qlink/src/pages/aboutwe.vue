<template>
  <div class="hello">
    <sjx_Header id='4'></sjx_Header>

    <div class="body" >


      <div class="main-content pd_tb_60">
        <div class="mg_auto">
          <h2 class="con-title mb_30">Giới thiệu sản phẩm</h2>
          <div class="topimg flex flex-wrap flex-content-center flex-justify-center">
            <p class="t1">Qlink là một sản phẩm tài chính rất an toàn</p>
            <p class="t1">An toàn, nhanh chóng, là sự theo đuổi không ngừng của chúng tôi</p>
            <p class="t1">Không bảo đảm, không bảo đảm</p>
            <p class="t1">Xem xét nhanh, đến ngay</p>
            <p class="t1">Chỉ cần tải xuống Qlink</p>
            <p class="t1">Có thể yêu cầu vay mọi lúc</p>
            <p class="t1">Để Khách vay thoải mái hoàn thành yêu cầu vay </p>
            <p class="t1">Nhiều Link Thanh toán có thể lựa chọn</p>
            <p class="t1">Trực tuyến ngoại tuyến có thể thay đổi</p>
            <p class="t1 mb_60">Để bạn không phải đau đầu phải thanh toán như thế nào</p>
          </div>
          <h2 class="con-title mb_30">Giới thiệu sản phẩm</h2>
          <div class="topimg flex flex-wrap flex-content-center flex-justify-center">
            <p class="t1">HI-WIN TECHNOLOGY cam kết giải quyết những khó khăn kinh tế cá nhân.</p>
            <p class="t1">Cung cấp dịch vụ cho vay tài chính một cách chuyên nghiệp, an toàn và có thể kiểm soát</p>
            <p class="t1">Cùng Khách hàng sáng tạo giá trị, chia sẻ giá trị</p>
          </div>
        </div>
      </div>


      <div class="main-content pd_tb_60 bg2">
        <div class="mg_auto bg1 pt_30">
          <h2 class="con-title mb_30">Văn hóa công ty</h2>
          <div >
            <ul class="flex flex-justify-around three" >
              <li v-for="(item,index) in arr2" :key="index" class="userbox">
                
                <div class="info" :class="{active:item.id==1}">
                  <div class="userimg pic">
                    <img :src="item.src" alt="">
                  </div>
                  <p class="name fs_18  mb_10" >{{item.name}}</p>
                  <p class="content" >{{item.title}}</p>
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
        {id:1,name:'Tín nhiệm',title:'Là liên kết giá trị giữa HI-WIN TECHNOLOGY với chính phủ, ngân hàng, khách hàng, đối tác và tổ chức xã hội',src:'../../static/img/ab3.png'},
        {id:2,name:'Giản đơn',title:'Là phương thức làm việc thông minh. Đơn giản sáng tạo không đơn giản',src:'../../static/img/ab1.png'},
        {id:3,name:'Đội ngũ',title:'Tinh thần đoàn đội làm cơ sở, cùng làm việc cùng thành công',src:'../../static/img/ab2.png'},
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

  .main-content{
    width: 100%;
    height: auto;
    .mg_auto{
      max-width: 1200px;
      margin: 0 auto;
      .topimg{
        width: 1200px;
        // height: 470px;
        .t1{
          font-size:16px;
          font-weight:400;
          color:#7D7D7D;
          line-height:26px;
          width: 100%;
          text-align: center;
        }
      }
      .con-title{
        text-align: center;
        color: #333333;
      }
      .three{
        .userbox{
          width: 302px;
          height: 280px;
          // margin-top: 50px;
          position: relative;
          .userimg{
            border-radius: 50%;
            width: 100px;
            height: 100px;
            margin: 0 auto;
          }
          .info{
            // height: 300px;
            // border-radius: 10px;
            // box-shadow:0px 11px 43px 0px rgba(108, 114, 110, 0.35);
            padding: 10px 20px;
            .name{
              text-align: center;
              color: #000000;
              margin-top: 10px;
            }
            .content{
              font-size: 14px;
              color: #7D7D7D;
              text-align: center;
              line-height: 28px;
            }
          }
        }
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
  .bg1{
    background:rgba(248,246,249,1);
  }
  .w482{
    width: 482px;
  }
  .bg2{
    height: 506px;
    background: url('../../static/img/bg_5.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
  }
</style>
