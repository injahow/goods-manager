<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="tableData"
      width="100%"
      border
    >

      <el-table-column
        prop="skuId"
        label="编号"
        width="75"
        sortable
      />

      <el-table-column
        prop="skuName"
        label="名称"
        width="140"
        sortable
      />

      <el-table-column
        prop="skuImg"
        label="图片"
        width="140"
        sortable
      >
        <template slot-scope="scope">
          <div class="demo-image__preview">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.skuImg"
              :preview-src-list="[scope.row.skuImg]"
            />
          </div>
        </template>
      </el-table-column>

      <el-table-column
        prop="paramsMap"
        label="参数"
        width="100"
      />

      <el-table-column
        prop="originalPrice"
        label="原价"
        width="100"
      />

      <el-table-column
        prop="sellPrice"
        label="售价"
        width="100"
      />

      <el-table-column
        prop="createTime"
        label="创建时间"
        sortable
        width="190"
      >
        <template slot-scope="scope">
          <div class="block">
            <el-date-picker
              v-model="scope.row.createTime"
              size="mini"
              readonly
              type="date"
              format="yyyy 年 MM 月 dd 日"
            />
          </div>
        </template>
      </el-table-column>

      <el-table-column
        prop="updateTime"
        label="更新时间"
        sortable
        width="190"
      >
        <template slot-scope="scope">
          <div class="block">
            <el-date-picker
              v-model="scope.row.updateTime"
              size="mini"
              readonly
              type="date"
              format="yyyy 年 MM 月 dd 日"
            />
          </div>
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
  </div>
</template>

<script>
import { deleteSku, getSameSku } from '@/api/good_sku'

export default {
  name: 'GoodDetail',
  data() {
    return {
      listLoading: false,
      tableData: {}
    }
  },
  mounted() {
    const id = this.$route.params.id
    getSameSku(id).then(res => {
      if (res && res.code === 200) {
        this.tableData = res.data
      }
    })
  },
  methods: {
    handleEdit(row) {
      // this.$router.push({
      //   name: 'sku_edit',
      //   params: { id: row.skuId }
      // })
    },
    handleDelete(val) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteSku(val.skuId).then((res) => {
          this.$message(res.message)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
<style>
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 170px;
}
</style>
