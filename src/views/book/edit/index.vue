<template>
  <div class="app-container">
    <BookForm
      :book-form="book_form"
      :on-submit="onSubmit"
      :reset-value="resetValue"
      reset-button-show
    />
  </div>
</template>

<script>
import BookForm from '@/views/book/components/BookForm'
// import { getDetail, editOne } from '@/api/book'
// import { compareForm } from '@/utils/put-changes'

export default {
  name: 'BookEdit',
  components: {
    BookForm
  },
  data() {
    return {
      old_book_form: {},
      book_form: {},
      actor_options: ['未知'],
      staff_options: ['未知'],
      tags_options: ['其他'],
      region_options: ['中国', '日本', '美国'],
      type_name_options: ['正片', '电影', '其他'],
      onSubmit: (formName) => {
        // 判断修改项
        // const res = compareForm(formName, this.old_book_form)
        // let changes = res.changes
        /*
         if (res.is_changed) {
          // const book = formName

          editOne(book, changes).then((res) => {
            this.$message('修改成功!')
            changes = []
            setTimeout(() => {
              this.$router.push({
                name: 'book_detail',
                params: { id: this.old_book_form._id }
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
        this.old_book_form = res.data
        this.book_form = Object.assign({}, this.old_book_form)
      })
      .catch((error) => {
        this.$message.error(error)
      })
      */
  },
  methods: {
    resetValue(name) {
      this.book_form[name] = this.old_book_form[name]
    }
  }
}
</script>
