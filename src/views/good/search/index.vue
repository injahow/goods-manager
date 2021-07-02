<template>
  <div class="app-container">
    <el-form>
      <el-form-item>
        <el-row
          type="flex"
          class="row-bg"
          justify="center"
        >
          <el-form-item>
            <el-input v-model="name" placeholder="请输入商品名称" />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="reGetList()"
            >搜索</el-button>
          </el-form-item>
        </el-row>
      </el-form-item>
    </el-form>
    <GoodSpuTable
      :list-loading="listLoading"
      :table-data="tableData"
    />
    <PageHelper
      :total="total"
      :re-get-list="reGetList"
    />
  </div>
</template>

<script>
import { searchGoodByName } from '@/api/good'
import PageHelper from '@/components/PageHelper'
import GoodSpuTable from '@/views/good/components/GoodSpuTable'

export default {
  components: {
    GoodSpuTable, PageHelper
  },
  data() {
    return {
      name: '',
      tableData: [],
      listLoading: false,
      total: 0
    }
  },
  mounted() {
  },
  methods: {
    reGetList(no, size) {
      this.tableData = []
      this.listLoading = true
      searchGoodByName(this.name, no, size).then(res => {
        this.tableData = res.data.list
        this.total = res.data.count
        this.listLoading = false
        if (res.data.count === 0) {
          this.$message.info('未搜索到结果！')
        }
      }).catch(() => {
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

