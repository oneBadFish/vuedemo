<template>
  <div class="content">
    <div class="shoplist">
      <!-- <router-link
        :to="'/Main/Shopinfo/'+ item.id"
        class="shopitem"
        v-for="(item,index) in shoplist"
        :key="index"
      >
        <img :src="item.img_url" alt />
        <h1 class="tit">{{item.title}}</h1>
        <div class="info">
          <p class="price">
            <span class="now">{{item.sell_price}}</span>
            <span class="old">{{item.market_price}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{item.stock_quantity}}件</span>
          </p>
        </div>
      </router-link> -->
      <div class="shopitem" v-for="(item,index) in shoplist" :key="index" @click="godetail(item.id)">
        <img :src="item.img_url" alt />
        <h1 class="tit">{{item.title}}</h1>
        <div class="info">
          <p class="price">
            <span class="now">{{item.sell_price}}</span>
            <span class="old">{{item.market_price}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{item.stock_quantity}}件</span>
          </p>
        </div>
      </div>

      <!-- 加载更多 -->
      <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shoplist: [],
      pageIndex: 1
    };
  },
  methods: {
    getshop() {
      this.$http.get("api/getgoods?pageindex=" + this.pageIndex).then(res => {
        console.log(res.body);
        this.shoplist = this.shoplist.concat(res.body.message);
        // this.shoplist = res.body.message
      });
    },
    getmore() {
      this.pageIndex++;
      this.getshop();
    },
    godetail(id){

        //1.this.$router.push("/Main/Shopinfo" + id)
        //2.this.$router.push({path : "/Main/Shopinfo" +id})
        //3.
        this.$router.push({ name : 'Shopinfo' , params: { id } })
    }
  },
  mounted() {
    this.getshop();
  }
};
</script>
<style lang="less" scoped>
.shoplist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 8px;
  .shopitem {
    padding: 2px;
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
      height: 60%;
    }
    .tit {
      font-size: 14px;
    }
    .info {
      p {
        margin: 0;
        padding: 5px 0;
      }
      .price {
        .now {
          color: red;
          font-size: 16px;
          font-weight: 600;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
      background-color: #eee;
    }
  }
}
</style>

