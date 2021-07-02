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
import { search } from '@/api/good'
// import { getOptions } from '@/api/user'

export default {
  data() {
    return {
      name: '',
      tableData: [],
      listLoading: false,
      tags_filters: []
    }
  },
  mounted() {
    // 获取用户options
    // getOptions('good').then(res => {
    //   res.data.tags.forEach((i) => {
    //     this.tags_filters.push({
    //       'text': i,
    //       'value': i
    //     })
    //   })
    // })
  },
  methods: {
    searchForm() {
      this.tableData = []
      this.listLoading = true
      search(this.name).then(res => {
        this.tableData = res.data
        this.listLoading = false
      }).catch(() => {
        this.$message('请求异常！')
        this.listLoading = false
      })
    },

    handleEdit(index, row) {
      this.$router.push({
        name: 'good_edit',
        params: { id: row._id }
      })
    },
    handleClick(val) {
      this.$router.push({
        name: 'good_detail',
        params: { id: val._id }
      })
    }
  }
}
</script>

