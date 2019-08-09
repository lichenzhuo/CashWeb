<template>
  <div class="sjxfooter">
    <div class="footer-main">
      
      <div >
        <p class="title">Về chúng tôi</p>
        <p class="con" @click="jump('/aboutwe')">Về chúng tôi</p>
      </div>
        
      <div >
        <p class="title">Đối tác</p>
        <div class="funpay w150 pic">
          <img src="../../static/img/punpay.png" alt="">
        </div>
        <div class="funpay w186 h48 mb_10 pic">
          <!-- <img src="../../static/img/ngan.png" alt=""> -->
        </div>
        
      </div>
        
      <div >
        
      </div>
      <div >
        <p class="title">Lập tức tải xuống trải nghiệm</p>
        <div class="funpay w186 pic">
          <img src="../../static/img/Google_play.png" alt="">
        </div>
      </div>
    </div>
    <div class="bottom-main">
      <p class="hr"></p>
      <div class="bottomInfo flex flex-justify-end">
        <p class="lh_60"><span>Email: hiwin2019@gmail.com</span><span class="ml_40">Hotline: 0966770507</span></p>
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
    height: 366px;
    background:rgba(255,255,255,1);
    padding-top: 60px;
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
        height: 50px;
        font-size: 18px;
        font-weight:400;
        color:rgba(26,26,26,1);
      }
      .con{
        font-size:14px;
        font-weight:400;
        color:rgba(155,155,155,1);
        cursor: pointer;
      }
    }
    .bottom-main{
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  .w186{
    width: 186px;
  }
  .w150{
    width: 150px;
  }
  .hr{
    border-top: 1px dashed #AEAEAE;
    margin-top: 50px;
  }
  .h48{
    height: 48px;
  }
</style>