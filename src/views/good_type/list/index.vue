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
        width="80"
        sortable
      />

      <el-table-column
        prop="typeName"
        label="名称"
        sortable
      />

      <el-table-column
        label="介绍"
        width="100"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="dialogVisible = true; form_context = scope.row.typeDesc;"
          >查看</el-button>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)"
          >编辑</el-button>
          <el-button
            type="danger"
            size="mini"
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="介绍"
      :visible.sync="dialogVisible"
      width="60%"
    >
      <span>{{ form_context }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import { deleteGoodType, getList } from '@/api/good_type'

export default {
  data() {
    return {
      listLoading: true,
      tableData: [],
      dialogVisible: false,
      form_context: ''
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
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteGoodType(row.typeId).then((res) => {
          this.$message(res.message)
          this.listLoading = true
          getList().then(res => {
            this.tableData = res.data
            this.listLoading = false
          }).catch(() => {
            this.listLoading = false
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
