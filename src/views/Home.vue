<template>
  <div class="fillcontain">
    <PageHeader v-bind:pageInfo="pageInfo"></PageHeader>
    <el-main>
      <el-radio v-model="bookListMode" label="0">随机</el-radio>
      <el-radio v-model="bookListMode" label="1">评分</el-radio>
      <el-radio v-model="bookListMode" label="2">时间</el-radio>

      <el-card class="box-card">
        <el-row>
          <el-col :span="6" v-for="o in 4" :key="o">
            <el-card shadow="hover">
              <div>
                <div style="float:left;width:46%">
                  <img
                    :src="localBookImg"
                    title="点击看大图"
                    alt="小妇人"
                    rel="v:photo"
                    style="width: 135px;height: 200px;"
                  />
                </div>
                <div class="book">
                  书名:《小妇人》
                  <br />作者: 路易莎·梅·奥尔科特
                  <br />副标题: 无
                  <br />原作名: Little Women
                  <br />评分: 9.1
                  <br />
                  <el-button type="text" plain>想读</el-button>
                  <span style="padding-left:30px;">
                    <el-button type="text" plain icon="el-icon-star-off">已读</el-button>
                  </span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" v-for="o in 4" :key="o">
            <el-card shadow="hover">
              <div>
                <div style="float:left;width:46%">
                  <img
                    :src="localBookImg"
                    title="点击看大图"
                    alt="小妇人"
                    rel="v:photo"
                    style="width: 135px;height: 200px;"
                  />
                </div>
                <div class="book">
                  书名:《小妇人》
                  <br />作者: 路易莎·梅·奥尔科特
                  <br />副标题: 无
                  <br />原作名: Little Women
                  <br />评分: 9.1
                  <br />
                  <el-button type="text" plain>想读</el-button>
                  <span style="padding-left:30px;">
                    <el-button type="text" plain icon="el-icon-star-off">已读</el-button>
                  </span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div style="padding-left:26%;padding-top:10px;">
          <div style="float:left">
            <el-button
              v-if="pageNumber == 0"
              type="text"
              disabled
              plain
              icon="el-icon-arrow-left"
            >上一页</el-button>
            <el-button v-else @click="pageNumber-=1" type="text" plain icon="el-icon-arrow-left">上一页</el-button>
          </div>
          <div style="padding-right:34%;float:right">
            <el-button @click="pageNumber+=1" type="text" plain icon="el-icon-search">刷新一下</el-button>
          </div>
        </div>
      </el-card>
    </el-main>
  </div>
</template>

<script>
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
      pageNumber: 0
    };
  }
};
</script>
<style scoped>
.box-card {
  height: 800px;
}
.el-col {
  padding-left: 10px;
  padding-top: 20px;
}
.book {
  float: right;
  width: 50%;
  line-height: 30px;
  font-size: 14px;
}
</style>