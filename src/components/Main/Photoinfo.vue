<template>
  <div class="content allinfo">
    <h3>{{infos.title}}</h3>
    <p class="otit">
      <span>发表时间：{{infos.add_time | dateFormat}}</span>
      <span>点击次数：{{infos.click}}</span>
    </p>
    <hr />
    <!-- 略缩图 -->
    <div class="thumbs">
      <vue-preview :slides="list"></vue-preview>
      <!-- <img class="preview-img" v-for="(item,index) in list" :key="index" height="100"  :src="item.src" @click="$preview.open(index,list)">     -->
    </div>

    <!-- 图片内容区 -->

    <div class="conts" v-html="infos.content"></div>
    <!-- 评论组件 -->
    <comment :id="this.id"></comment>
  </div>
</template>
<script>
import Comment from "@/components/Main/Comment";
export default {
  data() {
    return {
      id: this.$route.params.id,
      infos: {},
      list: []
    };
  },
  methods: {
    getinfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(res => {
        console.log(res.body);
        this.infos = res.body.message[0];
      });
    },
    getpic() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        console.log(res.body);
        res.body.message.forEach(item => {
          item.w = 600;
          item.h = 400;
          item.msrc = item.src;
        });
        this.list = res.body.message;
      });
    }
  },
  created() {
    this.getinfo();
    this.getpic();
  },
  components: {
    Comment
  }
};
</script>
<style lang="less" scoped>
.allinfo {
  padding: 3px;
  h3 {
    color: #26a2f2;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  p {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .conts {
    line-height: 2;
  }
}
.thumbs {
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
      }
    }
  }
}

</style>


