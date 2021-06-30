<template>
  <div class="app-container">
    <BookTable
      :list-loading="listLoading"
      :table-data="tableData"
      :tags-filters="tags_filters"
    />
  </div>
</template>

<script>
import BookTable from '@/views/book/components/BookTable'
// import { getList } from '@/api/book'
// import { getOptions } from '@/api/user'

export default {
  name: 'BookList',
  components: {
    BookTable
  },
  data() {
    return {
      listLoading: true,
      tableData: [],
      tags_filters: []
    }
  },
  mounted() {
    this.listLoading = true
    // getList().then(res => {
    //   this.tableData = res.data
    //   this.listLoading = false
    // }).catch(() => {
    //   this.listLoading = false
    // })
    // // 获取用户options
    // getOptions('book').then(res => {
    //   res.data.tags.forEach((i) => {
    //     this.tags_filters.push({
    //       'text': i,
    //       'value': i
    //     })
    //   })
    // })
  }
}
</script>
