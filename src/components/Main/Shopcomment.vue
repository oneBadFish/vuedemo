<template>
    <div class="content">
        <comment :id="$route.params.id"></comment>
    </div>
</template>
<script>
import Comment from '@/components/Main/Comment'
export default {
    components : {
        Comment
    }
}
</script>
<style lang="less" scoped>
    .content{
        padding: 5px 8px;
    }
</style>


