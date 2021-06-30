<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      width="100%"
      border
    >
      <el-table-column label="封面" width="120">
        <template slot-scope="scope">
          <el-image
            :src="scope.row.cover"
            alt
            style="width: 100pxheight: 130px"
            fit="fit"
          />
        </template>
      </el-table-column>

      <el-table-column
        prop="name"
        label="名称"
        width="120"
      />

      <el-table-column prop="pinyin" label="拼音" />

      <el-table-column
        prop="tags"
        label="标签"
        width="120"
      >
        <template slot-scope="scope">
          <el-tag
            v-for="tag in scope.row.tags"
            :key="tag"
            effect="plain"
          >{{ tag }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="introduction" label="介绍" />
      <el-table-column prop="region" label="地区" />
      <el-table-column prop="staff" label="STAFF" />
      <el-table-column prop="actor" label="声优" />
      <el-table-column prop="publish" label="时间" width="90" />

    </el-table>
  </div>
</template>

<script>
// import { getDetail } from '@/api/good'
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    // const id = this.$route.params.id
    /*
    getDetail(id).then((res) => {
      this.tableData = [res.data]
    })
    */
  }
}
</script>
