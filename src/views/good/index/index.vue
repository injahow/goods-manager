<template>
  <div class="app-container">
    <el-form
      ref="form"
      :model="form"
      label-width="50px"
      style="width: 100%"
    >
      <el-form-item label="类型">
        <el-radio-group
          v-model="form.type_name"
          @change="resetData"
        >
          <el-radio-button
            v-for="type_name in options.type_name"
            :key="type_name"
            :label="type_name"
            name="type_name"
          />
          <el-button
            icon="el-icon-plus"
            circle
            @click="addOption('type_name')"
          />
          <el-button
            icon="el-icon-minus"
            circle
            @click="delOption('type_name')"
          />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="地区">
        <el-radio-group
          v-model="form.region"
          @change="resetData"
        >
          <el-radio-button
            v-for="region in options.region"
            :key="region"
            :label="region"
            name="region"
          />
          <el-button
            icon="el-icon-plus"
            circle
            @click="addOption('region')"
          />
          <el-button
            icon="el-icon-minus"
            circle
            @click="delOption('region')"
          />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="时间">
        <el-radio-group
          v-model="form.publish"
          @change="resetData"
        >
          <el-radio-button
            v-for="publish in options.publish"
            :key="publish"
            :label="publish"
            name="publish"
          />
          <el-button
            icon="el-icon-plus"
            circle
            @click="addOption('publish')"
          />
          <el-button
            icon="el-icon-minus"
            circle
            @click="delOption('publish')"
          />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="标签">
        <el-radio-group
          v-model="form.tags"
          @change="resetData"
        >
          <el-radio-button
            v-for="tags in options.tags"
            :key="tags"
            :label="tags"
            name="tags"
          />
          <el-button
            icon="el-icon-plus"
            circle
            @click="addOption('tags')"
          />
          <el-button
            icon="el-icon-minus"
            circle
            @click="delOption('tags')"
          />
        </el-radio-group>
      </el-form-item>
    </el-form>
    <GoodSpuTable
      :list-loading="listLoading"
      :table-data="indexData"
      :tags-filters="tags_filters"
    />
  </div>
</template>

<script>
import GoodSpuTable from '@/views/good/components/GoodSpuTable'
// import { getIndex } from '@/api/good'
// import { getOptions } from '@/api/user'

export default {
  name: 'GoodSpuIndex',
  components: {
    GoodSpuTable
  },
  data() {
    return {
      form: {
        type_name: '全部',
        region: '全部',
        publish: '全部',
        tags: '全部'
      },
      indexData: [],
      listLoading: false,
      options: {
        type_name: ['全部'],
        region: ['全部'],
        publish: ['全部', '2020', '2019', '2018', '2017', '2016', '2015'],
        tags: ['全部']
      }
    }
  },
  mounted() {
    this.resetData()
    // getOptions('good').then(res => {
    //   this.options.type_name = ['全部'].concat(res.data.type_name)
    //   this.options.region = ['全部'].concat(res.data.region)
    //   this.options.tags = ['全部'].concat(res.data.tags)

    //   this.tags_filters = []
    //   res.data.tags.forEach((i) => {
    //     this.tags_filters.push({
    //       'text': i,
    //       'value': i
    //     })
    //   })
    // })
  },
  methods: {
    resetData() {
      this.indexData = []
      this.listLoading = true
      // getIndex(this.form)
      //   .then(res => {
      //     this.indexData = res.data
      //     this.listLoading = false
      //   })
      //   .catch(() => {
      //     this.listLoading = false
      //   })
    },
    // 冗余-list
    handleEdit(row) {
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
    },
    addOption(form_name) {
      this.$prompt('请输入选项内容', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
        // inputPattern: / /, // 正则验证规则
        // inputErrorMessage: '格式不正确'
      }).then(({ value }) => {
        // 添加选项
        if (value) {
          this.options[form_name].push(value)
        }
      }).catch(() => { })
    },
    delOption(form_name) {
      const options = this.options[form_name]
      // 保留第一项
      if (options.length > 1) {
        this.options[form_name].pop()
      }
    }
  }
}
</script>

