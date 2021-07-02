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
      width="100"
      sortable
    />

    <el-table-column
      label="状态"
      width="70"
    >
      <template slot-scope="scope">
        <el-tag v-if="scope.row.status==1" effect="plain">
          上架
        </el-tag>
        <el-tag v-if="scope.row.status==0" effect="warning">
          下架
        </el-tag>
        <el-tag v-if="scope.row.status==-1" effect="danger">
          删除
        </el-tag>
      </template>
    </el-table-column>

    <el-table-column
      prop="context"
      label="介绍"
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
    findGoodByTypeId(typeId) {
      this.$router.push({
        name: 'good_index',
        params: { typeId }
      })
    },
    handleClick(val) {
      this.$router.push({
        name: 'good_detail',
        params: { id: val.goodId }
      })
    },
    handleDelete(val) {

    }
  }
}
</script>
<style>
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 170px;
}
</style>
