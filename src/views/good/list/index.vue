<template>
  <div class="app-container">
    <GoodSpuTable
      :list-loading="listLoading"
      :table-data="tableData"
    />
  </div>
</template>

<script>
import GoodSpuTable from '@/views/good/components/GoodSpuTable'
import { getList } from '@/api/good'

export default {
  name: 'GoodSpuList',
  components: {
    GoodSpuTable
  },
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
