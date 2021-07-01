<template>
  <div class="app-container">
    <GoodSpuForm
      :form-data="good_form"
      :on-submit="onSubmit"
      :type-list="type_list"
      :reset-value="resetValue"
      reset-button-show
    />
  </div>
</template>

<script>
import GoodSpuForm from '@/views/good/components/GoodSpuForm'
import { editGood, getGoodById } from '@/api/good'
import { getNameList } from '@/api/good_type'
import { compareForm } from '@/utils/check-changes'

export default {
  name: 'GoodSpuEdit',
  components: {
    GoodSpuForm
  },
  data() {
    return {
      old_good_form: {},
      good_form: {},
      type_list: [],
      onSubmit: (formName) => {
        // 判断修改项
        console.log(formName)
        const res = compareForm(formName, this.old_good_form)
        if (res.is_changed) {
          const good = formName
          editGood(good).then((res) => {
            this.$message(res.message)
            setTimeout(() => {
              this.$router.push({
                name: 'good_detail',
                params: { id: this.old_good_form.goodId }
              })
            }, 1000)
          })
        } else {
          this.$message('未修改内容!')
        }
      }
    }
  },
  mounted() {
    const id = this.$route.params.id
    getGoodById(id)
      .then((res) => {
        this.old_good_form = res.data
        this.good_form = Object.assign({}, this.old_good_form)
      })
    getNameList().then((res) => {
      this.type_list = res.data
    })
  },
  methods: {
    resetValue(name) {
      this.good_form[name] = this.old_good_form[name]
    }
  }
}
</script>
