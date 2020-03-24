<template>
  <div class="fillcontain">
    <PageHeader v-bind:pageInfo="pageInfo"></PageHeader>
    <el-main>
      <div style="padding-top:10px;" v-for="i in 3" :key="i">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div>
            <div style="float:left;">
              <img
                :src="require('../assets/little_women.jpg')"
                title="点击查看详情"
                :alt="comment.bookName"
                rel="v:photo"
                style="width: 125px;height: 140px;"
              />
            </div>
            <div style="padding-left:150px;line-height:30px">
              <h1 style="text-align:center;">{{comment.title}}</h1>
              <span style="padding-left:20px;">{{comment.contentBrief}}</span>
            </div>
          </div>
        </el-card>
      </div>
      <div>
        <div style="padding-left:30%;padding-top:10px;">
          <div style="float:left">
            <el-button v-if="pageNumber == 0" type="text" disabled icon="el-icon-arrow-left">上一页</el-button>
            <el-button v-else @click="pageNumber-=1" type="text" icon="el-icon-arrow-left">上一页</el-button>
          </div>
          <div style="padding-right:44%;float:right">
            <el-button @click="pageNumber+=1" type="text">
              下一页
              <i class="el-icon-right"></i>
            </el-button>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageInfo: {
        name: "我的推荐",
        parent: "home"
      },
      bookListMode: "0",
      localBookImg: require("../assets/little_women.jpg"),
      pageNumber: 0,
      comment: {
        bookName: "小妇人",
        title: "关于Saoirse Ronan主演的《小妇人》原著",
        contentBrief:
          "这里是一些内容的简述这里是一些内容的简述这里是一些内容的简述这里是一些内容的简述这里是一些内容的简述这里是一些内容的简述这里是一些内容的简述这里是一些内容的简述这里是一些内容的简述这里是一些内容的简述这里是一些内容的简述这里是一些内容的简述这里是一些内容的简述..."
      }
    };
  }
};
</script>

<style>
</style>