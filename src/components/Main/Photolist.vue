<template>
  <div class="content">
    <!-- 顶部滑动 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a @tap="getList(item.id)"
            :class="['mui-control-item', item.id == 0?'mui-active':'']"
            v-for="(item,index) in classify"
            :key="index"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表 -->
    <ul class="photo-list">
      <router-link  v-for="(item,index) in list" :key="index" :to="'/Main/Photoinfo/'+item.id "> 
        <img v-lazy="item.img_url" />
        <div class="info">
            <h1 class="tit">
                {{item.title}}
            </h1>
            <div class="cont"> 
                {{item.zhaiyao}}
            </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      classify: [],
      list : []
    };
  },
  methods: {
    getClass() {
      this.$http.get("api/getimgcategory").then(res => {
        console.log(res.body);
        res.body.message.unshift({ title: "全部", id: 0 });
        this.classify = res.body.message;
      });
    },


    getList(ids){
        this.$http.get('api/getimages/'+ ids).then(res=>{
            console.log(res.body)
            this.list = res.body.message
        })
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    this.getClass();
    this.getList(0);
  }
};
</script>
<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.photo-list{
    padding: 0 8px;
    a{
        display: block;
        background-color: #ccc;
        text-align: center;
        margin: 5px 0;
        position: relative;
        img{
            width: 100%;
        }
        .info{
            color: #fff;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: rgba(0,0,0,.2);
            
            .tit{
                font-size: 14px;
            }
            .cont{
                font-size: 14px;
            }

        }
    }
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>


