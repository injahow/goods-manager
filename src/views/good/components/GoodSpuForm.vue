<template>
  <el-form
    ref="formData"
    :model="formData"
    label-width="50px"
    style="width: 100%"
  >
    <el-form-item label="名称">
      <el-input v-model="formData.goodName" />
      <el-button v-if="resetButtonShow" @click="resetValue('name')">重置</el-button>
    </el-form-item>

    <el-form-item label="详情">
      <el-input
        v-model="formData.context"
        type="textarea"
        size="500"
        placeholder="请输入详情"
      />
      <el-button v-if="resetButtonShow" @click="resetValue('context')">重置</el-button>
    </el-form-item>

    <el-form-item label="类型">
      <el-select
        v-model="formData.goodType.typeName"
        placeholder="请选择类型"
        style="width: 100%"
      />
      <el-button v-if="resetButtonShow" @click="resetValue('type_name')">重置</el-button>
    </el-form-item>

    <el-form-item label="销量">
      <el-input
        v-model="formData.soldNum"
        type="textarea"
        autosize
        placeholder=""
      />
      <el-button v-if="resetButtonShow" @click="resetValue('soldNum')">重置</el-button>
    </el-form-item>

    <el-form-item label="状态">
      <el-input
        v-model="formData.status"
        type="textarea"
        autosize
        placeholder="0-下架，1-上架？？"
      />
      <el-button v-if="resetButtonShow" @click="resetValue('status')">重置</el-button>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit(formData)">提交</el-button>
      <el-button v-if="resetButtonShow" @click="onClose()">取消</el-button>
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
          goodType: {
            typeName: ''
          },
          soldNum: '',
          status: ''
        }
      }
    },
    onSubmit: {
      type: Function,
      default() {}
    },
    resetButtonShow: {
      type: Boolean,
      default: false
    },
    resetValue: {
      type: Function,
      default() {}
    }
  },
  data() {
    return {
      options: ''
    }
  },
  mounted() {
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
