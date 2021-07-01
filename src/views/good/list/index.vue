<template>
  <div class="app-container">
    <GoodSpuTable
      :list-loading="listLoading"
      :table-data="tableData"
    />
    <PageHelper
      :current-page="currentPage"
      :total="total"
      :re-get-list="reGetList"
    />
  </div>
</template>

<script>
import PageHelper from '@/components/PageHelper'
import GoodSpuTable from '@/views/good/components/GoodSpuTable'
import { getList } from '@/api/good'

export default {
  name: 'GoodSpuList',
  components: {
    GoodSpuTable, PageHelper
  },
  data() {
    return {
      listLoading: true,
      tableData: [],
      currentPage: 1,
      total: 1
    }
  },
  mounted() {
    this.reGetList()
  },
  methods: {
    reGetList(no, size) {
      this.tableData = []
      this.listLoading = true
      getList(no, size).then(res => {
        this.total = res.data.count
        this.tableData = res.data.list
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
      })
    }
  }
}
</script>
