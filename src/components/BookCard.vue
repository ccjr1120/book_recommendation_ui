<template>
  <el-card shadow="hover">
    <div>
      <div style="float:left;width:46%">
        <img
        :src="require('../assets/little_women.jpg')"
        title="点击查看详情"
        :alt="book.name"
        rel="v:photo"
        style="width: 135px;height: 200px;"
        />
      </div>
      <div class="book_describe">
        书名:{{book.name}}
        <br />作者: {{book.author}}
        <br />副标题: {{book.subtitle}}
        <br />多少人读过: {{book.fans}}
        <br />评分: {{book.rank}}
        <br />
        <el-button type="text" plain>想读</el-button>
        <span style="padding-left:30px;">
          <el-button type="text" plain icon="el-icon-star-off">已读</el-button>
        </span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["book"]
};
</script>

<style>
.book_describe{
  float: right;
  width: 50%;
  line-height: 30px;
  font-size: 14px;
}
</style>