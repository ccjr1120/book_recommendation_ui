<template>
  <div class="fillcontain">
    <PageHeader v-bind:pageInfo="pageInfo"></PageHeader>
    <el-main>
      <el-card class="box-card">
        <el-row>
          <el-col :span="8" v-for="o in 4" :key="o">
            <BookCard v-bind:book="book"></BookCard>
          </el-col>
        </el-row>
        <div style="padding-left:30%;padding-top:10px;">
          <div style="float:left">
            <el-button v-if="pageNumber == 0" type="text" disabled icon="el-icon-arrow-left">上一页</el-button>
            <el-button v-else @click="pageNumber-=1" type="text" icon="el-icon-arrow-left">上一页</el-button>
          </div>
          <div style="padding-right:44%;float:right">
            <el-button @click="pageNumber+=1" type="text">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
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
        name: "我的收藏",
        parent: "home"
      },
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
  components:{
      BookCard
  }
};
</script>

<style>
</style>