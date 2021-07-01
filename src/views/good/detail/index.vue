<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      width="100%"
      border
    >

      <el-table-column
        prop="name"
        label="名称"
        width="120"
      />

      <el-table-column
        prop="goodType"
        label="分类"
        width="120"
      />

      <el-table-column prop="introduction" label="介绍" />

      <el-table-column prop="publish" label="时间" width="90" />

    </el-table>
  </div>
</template>

<script>
import { getDetail } from '@/api/good'
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    const goodId = this.$route.params.goodId
    getDetail(goodId).then((res) => {
      this.tableData = [res.data]
    })
  }
}
</script>
