<template>
  <el-header height="56px">
    <el-page-header
      @back="goBack"
      v-if="pageInfo.parent != null"
      style="float:left; margin-top:16px"
      title
      :content="pageInfo.name"
    ></el-page-header>
    <span v-else style="font-size:18px;">{{pageInfo.name}}</span>
    <div style="float:right; margin-top:10px">
      <el-popover placement="bottom" v-model="popoverVisible">
        <div style="text-align: right; margin: 0;">
          <el-button size="mini" type="text" @click="popoverVisible = false">个人简介</el-button>
          <br />
          <el-button type="text" size="mini">注销</el-button>
        </div>
        <el-avatar slot="reference" :size="40"></el-avatar>
      </el-popover>
    </div>
  </el-header>
</template>
<script>
export default {
  props: ["pageInfo"],
  data() {
    return {
      popoverVisible: false
    };
  },
  methods: {
    goBack() {
      this.$router.push(this.pageInfo.parent);
    }
  }
};
</script>