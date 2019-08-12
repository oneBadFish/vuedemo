<template>
    <div class="header">
        <span slot="left" class="back" @click="goback">
            <mt-button icon="back" v-show="flag">返回</mt-button>
        </span>
        某前端项目
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag : false
        }
    },
    methods: {
        goback(){
            this.$router.go(-1)
        }
    },
    watch: {
        '$route.path' : function(val){
            if(val === "/"){
                this.flag=false
            }else{
                this.flag=true
            }
        }
    },
    created() {
        this.flag = this.$route.path ==="/"?false : true
    },
}
</script>

<style lang="less" scoped>
    .header{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: rgb(3, 150, 248);
        color: #fff;
        font-weight: 600;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        // position: relative;
        .back{
            position: absolute;
            left: 0;
            button{
            background-color: transparent;
            color: #fff;
            }
            
        }
    }
</style>


