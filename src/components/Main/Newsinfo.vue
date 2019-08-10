<template>
    <div class="content">
        <!-- 标题 -->
       <h3 class="title">{{newinfo.title}}</h3>
       <!-- 时间 -->
       <p class="send">
           <span>发表时间：{{newinfo.add_time }}</span>
           <span>点击：{{newinfo.click}}次</span>
       </p>
       <!-- 内容 -->
       <div v-html="newinfo.content" class="cont">
           <!-- {{newinfo.content}} -->
       </div>
       <!-- 子组件评论 -->
       <comment :id="this.id"></comment>
    </div>
</template>

<script>
import Comment from '@/components/Main/Comment'
export default {
    data() {
        return {
            id : this.$route.params.id,
            newinfo : ''
        }
    },
    methods: {
        getInfo(){
            this.$http.get('api/getnew/'+ this.id).then(res=>{
                // console.log(res.body)
                this.newinfo = res.body.message[0]
            })
        }
    },
    mounted() {
        this.getInfo()
    },
    components : {
        Comment
    }
}
</script>

<style lang="less" scoped>
.content{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        color: red;
        margin: 15px 0;
    }
    .send{
        font-size: 13px;
        color: #226af2;
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
        border-bottom: 1px solid #ccc;
    }
    .cont{
        img{
            width: 100%;
        }
    }
}
</style>


