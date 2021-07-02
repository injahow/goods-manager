<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="tableData"
      width="100%"
      border
    >

      <el-table-column
        prop="typeId"
        label="编号"
        width="75"
        sortable
      />

      <el-table-column
        prop="typeName"
        label="名称"
        width="140"
        sortable
      />

      <el-table-column
        prop="typeDesc"
        label="介绍"
        width="400"
      />

      <el-table-column
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleClick(scope.row)"
          >详情</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.row)"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
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
      this.tableData = res.data
      this.listLoading = false
    }).catch(() => {
      this.listLoading = false
    })
  },
  methods: {
    handleDelete(row) {

    },
    handleEdit(row) {
      this.$router.push({
        name: 'good_type_edit',
        params: { id: row.typeId }
      })
    }
  }
}
</script>
