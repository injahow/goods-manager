<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="tableData"
      width="100%"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />

      <el-table-column
        prop="commentId"
        label="编号"
        width="75"
        sortable
      />

      <el-table-column
        prop="member.memberName"
        label="用户"
        width="100"
        sortable
      >
        <template slot-scope="scope">
          <el-tag effect="plain">
            {{ scope.row.member.memberName }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column
        prop="content"
        label="内容"
        width="400"
      />

      <el-table-column
        prop="createTime"
        label="创建时间"
        width="200"
        sortable
      >
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.createTime"
            size="mini"
            readonly
            type="date"
            format="yyyy 年 MM 月 dd 日"
          />
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        width="150"
      >
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      v-show="showDelete"
      type="danger"
      size="mini"
      @click="deleteByIds()"
    >删除选中</el-button>
    <PageHelper
      :current-page="currentPage"
      :total="total"
      :re-get-list="reGetList"
    />
  </div>
</template>

<script>
import PageHelper from '@/components/PageHelper'
import { getList, deleteCommentById } from '@/api/comment'

export default {
  components: {
    PageHelper
  },
  data() {
    return {
      listLoading: true,
      tableData: [],
      currentPage: 1,
      total: 1,
      pageNo: 0,
      pageSize: 0,
      multipleSelection: [],
      commentIds: [],
      showDelete: false
    }
  },
  mounted() {
    this.reGetList()
  },
  methods: {
    reGetList(no, size) {
      this.pageNo = no
      this.pageSize = size
      this.tableData = []
      this.listLoading = true
      getList(no, size).then(res => {
        this.total = res.data.count
        this.tableData = res.data.list
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleDelete(row) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteCommentById(row.commentId).then((res) => {
          this.$message(res.message)
          this.reGetList(this.pageNo, this.pageSize)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleSelectionChange(val) {
      if (val.length === 0) {
        this.showDelete = false
      } else {
        this.showDelete = true
      }
      this.multipleSelection = val
      this.commentIds = []
      val.forEach(row => {
        this.commentIds.push(row.commentId)
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
