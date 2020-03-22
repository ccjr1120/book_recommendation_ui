<template>
  <el-container class="fillcontain">
    <el-aside>
      <el-row>
        <el-col style="width:90%" :span="12">
          <el-menu default-active="/index" class="el-menu-vertical-demo" router>
            <el-menu-item index="/index">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/recommend">
              <i class="el-icon-share"></i>
              <span slot="title">我的推荐</span>
            </el-menu-item>
            <el-menu-item index="/to-look-list">
              <i class="el-icon-table-lamp"></i>
              <span slot="title">待看列表</span>
            </el-menu-item>
            <el-menu-item index="/already-read">
              <i class="el-icon-finished"></i>
              <span slot="title">已看过</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <router-view />
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="less" scrope>
@import "../assets/style/mixin";
.el-header {
  background-color: #eff2f7;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.el-main {
  color: #333;
  line-height: 40px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 1024px;
}
.popover-width {
  widows: 100px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>