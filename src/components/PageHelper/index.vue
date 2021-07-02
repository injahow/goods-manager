<template>
  <div class="block" style="text-align:center;">
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[10, 50, 100, 200, 400]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
export default {
  name: 'PageHelper',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    reGetList: {
      type: Function,
      default() {}
    }
  },
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.reGetList(this.currentPage, val)
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.reGetList(val, this.pageSize)
    }
  }
}
</script>
