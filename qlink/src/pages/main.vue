<template>
  <div class="hello">
    <sjx_Header id='1'></sjx_Header>

    <div class="body" >

      <div class="main-content pd_tb_60">
        <div class="mg_auto">
          <h2 class="con-title">Quy trình chung</h2>
          <div class="img1">
            <img src="../../static/img/icon1.png" alt="">
          </div>
          <div >
            <ul class="flex four">
              <li v-for="(item,i) in arr2" :key="i">
                <p class="t1 fs_18">{{item.title}}</p>
                <p class="t2 lh_20">{{item.con}}</p>
              </li>
            </ul>
          </div>
          <div class="flex flex-justify-around mgt60 pd_lr_200" >
            <div class="googleimg pic">
              <img src="../../static/img/google.png" alt="">
            </div>
            <div class="img2" @click="jump('/loan')">Quy trinh vay chi tiết</div>
          </div>
        </div>
        
      </div>

      <div class="main-content pd_tb_60 bg1">
        <div class="mg_auto">
          <h2 class="con-title">Tại sao chọn chúng tôi?</h2>
          <div >
            <ul class="flex four">
              <li v-for="(item,i) in arr3" :key="i" class="pd_t_50">
                <div class="imgbox pic">
                  <img :src="item.src" alt="">
                </div>
                <p class="t1 fs_16">{{item.title}}</p>
                <p class="t2 lh_20">{{item.con}}</p>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      <div class="main-content pd_tb_60 bg2">
        <div class="mg_auto">
          <h2 class="con-title">Ví dụ vay thành công</h2>
          <div>
            <ul class="flex flex-justify-around three" >
              <li v-for="(item,index) in arr4" :key="index" class="userbox">
                
                <div class="info" :class="{active:item.id==1}">
                  <div class="userimg pic">
                    <img :src="item.img" alt="">
                  </div>
                  <p class="name fs_18 mt_20 fw_600 mb_10" >{{item.name}}</p>
                  <p class="name fs_16  mb_20" >{{item.age}}</p>
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
        {id:1,con:'Chọn số tiền vay và thời hạn trả, Click vay',title:'Vay'},
        {id:2,con:'Thẩm định máy, Thẩm định thủ công, đảm bảo an toàn cho thông tin của bạn',title:'Thẩm định'},
        {id:3,con:'Thẩm định thông qua, tiền vay lập tức đến tài khoản bạn',title:'đến tài khoản'},
        {id:4,con:'Đừng quên thanh toán đúng hạn nhé',title:'Thanh toán '}
      ],
      arr3: [
        {id:1,con:'Đội ngũ kỹ thuật chuyên nghiệp bảo vệ tính an toàn, quyền riêng tư tài chính của bạn',title:'Đội ngũ chuyên nghiệpđảm bảo',src:'../../static/img/icon_1.png'},
        {id:2,con:'Quy trình vay đơn giản rõ ràng, thao tác thuận tiện, hoàn toàn không phải lo lắng.',title:'Quy trình đơn giản',src:'../../static/img/icon_2.png'},
        {id:3,con:'Thẩm định thông qua, lập tức giải ngân. Hãy kiểm tra tài khoản bạn ngay nhé',title:'Nhanh chóng đến tài khoản',src:'../../static/img/icon_3.png'},
        {id:4,con:'Dịch vụ khách hàng chuyên nghiệp giải đáp thắc mắc của bạn để bạn có trải nghiệm tuyệt nhất',title:'Trải nghiệm người dùng tuyệt vời',src:'../../static/img/icon_4.png'}
      ],
      arr4: [
        {id:1,img:'../../static/img/headpic1.png',name:'Nguyen',age:'26 tuổi',title:'Trước đây gia đình có chút vấn đề, kinh tế có chút khó khăn. Nhờ bạn bè giới thiệu, '},
        {id:2,img:'../../static/img/headpic2.png',name:'Le',age:'33 tuổi',title:'Quy trình rất đơn giản, thao tác lại vô cùng thuận tiện. Tiền đến tài khoản nhanh'},
        {id:3,img:'../../static/img/headpic3.png',name:'Pham',age:'55 tuổi',title:'Tuổi già rồi sợ không biết dùng, không ngờ lại dễ như trở bàn tay. Thật sự rất tốt, đề xuất với mọi người'}
      ],
      id:1
    }
  },
  methods:{
    jump (path) {
      this.$router.push(path);
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
  .con-title{
    text-align: center;
    font-size: 24px;
    font-weight:bold;
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
          width: 25%;
          text-align: center;
          .imgbox{
            margin: 0 auto;
            width: 80px;
            height: 80px;
            margin-bottom: 20px;
          }
          .t1{
            margin: 40px 0 20px;
            height: 40px;
            line-height: 40px;
            color:rgba(26,26,26,1);
          }
          .t2{
            font-size: 14px;
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
          margin-top: 50px;
          position: relative;
          .userimg{
            border-radius: 50%;
            width: 80px;
            height: 80px;
            margin: 0 auto;
            background-color: #fff;
          }
          .info{
            background-color: #fff;
            height: 300px;
            border-radius: 10px;
            box-shadow:0px 11px 43px 0px rgba(108, 114, 110, 0.35);
            padding: 30px 20px;
            .name{
              text-align: center;
              
            }
            .content{
              font-size: 14px;
              color: #000000;
              text-align: center;
              line-height: 28px;
            }
          }
        }
      }
    }
  }
  .bg1{
    height: 440px;
    background: url('../../static/img/bg1.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
  }
  .bg2{
    height: 486px;
    background: url('../../static/img/bg2.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
  }
  .googleimg{
    width: 185px;
  }
  .img2{
    width:186px;
    height:55px;
    background:rgba(23,158,83,1);
    border-radius:4px;
    text-align: center;
    line-height: 55px;
    font-size:14px;
    font-weight:500;
    color:rgba(255,255,255,1);
  }

</style>
