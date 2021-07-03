<template>
  <div class="app-container">
    <el-form>
      <el-form-item>
        <el-row
          type="flex"
          class="row-bg"
          justify="center"
        >
          <el-tabs v-model="tabActiveName" type="card">
            <el-tab-pane label="按名称搜索" name="名称">
              <el-input v-model="name" placeholder="请输入搜索名称" />
            </el-tab-pane>
            <el-tab-pane label="按类型搜索" name="类型">
              <el-select
                v-model="typeId"
                placeholder="请选择搜索类型"
                style="width: 100%"
              >
                <el-option
                  v-for="item in typeList"
                  :key="item.typeId"
                  :label="item.typeName"
                  :value="item.typeId"
                />
              </el-select>
            </el-tab-pane>
          </el-tabs>

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
import { searchGoodByName, searchGoodByType } from '@/api/good'
import PageHelper from '@/components/PageHelper'
import GoodSpuTable from '@/views/good/components/GoodSpuTable'
import { getNameList } from '@/api/good_type'
export default {
  components: {
    GoodSpuTable, PageHelper
  },
  data() {
    return {
      name: '',
      typeId: '',
      tableData: [],
      listLoading: false,
      total: 0,
      typeList: [],
      select_id: 0,
      tabActiveName: '名称'
    }
  },
  mounted() {
    const type_id = this.$route.params.id
    if (type_id && type_id > 0) {
      this.typeId = type_id
      this.tabActiveName = '类型'
      this.reGetList()
    }
    getNameList().then(res => {
      this.typeList = res.data
    })
  },
  methods: {
    reGetList(no, size) {
      this.tableData = []
      this.listLoading = true
      if (this.tabActiveName === '名称') {
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
      } else {
        searchGoodByType(this.typeId, no, size).then(res => {
          this.tableData = res.data.list
          this.total = res.data.count
          this.listLoading = false
          if (res.data.count === 0) {
            this.$message.info('未搜索到结果！')
          }
        }).catch(() => {
          this.listLoading = false
        })
      }
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

