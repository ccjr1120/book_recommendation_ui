<template>
  <div class="fillcontain">
    <PageHeader v-bind:pageInfo="pageInfo"></PageHeader>
    <el-main>书籍推荐</el-main>
  </div>
</template>

<script>
export default {
    data(){
        return{
            pageInfo:{
                name: '首页',
                parent: null
            }
        }
    }
}
</script>