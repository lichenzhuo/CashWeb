<template>
  <div class="hello">
    <sjx_Header id='3'></sjx_Header>

    <div class="body" >

      <div class="banner" id="banner" >
        <div class="banner-main">
        </div>
      </div>

      <div class="main-content pd_tb_60">
        <div class="mg_auto">
          <h2 class="con-title mb_70">Quy trình vay</h2>
          <div >
            <ul >
              <li v-for="(item,i) in arr2" :key="i" class="flex mb_180">
                <template v-if="i==0||i==2">
                  <div class="box flex flex-center" >
                    <div class="box-img pic" :class="{w392:i==0,w292:i==2}">
                      <img :src="item.src" alt="">
                    </div>
                  </div>
                  <div class="box flex flex-wrap flex-content-center">
                    <p class="t1 mb_30 ">{{item.title}}</p>
                    <p class="t2">{{item.con}}</p>
                    <p v-if="item.p1" class="t2">{{item.p1}}</p>
                    <p v-if="item.p2" class="t2">{{item.p2}}</p>
                  </div>
                </template>
                <template v-else>
                  <div class="box flex flex-wrap flex-content-center">
                    <p class="t1 mb_30 ">{{item.title}}</p>
                    <p class="t2">{{item.con}}</p>
                  </div>
                  <div class="box flex flex-center" >
                    <div class="box-img w430 pic" >
                      <img :src="item.src" alt="">
                    </div>
                  </div>
                  
                </template>
                
              </li>
            </ul>
          </div>
          <h2 class="con-title mb_60">Link thanh toán</h2>
          <div class="funimg pic">
            <img src="../../static/img/hk.png" alt="">
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
        {id:1,con:'Trong đơn yêu cầu lựa chọn mục thanh toán, nhập thông tin vào, click nhập vào quy trình thanh toán',title:'Click chọn trả',src:'../../static/img/bz_1.png'},
        {id:2,con:'Lựa chọn cách thanh toán phù hợp với bạn. Trên trang bạn có thể lựa chọn sử dụng đồng thời phiếu giảm giá hay không . Sử dụng phiếu giảm giá để được ưu đãi hơn , hãy chọn nhé',title:'Lựa chọn phương thức thanh toán',src:'../../static/img/bz_2.png'},
        {id:3,con:'Click vào thanh toán để lập tức chuyển sang trang thanh toán tương ứng',p1:'1. Thanh toán trực tuyến: Trực tiếp chuyển link H5 tiến hành thao tác',p2:'2. Thanh toán ngoại tuyến:trên màn hình sẽ tạo cho bạn 1 mã thanh toán, sau đó bạn đến điểm thanh toán gần nhất và đưa mã thanh toán này cho nhân viên cửa hàng, nhân viên sẽ hỗ trợ bạn thanh toán.',title:'Lập tức thanh toán',src:'../../static/img/bz_3.png'},
        {id:4,con:'Thanh toán Thành công rồi! Đừng quên lần sau thanh toán đúng hạn nhé, nếu không Chúng tôi sẽ đề nghị phạt tương ứng',title:'Nhận tiền vay',src:'../../static/img/bz_4.png'}
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .body{
    background: url('../../static/img/di_3.png');
    background-repeat: no-repeat;
    background-position: 0 1660px;
  }
  
  .banner{
    width: 100%;
    height: 550px;
    background-image: url('../../static/img/banner_3.png') ;
    // background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
    .banner-main{
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
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
 
  .box{
    width: 50%;
    padding-bottom: 10px;
    .w392{
      width: 392px;
    }
    .w430{
      width: 430px;
    }
    .w292{
      width: 292px;
    }
    .box-img{
      // width: 370px;
      height: 100%;
    }
    .t1{
      width: 100%;
      font-size:36px;
      font-weight:bold;
      color:rgba(26,26,26,1);
      line-height:1.5;
    }
    .t2{
      font-size:16px;
      font-weight:400;
      color:rgba(25,25,25,1);
      line-height:23px;
    }
  }
  .funimg{
    width: 900px;
    margin: 0 auto;
  }

</style>
