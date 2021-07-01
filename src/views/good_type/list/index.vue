<template>
  <div class="app-container">
    <GoodSpuTable
      :list-loading="listLoading"
      :table-data="tableData"
    />
  </div>
</template>

<script>

import { getList } from '@/api/good_type'

export default {
  data() {
    return {
      listLoading: true,
      tableData: []
    }
  },
  mounted() {
    this.listLoading = true
    getList().then(res => {
      this.pageNo = res.data.pageNo
      this.total = res.data.total
      this.tableData = res.data.list
      this.listLoading = false
    }).catch(() => {
      this.listLoading = false
    })
  }
}
</script>
