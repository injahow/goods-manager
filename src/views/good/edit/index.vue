<template>
  <div class="app-container">
    <GoodSpuForm
      :form-data="good_form"
      :on-submit="onSubmit"
      :reset-value="resetValue"
      reset-button-show
    />
  </div>
</template>

<script>
import GoodSpuForm from '@/views/good/components/GoodSpuForm'
import { editGood, getGoodById } from '@/api/good'
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
      type_name_options: ['type1', 'type2', 'type3'],
      onSubmit: (formName) => {
        // 判断修改项
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
      .catch((error) => {
        this.$message.error(error)
      })
  },
  methods: {
    resetValue(name) {
      this.good_form[name] = this.old_good_form[name]
    }
  }
}
</script>
