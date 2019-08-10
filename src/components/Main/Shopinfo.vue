<template>
  <div class="content">

      <!-- 小球 -->
      <transition 
        v-on:before-enter="bEnter" 
       v-on:enter="enter"
       v-on:after-enter="aEnter">
       >
            <div class="ball" v-show="ballflag" ref="ball"></div>
      </transition>
       


    <!-- 商品轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <sw :banner="this.banner" :isfull=false></sw>
        </div>
      </div>
    </div>

    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">{{infos.title}} </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p class="price">
                市场价：<del>{{infos.market_price}}</del> &nbsp;&nbsp;
                销售价：<span class="now">{{infos.sell_price}}</span>
            </p>
            <p>购买数量：<nums @getcount = "getNum" :max="infos.stock_quantity"></nums></p>
            <p>
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click="add">加入购物车</mt-button>
            
            </p>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p>商品货号：{{infos.goods_no}}</p>
            <p>库存情况：{{infos.stock_quantity}}件</p>
            <p>上架时间：{{infos.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="godesc(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="gocomment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import Sw from '@/components/Sw'
import Nums from '@/components/Main/NumShopinfo'
export default {
    data() {
        return {
            banner : [] ,
            id : this.$route.params.id ,
            infos : "",
            ballflag : false,
            num : 1
        }
    },
    methods: {
        getshopinfo (){
            this.$http.get( 'api/getthumimages/' + this.id).then(res=>{
                console.log(res.body)
                res.body.message.forEach(item => {
                    item.img = item.src
                });

                this.banner = res.body.message
            })
        },
        getinfos(){
            this.$http.get( 'api/goods/getinfo/' + this.id).then(res=>{
                console.log(res.body)

                this.infos = res.body.message[0]
            })
        },
        godesc(id){

             this.$router.push({ name : 'Shopdesc' , params: { id } })

        }
        ,
        gocomment(id){

             this.$router.push({ name : 'Shopcomment' , params: { id } })

        },
        add(){
            this.ballflag = !this.ballflag
            var shopif = {
                id: this.id,
                count : this.num,
                price : this.infos.sell_price,
                selected : true
            }
            this.$store.commit("addCar",shopif)
        },
        bEnter(el){
            el.style.transform = "translate(0,0)"
        },
        enter(el,done){
            const ballP = this.$refs.ball.getBoundingClientRect()
            const badgeP = document.getElementById("badge").getBoundingClientRect()

            const x = badgeP.left - ballP.left
            const y = badgeP.top - ballP.top




            el.offsetLeft;
            el.style.transform = `translate(${x}px,${y}px)`
            el.style.transition = "all 0.5s ease"
            done()
        },
        aEnter(el){
            setTimeout(()=>{
                this.ballflag = ! this.ballflag

            },800)
        },
        getNum(count){
            this.num = count;
        }
    },
    mounted() {
        this.getshopinfo(),
        this.getinfos()
    },
    components : {
        Sw,
        Nums
    }
};
</script>
<style lang="less" scoped>
.content{
    background-color: #ccc;
    .now{
        color: red;
        font-size: 16px;
        font-weight: 600;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
    .ball{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 390px;
        left: 146px;
        // transform: translate(103px,400px);
    }
}


</style>

