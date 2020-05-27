<template>
  <el-card shadow="hover" :body-style="{ padding: '0px' }">
    <div v-if="book.length != 0">
      <div>21</div>
      <div style="float:left;width:46%">
        <img
          :src="require('../assets/little_women.jpg')"
          title="点击查看详情"
          :alt="book.name"
          rel="v:photo"
          style="width: 100%;height: 100%;"
        />
      </div>
      <div class="book_describe">
        书名:{{book.name}}
        <br />
        作者: {{book.author}}
        <br />
        副标题: {{book.subtitle}}
        <br />
        多少人读过: {{book.fans}}
        <br />
        多少人想读:{{book.reFans}}
        <br />
        评分: {{book.rank}}
        <br />
        <el-button type="text" plain>想读</el-button>
        <span style="padding-left:30px;">
          <el-button type="text" plain icon="el-icon-star-off">已读</el-button>
        </span>
      </div>
    </div>
    <div v-else>"213"</div>
  </el-card>
</template>

<script>
export default {
  props: ["book"],
};
</script>

<style>
.book_describe {
  float: right;
  width: 50%;
  line-height: 26px;
  font-size: 14px;
}
</style>