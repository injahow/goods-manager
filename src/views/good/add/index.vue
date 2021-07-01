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
import { addGood } from '@/api/good'

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
      addGood(GoodSpu).then((res) => {
        this.$message('提交成功!')
        this.$router.push({ name: 'GoodSpu_list' })
      })
    },
    resetValue(name) {
      this.good_form[name] = this.old_good_form[name]
    }
  }
}
</script>
