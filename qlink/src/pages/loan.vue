<template>
  <div class="hello">
    <sjx_Header id='2'></sjx_Header>

    <div class="body" >

      <div class="main-content pd_tb_60">
        <div class="mg_auto">
          <h2 class="con-title mb_30">tìm hiểu 1 chút thông tin liên quan đến khoản vay nhé</h2>
          <div class="img_bj ">
            <div class="flex ">
              <div class="one pl_50 pt_76">
                <p class="c_fff">Số tiền vay:</p>
                <p class="mt_20 c_fff fs_18">1.000.000~10.000.000VND</p>
              </div>
              <div class="one pr_50 pt_76">
                <p class="c_fff">Thời gian vay:</p>
                <p class="mt_20 c_fff fs_18">90 ngày <span class="mg_lr_50"></span>105 ngày <span class="mg_lr_50"></span>120 ngày</p>
              </div>
            </div>
            <div class="bot">Muốn tìm hiểu nhiều hơn hãy tải App của chúng tôi và thử trải nghiệm nhé</div>
          </div>
          <h2 class="con-title mgt50 mb_60">Vay tiền cần điều gì ?</h2>
          <div >
            <ul class="flex flex-justify-around pd_lr_60">
              <li v-for="(item,i) in arr3" :key="i" class="w30_">
                <div class="loanimg">
                  <img :src="item.src" alt="">
                </div>
                <p class="t1 fs_14 mt_20 text_cen">{{item.title}}</p>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      <div class="main-content pd_tb_60 bg3">
        <div class="mg_auto">
          <h2 class="con-title mb_30">Quy trình vay cụ thể là như thế nào ?</h2>
          <div class="bgfff">
            <div class="img1">
              <img src="../../static/img/icon1.png" alt="">
            </div>
            <div >
              <ul class="flex four">
                <li v-for="(item,i) in arr4" :key="i">
                  <p class="t1 fs_18">{{item.title}}</p>
                  <p class="t2 lh_20">{{item.con}}</p>
                </li>
              </ul>
            </div>
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
      arr2: [
        {id:1,con:'Chọn số tiền vay và thời hạn thanh toán, Click vay',title:'Click chọn vay',src:'../../static/img/t_1.png'},
        {id:2,con:'Điền vào thông tin vay tương ứng. Để bảo vệ an toàn, chúng tôi cần tên thật trên CMND. Hãy nhập thông tin cá nhân chính xác',title:'Nhập thông tin',src:'../../static/img/t_2.png'},
        {id:3,con:'Chúng tôi sẽ dùng kỹ thuật chuyên nghiệp nhất để kiểm tra bạn có đủ điều kiện vay không',title:'Thẩm định vay',src:'../../static/img/t_3.png'},
        {id:4,con:'Khoản vay thông qua thẩm định, số tiền vay lập tức được chuyển đến tài khoản của Khách',title:'Nhận tiền vay',src:'../../static/img/t_4.png'}
      ],
      arr3: [
        {id:1,title:'1 chứng minh nhân dân',src:'../../static/img/p1.png'},
        {id:2,title:'1 thu nhập công việc ổn định',src:'../../static/img/p2.png'},
        {id:3,title:'1 tài khoản ngân hàng',src:'../../static/img/p3.png'}
      ],
      arr4: [
        {id:1,con:'Chọn số tiền vay và thời hạn trả, Click vay',title:'Vay'},
        {id:2,con:'Điền vào thông tin vay tương ứng. Để bảo vệ an toàn, chúng tôi cần tên thật trên CMND. Hãy nhập thông tin cá nhân chính xác',title:'Thông tin '},
        {id:3,con:'Chúng tôi sẽ dùng kỹ thuật chuyên nghiệp để đánh gía bạn có thể thông qua để vay hay không',title:'Thẩm định vay:'},
        {id:4,con:'Khoản vay sau khi qua thẩm định, tiền vay nhanh chóng đến tài khoản của bạn',title:'Tiền vay đến tài khoản:'}
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
  .img_bj{
    width: 1120px;
    height: 230px;
    background: url('../../static/img/bg3.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
    margin: 0 auto;
  }
  
  .mg_lr_50{
    margin: 0 20px;
  }
  .main-content{
    width: 100%;
    height: auto;
    .mg_auto{
      max-width: 1200px;
      margin: 0 auto;
      .img1{
        width: 1200px;
        height: 92px;
        // margin-top: 80px;
      }
      .con-title{
        text-align: center;
        font-size: 24px;
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
            margin: 20px 0 10px;
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
    }
  }
  .loanimg{
    width: 158px;
    margin: 0 auto;
  }
  .bg3{
    width: 100%;
    height: 500px;
    background: url('../../static/img/bg4.png');
    // background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
  }
  .bgfff{
    background-color: #ffffff;
    padding: 40px 0;
  }
  .one{
    width: 50%;
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    // padding-top: 76px;
    // padding: 76px 20px 0;
  }
  .bot{
    text-align: center;
    font-size: 14px;
    color: #ffffff;
    padding-top: 66px;
  }
  .w30_{
    width: 30%;
  }
</style>
