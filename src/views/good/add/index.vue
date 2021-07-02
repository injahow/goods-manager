<template>
  <div class="app-container">

    <GoodSpuForm
      :form-data="good_form"
      :on-submit="onSubmit"
      :type-list="type_list"
    />

  </div>
</template>

<script>

import GoodSpuForm from '@/views/good/components/GoodSpuForm'
import { addGood } from '@/api/good'
import { getNameList } from '@/api/good_type'

export default {
  name: 'GoodSpuAdd',
  components: {
    GoodSpuForm
  },
  data() {
    return {
      good_form: {},
      type_list: []
    }
  },
  mounted() {
    getNameList().then((res) => {
      this.type_list = res.data
    })
  },
  methods: {
    onSubmit(GoodSpu) {
      addGood(GoodSpu).then((res) => {
        if (res && res.code === 200) {
          this.$message(res.message)
          this.$router.push({ name: 'good_list' })
        }
      })
    },
    resetValue(name) {
      this.good_form[name] = this.old_good_form[name]
    }
  }
}
</script>
