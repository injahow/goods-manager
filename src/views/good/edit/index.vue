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
// import { getDetail, editOne } from '@/api/good'
// import { compareForm } from '@/utils/put-changes'

export default {
  name: 'GoodSpuEdit',
  components: {
    GoodSpuForm
  },
  data() {
    return {
      old_good_form: {},
      good_form: {},
      actor_options: ['未知'],
      staff_options: ['未知'],
      tags_options: ['其他'],
      region_options: ['中国', '日本', '美国'],
      type_name_options: ['正片', '电影', '其他'],
      onSubmit: (formName) => {
        // 判断修改项
        // const res = compareForm(formName, this.old_good_form)
        // let changes = res.changes
        /*
         if (res.is_changed) {
          // const good = formName

          editOne(good, changes).then((res) => {
            this.$message('修改成功!')
            changes = []
            setTimeout(() => {
              this.$router.push({
                name: 'good_detail',
                params: { id: this.old_good_form._id }
              })
            }, 1000)
          })

        } else {
          this.$message('未修改内容!')
        }*/
      }
    }
  },
  mounted() {
    /*
    const id = this.$route.params.id
    getDetail(id)
      .then((res) => {
        this.old_good_form = res.data
        this.good_form = Object.assign({}, this.old_good_form)
      })
      .catch((error) => {
        this.$message.error(error)
      })
      */
  },
  methods: {
    resetValue(name) {
      this.good_form[name] = this.old_good_form[name]
    }
  }
}
</script>
