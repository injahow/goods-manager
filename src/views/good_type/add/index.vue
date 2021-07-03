<template>
  <div class="app-container">

    <el-form
      ref="formData"
      :model="formData"
      label-width="50px"
      style="width: 100%"
    >
      <el-form-item label="名称">
        <el-input v-model="formData.typeName" />
      </el-form-item>

      <el-form-item label="介绍">
        <el-input
          v-model="formData.typeDesc"
          type="textarea"
          size="800"
          placeholder="请输入介绍"
          :autosize="{minRows:8,maxRows:8}"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit(formData)">提交</el-button>
        <el-button @click="onClose()">取消</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>

import { addGoodType } from '@/api/good_type'

export default {
  name: 'GoodTypeAdd',
  data() {
    return {
      formData: {}
    }
  },
  mounted() {
  },
  methods: {
    onSubmit(GoodType) {
      addGoodType(GoodType).then((res) => {
        if (res && res.code === 200) {
          this.$message(res.message)
          this.$router.push({ name: 'good_type_list' })
        }
      })
    },
    onClose() {
      this.$router.go(-1)
    }
  }
}
</script>
