<template>
  <div class="sjxfooter">
    <div class="footer-main">
      <div class="f-first">
        <div class="logo pic" >
          <img style="height:120%" src="../../static/img/vinavay.png" alt="">
        </div>
      </div>
      <div >
        <p class="title">Vinacash</p>
        <p class="con">Vinacash</p>
      </div>
        
      <div >
        <p class="title">Đối tác</p>
        <div class="funpay mb_10 pic">
          <img src="../../static/img/punpay.png" alt="">
        </div>
        <!-- <div class="funpay pic">
          <img src="../../static/img/ngan.png" alt="">
        </div> -->
      </div>
        
      <div >
        <p class="title">Về Chúng tôi</p>
        <p class="con mb_30">Hotline:1900636407</p>
        <p class="con">quangdungdeveloperfour@gmail.com</p>
      </div>
      <div >
        <p class="title">Tải ứng dụng</p>
        <div class="funpay">
          <img src="../../static/img/Google_play.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sjxfooter',
  data () {
    return {
      
    }
  },
  methods:{
    googlePlayDownload(){
      window.location.href="https://play.google.com/store/apps/details?id=com.ps.getpeso";
    },
    jump(href){
      window.location.href = href
    }
  }
}
</script>

<style scoped lang="scss">
  @mixin fle($style){
    display: flex;
    justify-content: $style;
  }
  .sjxfooter{
    width: 100%;
    height: 320px;
    background:rgba(248,249,251,1);
    padding-top: 60px;
    background-image: url('../../static/img/bj_2.png') ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
    .footer-main{
      max-width: 1200px;
      margin: 0 auto;
      @include fle(space-between);
      .f-first{
        .logo{
          width: 78px;
          height: 80px;
        }
      }
      .title{
        height: 70px;
        font-size: 22px;
        font-weight:400;
        color:rgba(26,26,26,1);
      }
      .con{
        font-size:16px;
        font-weight:400;
        color:rgba(155,155,155,1);
      }
    }
  }
</style>