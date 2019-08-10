<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入..." v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="send">发表评论</mt-button>
    <div class="com-list">
      <div class="com-item" v-for="(item,index) in comment" :key="index">
        <div class="com-tit">
          <span>第{{index+1}}楼</span>
          <span>用户：{{item.user_name}}</span>
          <span>发表时间：{{item.add_time | dateFormat}}</span>
        </div>
        <div class="com-body">
            {{item.content  === "undefined" ? '这个用户实在高冷，啥也没留' : item.content}}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="more">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            comment : [] ,
            pageIndex : 1,
            msg : ""
        }
    },
    props:["id"],
    mounted() {
        this.getCom()
    },
    methods: {
        getCom () {
            this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex).then(res=>{
                console.log(res.body)
                //this.comment=res.body.message
                this.comment = this.comment.concat(res.body.message)
            })
        },
        more(){
            this.pageIndex++;
            this.getCom()
        },
        send(){
            if(this.msg.trim().length===0){
              return Toast('内容不能为空')
            }

            this.$http.post('api/postcomment/'+ this.$route.params.id,{
                content : this.msg.trim()
            }).then(
                function(res){
                    var cmt = { 
                        user_name : "匿名用户",
                        add_time : Date.now(),
                        content : this.msg.trim()
                        
                    };
                    this.comment.unshift(cmt)
                    this.msg = ''
                }
            )
        }

    },
};
</script>

<style lang="less" scoped>
.comment {
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  textarea {
    margin-top: 20px;
    font-size: 14px;
    padding: 0 5px;
    height: 90px;
  }
  .com-list {
      .com-item{
          margin: 10px 0;
          font-size: 13px;
          .com-tit{
              line-height: 35px;
              background-color: #ccc;
              display: flex;
              justify-content: space-between;
          }
          .com-body{
              line-height: 35px;
              text-indent:0.5rem;
          }
      }
  }
}
</style>


