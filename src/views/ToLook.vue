<template>
  <div class="fillcontain">
    <PageHeader v-bind:pageInfo="pageInfo"></PageHeader>
    <el-main>
      <el-card style="padding-top:20px;" class="box-card">
        <el-row style="text-align:center;line-height:20px;">
          <el-col :span="4" v-for="o in 6" :key="o">
            <el-card shadow="hover">
            <img
              :src="require('../assets/little_women.jpg')"
              title="点击查看详情"
              alt="书籍封面"
              rel="v:photo"
              style="width: 175px;height: 242px;"
            />
            <br />
            <span>小妇人</span>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="text-align:center;padding-top:20px;">
          <el-col :span="4" v-for="o in 6" :key="o">
            <img
              :src="require('../assets/little_women.jpg')"
              title="点击查看详情"
              alt="书籍封面"
              rel="v:photo"
              style="width: 175px;height: 242px;"
            />
            <br />
            <span>小妇人</span>
          </el-col>
        </el-row>
        <div style="padding-left:30%;padding-top:10px;">
          <div style="float:left">
            <el-button v-if="pageNumber == 0" type="text" disabled icon="el-icon-arrow-left">上一页</el-button>
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
export default {
  data() {
    return {
      pageInfo: {
        name: "待看列表",
        parent: "/home"
      },
      pageNumber:0,
    };
  }
};
</script>

<style>
</style>