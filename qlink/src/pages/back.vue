<template>
  <div class="hello">
    <sjx_Header id='3'></sjx_Header>

    <div class="body" >

      <div class="main-content pd_tb_60">
        <div class="mg_auto">
          <h2 class="con-title mb_70">Làm thế nào thanh toán?</h2>
          <div >
            <ul class="flex four">
              <li v-for="(item,i) in arr2" :key="i" >
                <div class="imgbox">
                  <img :src="item.src" alt="">
                </div>
                <p class="t1 fs_18">{{item.title}}</p>
                <p class="t2 lh_20">{{item.con}}</p>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      <div class="main-content pd_tb_30 bg3">
        <div class="mg_auto">
          <h2 class="con-title mb_20">Có bao nhiêu cách thanh toán?</h2>
          <div class="bgfff flex">
            <div class="img1">
              <img src="../../static/img/process.png" alt="">
            </div>
            <div class="pd_t_50 pl_50">
              <p class="text_cen fs_18 w100 fw600">Thanh toán trực tuyến</p>
              <p class="text_cen fs_14 w100 cl_7d mt_20">Trực tiếp chuyển Link Thanh Toán H5 tiến hành thanh toán</p>

              <p class="text_cen fs_18 w100 fw600 mgt60">Thanh toán ngoại tuyến</p>
              <p class="text_cen fs_14 w100 cl_7d lh_20 mt_20">Chúng tôi sẽ gửi bạn mã thanh toán. Bạn hãy đến địa điểm thanh toán gần nhất, đưa mã thanh toán cho nhân viên trong cửa hàng, nhân viên sẽ hỗ trợ bạn thao tác thanh toán</p>
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
      arr1: [
        {id:1,name:'#banner',title:'Đầu trang'},
        {id:2,name:'#first',title:'Làm sao vay'},
        {id:3,name:'#second',title:'Làm sao trả'},
        {id:4,name:'#third',title:'Về chúng tôi'}
      ],
      arr2: [
        {id:1,con:'Trong đơn yêu cầu Click mục Thanh toán, đến giao diện thanh toán, Click Thanh toán ngay',title:'Click Thanh toán',src:'../../static/img/pic1.png'},
        {id:2,con:'Lựa chọn phương thức thanh toán của bạn. Trên giao diện có thể sử dụng phiếu ưu đãi hay không. Sử dụng phiếu ưu đãi có lợi hơn, hãy sử dụng nhé',title:'Chọn phương thức thanh toán',src:'../../static/img/pic2.png'},
        {id:3,con:'Click Thanh toán, lập tức chuyển đến giao diện Thanh toán để tiến hành Thanh toán',title:'Chuyển sang giao diện tương ứng',src:'../../static/img/pic3.png'},
        {id:4,con:'Thanh toán thành công rồi! Đừng quên thanh toán đúng hạn nhé, nếu không Chúng tôi sẽ có khoản phạt tương ứng',title:'Thanh toán thành công',src:'../../static/img/pic4.png'}
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .w240{
    width: 240px;
    height: 428px;
  }
  .flex1{
    flex: 1;
    padding-left: 40px;
  }


  .main-content{
    width: 100%;
    height: auto;
    .mg_auto{
      max-width: 1200px;
      margin: 0 auto;
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
            width: 240px;
            height: 428px;
            margin-bottom: 20px;
          }
          .t1{
            margin: 20px 0 10px;
            height: 40px;
            line-height: 40px;
            color:rgba(0,185,87,1);
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
    padding: 28px 22px;
  }
  .img1{
    width: 652px;
    height: 318px;
  }

</style>
