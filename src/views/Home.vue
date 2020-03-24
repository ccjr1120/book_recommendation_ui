<template>
  <div class="fillcontain">
    <PageHeader v-bind:pageInfo="pageInfo"></PageHeader>
    <el-main>
      <el-radio v-model="bookListMode" label="0">随机</el-radio>
      <el-radio v-model="bookListMode" label="1">评分</el-radio>
      <el-radio v-model="bookListMode" label="2">时间</el-radio>

      <el-card class="box-card">
        <el-row>
          <el-col :span="8" v-for="o in 6" :key="o">
            <BookCard v-bind:book="book"></BookCard>
          </el-col>
        </el-row>
        <div style="padding-left:30%;padding-top:10px;">
          <div style="float:left">
            <el-button
              v-if="pageNumber == 0"
              type="text"
              disabled
              icon="el-icon-arrow-left"
            >上一页</el-button>
            <el-button v-else @click="pageNumber-=1" type="text" plain icon="el-icon-arrow-left">上一页</el-button>
          </div>
          <div style="padding-right:44%;float:right">
            <el-button @click="pageNumber+=1" type="text" plain icon="el-icon-search">刷新一下</el-button>
          </div>
        </div>
      </el-card>
    </el-main>
  </div>
</template>

<script>
import BookCard from "../components/BookCard";
export default {
  data() {
    return {
      pageInfo: {
        name: "首页·书籍推荐",
        parent: null
      },
      //单选按钮的选项，三种模式：随机(0),按评分(1)，按时间(2)
      bookListMode: "0",
      localBookImg: require("../assets/little_women.jpg"),
      pageNumber: 0,
      book: {
        name: "小妇人",
        subtitle: "无",
        author: "路易莎·梅·奥尔科特",
        fans: 1723,
        rank: 9.1
      }
    };
  },
  components: {
    BookCard
  }
};
</script>
<style scoped>
.box-card {
  height: 100%;
}
.el-col {
  padding-left: 10px;
  padding-top: 20px;
}
</style>