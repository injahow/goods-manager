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
            <el-input v-model="name" />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="searchForm()"
            >搜索</el-button>
          </el-form-item>
        </el-row>
      </el-form-item>
    </el-form>

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
        :filters="tags_filters"
        :filter-method="filterHandler"
      >
        <template slot-scope="scope">
          <el-tag
            v-for="tag in scope.row.tags"
            :key="tag.name"
            effect="plain"
          >{{ tag }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="region"
        label="地区"
        width="90"
        sortable
      />
      <el-table-column
        prop="publish"
        label="时间"
        sortable
        width="90"
      />

      <el-table-column
        label="操作"
        width="270"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleClick(scope.row)"
          >查看</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { search } from '@/api/good'
// import { getOptions } from '@/api/user'

export default {
  data() {
    return {
      name: '',
      tableData: [],
      listLoading: false,
      tags_filters: []
    }
  },
  mounted() {
    // 获取用户options
    // getOptions('good').then(res => {
    //   res.data.tags.forEach((i) => {
    //     this.tags_filters.push({
    //       'text': i,
    //       'value': i
    //     })
    //   })
    // })
  },
  methods: {
    searchForm() {
      this.tableData = []
      this.listLoading = true
      // search(this.name).then(res => {
      //   this.tableData = res.data
      //   this.listLoading = false
      // })
    },
    // 代码冗余 - 同list .......
    handleEdit(index, row) {
      this.$router.push({
        name: 'good_edit',
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
        name: 'good_detail',
        params: { id: val._id }
      })
    }
  }
}
</script>

