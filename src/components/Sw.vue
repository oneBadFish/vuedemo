<template>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in banner" :key="index">
        <img :src="item.img" :class="{full : isfull}" alt />
      </mt-swipe-item>
    </mt-swipe>
</template>
<script>
export default {
    props : ["banner","isfull"]
}
</script>
<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    text-align: center;
    img {
    //   width: 100%;
      height: 100%;
    }
    .full{
        width: 100%;
    }
  }
}
</style>

