<template>
  <el-form
    ref="bookForm"
    :model="bookForm"
    label-width="50px"
    style="width: 100%"
  >
    <el-form-item label="名称">
      <el-input v-model="bookForm.name" />
      <el-button v-if="resetButtonShow" @click="resetValue('name')">重置</el-button>
    </el-form-item>

    <el-form-item label="封面">
      <el-input v-model="bookForm.cover" />
      <el-button v-if="resetButtonShow" @click="resetValue('cover')">重置</el-button>
    </el-form-item>

    <el-form-item label="介绍">
      <el-input
        v-model="bookForm.introduction"
        type="textarea"
        autosize
        placeholder="请输入介绍"
      />
      <el-button v-if="resetButtonShow" @click="resetValue('introduction')">重置</el-button>
    </el-form-item>

    <el-form-item label="类型">
      <el-select
        v-model="bookForm.type_name"
        placeholder="请选择类型"
        style="width: 100%"
      >
        <el-option
          v-for="item in options.type_name"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-button v-if="resetButtonShow" @click="resetValue('type_name')">重置</el-button>
    </el-form-item>

    <el-form-item label="标签">
      <el-select
        v-model="bookForm.tags"
        multiple
        filterable
        allow-create
        default-first-option
        style="width: 100%"
        placeholder="请选择标签"
      >
        <el-option
          v-for="item in options.tags"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-button v-if="resetButtonShow" @click="resetValue('tags')">重置</el-button>
    </el-form-item>

    <el-form-item label="地区">
      <el-select
        v-model="bookForm.region"
        placeholder="请选择地区"
        style="width: 100%"
      >
        <el-option
          v-for="item in options.region"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-button v-if="resetButtonShow" @click="resetValue('region')">重置</el-button>
    </el-form-item>

    <el-form-item label="日期">
      <el-date-picker
        v-model="bookForm.publish"
        type="month"
        placeholder="选择发布日期"
        style="width: 100%"
      />
      <el-button v-if="resetButtonShow" @click="resetValue('publish')">重置</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(bookForm)">提交</el-button>
      <el-button v-if="resetButtonShow" @click="onClose()">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// import { getOptions } from "@/api/user";
export default {
  name: 'BookForm',
  props: {
    bookForm: {
      type: Object,
      default() {
        return {}
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
      options: {
        actor: [],
        staff: [],
        type_name: [],
        tags: [],
        region: []
      }
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
