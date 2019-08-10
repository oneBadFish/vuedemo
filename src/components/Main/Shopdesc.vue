<template>
  <div class="content">
    <h3 class="title">{{info.title}}</h3>
    <hr />
    <div class="cont" v-html="info.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      info: ""
    };
  },
  methods: {
    getinfo() {
      this.$http.get("api/goods/getdesc/" + this.id).then(res => {
        this.info = res.body.message[0];
        console.log(res.body);
      });
    }
  },
  mounted() {
    this.getinfo();
  }
};
</script>

<style lang="less" scoped>
.content {
  padding: 5px 8px;
  .title {
    font-size: 16px;
    color: #226af2;
    text-align: center;
    margin: 15px 0;
  }
  .cont{
     width: 100%;
     img{
         
     }
  }
}
</style>

