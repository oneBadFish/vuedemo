<template>
  <div class="content">
    <!-- 轮播图区域 -->
    <sw :banner="this.banner" :isfull=true></sw>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
       <router-link to="/Main/Newlist">
          <img src="../../../static/img/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
       </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
       <router-link to="/Main/Photolist">
          <img src="../../../static/img/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
       </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
       <router-link to="/Main/Shoplist">
          <img src="../../../static/img/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
       </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
       <router-link to="">
          <img src="../../../static/img/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
       </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
       <router-link to="">
          <img src="../../../static/img/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
       </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
       <router-link to="">
          <img src="../../../static/img/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
       </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Sw from '@/components/Sw'
export default {
  data() {
    return {
      banner: ""
    };
  },
  components: {
    Sw
  },
  mounted() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      this.$http
        .get("api/getlunbo")
        .then(res => {
          console.log(res.body);
          this.banner = res.body.message;
        });
    }
  }
};
</script>

<style lang="less" scoped>

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  li {
    border: none;
    margin-bottom: 10px;
    img {
      width: 60px;
    }
  }
}
</style>