<template>
    <div class="content">
        <!-- 商品列表 -->
        <div class="shops">
            <div class="mui-card" v-for="(item,index) in shopCars" :key="index">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getCarSelected[item.id]"
                        @change="seleChan(item.id,$store.getters.getCarSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1 class="tit">{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numcar :init = "$store.getters.getallshop[item.id]"
                                :shopid="item.id"></numcar>
                                <a href="#" @click.prevent="remove(item.id,index)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>

        <!-- 商品结算 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
                            <p>总计(不含运费)：</p>
                            <P>
                                    已勾选
                                <span class="red">{{$store.getters.getAllCarSel.count}}</span>
                                件，总价￥
                                <span class="red">{{$store.getters.getAllCarSel.amount}}</span>
                                元
                            </P>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
    </div>
</template>

<script>
import Numcar from '@/components/Shop/NumCar'
export default {
    components : {
        Numcar
    },
    data() {
        return {
            shopCars : []
        }
    },
    created() {
        this.getCarlist()
    },
    methods: {
        getCarlist (){
            var idarr= []
            this.$store.state.car.forEach(item => {
                idarr.push(item.id)
            });

            if(idarr.length<=0){
                return;
            }

            this.$http.get('api/goods/getshopcarlist/' +idarr.join(",")).then(res=>{
                console.log(res.body)
                this.shopCars = res.body.message
            })
        },
        remove(id,index){
            this.shopCars.splice(index,1)
            this.$store.commit('removeCar',id)
        },
        seleChan(id,val){
            this.$store.commit('updataCarSele',{id,selected:val})
        }
    },
}
</script>

<style lang="less" scoped>
    .content{
        background-color: #eee;
        overflow: hidden;
        .shops{
            .mui-card-content-inner{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            img{
                width: 60px;
                height: 60px;
                margin : 0  8px;
            }
            h1{
                font-size: 13px;margin-bottom: 15px;
            }
            a{
                color: rgb(62, 166, 226);
            }
            .info{
                  .price{
                    color: red;
                    font-weight: 600
                }
            }
        }
        .jiesuan{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .red{
                color: red;
                font-weight: 600;
                font-size: 16px;
            }
        }
    }
</style>


