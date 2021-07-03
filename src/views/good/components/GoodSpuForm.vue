<template>
  <el-form
    ref="formData"
    :model="formData"
    label-width="50px"
    style="width: 100%"
  >
    <el-form-item label="名称">
      <el-input v-model="formData.goodName" />
    </el-form-item>

    <el-form-item label="介绍">
      <el-input
        v-model="formData.context"
        type="textarea"
        size="500"
        placeholder="请输入介绍"
        :autosize="{minRows:4,maxRows:8}"
      />
    </el-form-item>

    <el-form-item label="类型">
      <el-select
        v-model="formData.typeId"
        placeholder="请选择类型"
        style="width: 100%"
      >
        <el-option
          v-for="item in typeList"
          :key="item.typeId"
          :label="item.typeName"
          :value="item.typeId"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="销量">
      <el-input v-model="formData.soldNum" />
    </el-form-item>

    <el-form-item label="状态">
      <el-select
        v-model="formData.status"
        placeholder="请选择状态"
        style="width: 100%"
      >
        <el-option
          v-for="item in statusOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit(formData)">提交</el-button>
      <el-button @click="onClose()">取消</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
  name: 'GoodSpuForm',
  props: {
    formData: {
      type: Object,
      default() {
        return {
          goodName: '',
          context: '',
          typeId: '',
          soldNum: '',
          status: ''
        }
      }
    },
    typeList: {
      type: Array,
      default() {
        return []
      }
    },
    onSubmit: {
      type: Function,
      default() {}
    },
    statusOptions: {
      type: Array,
      default() {
        return [{
          value: 1,
          label: '上架'
        }, {
          value: 0,
          label: '下架'
        }, {
          value: -1,
          label: '删除'
        }]
      }
    },
    statusValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      status_value: this.formData.status
    }
  },
  mounted() {
    this.status_value = this.formData.status
    /*
    getOptions('book').then(res => {
      this.options = res.data
    })
    */
  },
  methods: {
    onClose() {
      this.$router.go(-1)
    }
  }
}
</script>
