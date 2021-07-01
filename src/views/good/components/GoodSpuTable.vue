<template>
  <el-table
    v-loading="listLoading"
    :data="tableData"
    width="100%"
    border
  >

    <el-table-column
      prop="goodId"
      label="编号"
      width="50"
      sortable
    />

    <el-table-column
      prop="goodName"
      label="名称"
      width="140"
      sortable
    />

    <el-table-column
      prop="typeId"
      label="分类"
      width="140"
      sortable
    />

    <el-table-column
      prop="soldNum"
      label="销量"
      width="100"
      sortable
    />

    <el-table-column
      prop="status"
      label="状态"
      width="60"
      sortable
    />

    <el-table-column
      prop="context"
      label="介绍"
      width="100"
      sortable
    />

    <el-table-column
      prop="createTime"
      label="创建时间"
      sortable
      width="130"
    />

    <el-table-column
      prop="updateTime"
      label="更新时间"
      sortable
      width="130"
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
</template>

<script>
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
  methods: {
    handleEdit(row) {
      this.$router.push({
        name: 'good_edit',
        params: { id: row.goodId }
      })
    },
    // filterHandler(value, row, column) {
    //   const property = column['property']
    //   if (row[property]) {
    //     return row[property].indexOf(value) > -1
    //   } else {
    //     return false
    //   }
    // },

    handleClick(val) {
      this.$router.push({
        name: 'good_detail',
        params: { id: val.goodId }
      })
    }
  }
}
</script>
