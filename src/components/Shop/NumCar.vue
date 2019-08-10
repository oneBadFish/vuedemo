<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9" style="height:25px;width:110px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="init" @change="changenum" ref="numbox"
    readonly/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  methods: {
    changenum(){
          this.$store.commit('updataCar',{id:this.shopid,count:this.$refs.numbox.value})
    }
  },
    mounted() {
        mui('.mui-numbox').numbox()

    },
    props : ["init","shopid"]
    
}
</script>

<style lang="less" scoped>

</style>


