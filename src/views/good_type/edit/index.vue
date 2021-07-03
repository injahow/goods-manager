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
          size="500"
          placeholder="请输入介绍"
          :autosize="{minRows:4,maxRows:8}"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit()">提交</el-button>
        <el-button @click="onClose()">取消</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
import { editGoodType, getGoodTypeById } from '@/api/good_type'
import { compareForm } from '@/utils/check-changes'

export default {
  name: 'GoodTypeEdit',
  data() {
    return {
      formData: {}
    }
  },
  mounted() {
    const id = this.$route.params.id
    getGoodTypeById(id).then(res => {
      this.old_good_form = res.data
      this.formData = Object.assign({}, this.old_good_form)
    })
  },
  methods: {
    onSubmit() {
      const res = compareForm(this.formData, this.old_good_form)
      if (res.is_changed) {
        editGoodType(this.formData).then((res) => {
          if (res && res.code === 200) {
            this.$message(res.message)
            this.$router.push({ name: 'good_type_list' })
          }
        })
      } else {
        this.$message('未修改内容!')
      }
    }
  }
}
</script>
