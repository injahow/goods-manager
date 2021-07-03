<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="tableData"
      width="100%"
      border
    >

      <el-table-column
        prop="goodId"
        label="编号"
        width="75"
        sortable
      />

      <el-table-column
        prop="goodName"
        label="名称"
        width="140"
        sortable
      />

      <el-table-column
        prop="goodType"
        label="分类"
        width="140"
        sortable
      >
        <template slot-scope="scope">
          <el-link
            type="primary"
            @click="findGoodByTypeId(scope.row.goodType.typeId)"
          >
            {{ scope.row.goodType.typeName }}
          </el-link>
        </template>
      </el-table-column>

      <el-table-column
        prop="soldNum"
        label="销量"
        width="80"
        sortable
      />

      <el-table-column
        label="状态"
        width="70"
      >
        <template slot-scope="scope">
          <span :style="'color:'+['#F56C6C','#E6A23C','#67C23A'][scope.row.status+1]">
            {{ lable[scope.row.status+1] }}
          </span>
        </template>
      </el-table-column>

      <el-table-column
        label="介绍"
        width="80"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="dialogVisible = true; form_context = scope.row.context;"
          >查看</el-button>
        </template>
      </el-table-column>

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
        width="230"
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
      width="30%"
    >
      <span>{{ form_context }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { deleteGood } from '@/api/good'

export default {
  name: 'GoodSpuTable',
  props: {
    listLoading: {
      type: Boolean,
      default: true
    },
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      lable: [
        '删除',
        '下架',
        '上架'
      ],
      dialogVisible: false,
      form_context: ''
    }
  },
  methods: {
    handleEdit(row) {
      this.$router.push({
        name: 'good_edit',
        params: { id: row.goodId }
      })
    },
    findGoodByTypeId(id) {
      this.$router.push({
        name: 'good_search',
        params: { id }
      })
    },
    handleClick(val) {
      this.$router.push({
        name: 'good_detail',
        params: { id: val.goodId }
      })
    },
    handleDelete(val) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteGood(val.goodId).then((res) => {
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
