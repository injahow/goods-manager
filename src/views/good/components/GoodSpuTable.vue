<template>
  <el-table
    v-loading="listLoading"
    :data="tableData"
    width="100%"
    border
  >

    <el-table-column
      label="封面"
      width="130"
    >
      <template slot-scope="scope">
        <el-image
          :src="scope.row.cover"
          alt
          style="width:100px;height:130px;"
          fit="fit"
        />
      </template>
    </el-table-column>

    <el-table-column
      prop="name"
      label="名称"
      width="140"
      sortable
    />

    <el-table-column
      prop="tags"
      label="标签"
      width="140"
      :filters="tagsFilters"
      :filter-method="filterHandler"
    >
      <template slot-scope="scope">
        <el-tag
          v-for="tag in scope.row.tags"
          :key="tag"
          effect="plain"
        >{{ tag }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      prop="publish"
      label="时间"
      sortable
      width="90"
    />

    <el-table-column
      label="操作"
      width="150"
    >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleClick(scope.row)"
        >查看</el-button>
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
        name: 'book_edit',
        params: { id: row._id }
      })
    },
    filterHandler(value, row, column) {
      const property = column['property']
      if (row[property]) {
        return row[property].indexOf(value) > -1
      } else {
        return false
      }
    },
    handleClick(val) {
      this.$router.push({
        name: 'book_detail',
        params: { id: val._id }
      })
    }
  }
}
</script>
