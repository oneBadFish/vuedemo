<template>
    <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/Meg">消息</router-link>
        <router-link to="/Shop">购物车</router-link>
        <router-link to="/Search">搜索</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .nav{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        height: 40px;
        line-height: 40px;
        a{
            display: block;
            flex: 1;
            text-align: center;
        }
        .router-link-exact-active{
            color: #2095dd;
            border-bottom: 2px solid #2095dd
        }
    }
</style>


