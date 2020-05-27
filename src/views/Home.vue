<template>
  <div class="fillcontain">
    <PageHeader v-bind:pageInfo="pageInfo"></PageHeader>
    <el-main>
      <el-radio v-model="bookListMode" label="time">时间</el-radio>
      <el-radio v-model="bookListMode" label="rank">评分</el-radio>
      <el-radio v-model="bookListMode" label="random">随机</el-radio>
      <el-card class="box-card">
        <el-row v-if="books.length != 0">
          <el-col :span="8" v-for="book in books" :key="book.label">
            <BookCard v-bind:book="book"></BookCard>
          </el-col>
        </el-row>
        <el-alert v-else title="没有相关书籍的信息" show-icon center effect="dark" type="info" :closable="false"></el-alert>
        <div style="padding-left:30%;padding-top:10px;">
          <div style="float:left">
            <el-button v-if="hasPrevPage" type="text" disabled icon="el-icon-arrow-left">上一页</el-button>
          </div>
          <div style="padding-right:44%;float:right">
            <el-button
              v-if="hasNextPage"
              @click="pageNumber+=1"
              type="text"
              plain
              icon="el-icon-search"
            >下一页</el-button>
          </div>
        </div>
      </el-card>
    </el-main>
  </div>
</template>

<script>
import BookCard from "../components/BookCard";
import { getHomeBooks } from "../api/index";
export default {
  data() {
    return {
      pageInfo: {
        name: "首页·书籍推荐",
        parent: null
      },
      bookListMode: "time",
      nextPageNumber: 0,
      hasNextPage: false,
      hasPrevPage: false,
      pageSize: 8,
      books: []
    };
  },
  mounted() {
    getHomeBooks(this.nextPageNumber, this.pageSize).then(resp => {
      var data = resp.data;
      if (data.success) {
        this.nextPageNumber += 1;
        this.hasPrevPage = data.data.hasPreviousPage;
        this.hasNextPage = data.data.hasNextPage;
        this.books = data.data.list;
      } else {
        this.$message.error("获取首页数据失败, 错误原因为:" + data.errMsg);
      }
    });
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