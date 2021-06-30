<template>
  <div class="app-container">

    <GoodSpuForm
      :form-data="good_form"
      :on-submit="onSubmit"
    />

  </div>
</template>

<script>
import GoodSpuForm from '@/views/good/components/GoodSpuForm'

// import { addOne, addOneByUrl } from '@/api/good'
export default {
  name: 'GoodSpuAdd',
  components: {
    GoodSpuForm
  },
  data() {
    return {
      activeName: 'form',
      url: '',
      good_form: {}
    }
  },
  methods: {
    onSubmit(GoodSpu) {
      // addOne(GoodSpu).then((res) => {
      //   this.$message('提交成功!')
      //   this.$router.push({ name: 'GoodSpu_list' })
      // })
    },
    resetValue(name) {
      this.good_form[name] = this.old_good_form[name]
    },
    url2form() {
      // todo: is url ?
      if (this.url) {
        // addOneByUrl(this.url).then((res) => {
        //   this.good_form = res.data
        //   this.activeName = 'form'
        // })
      }
    }
  }
}
</script>
