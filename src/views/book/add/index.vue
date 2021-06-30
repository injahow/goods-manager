<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane
        label="填写表单"
        name="form"
      >
        <BookForm
          :book-form="book_form"
          :on-submit="onSubmit"
        />
      </el-tab-pane>
      <el-tab-pane
        label="填写链接"
        name="url"
      >
        <el-form label-width="50px" style="width:100%">
          注：目前仅支持bilibili
          <el-form-item label="链接">
            <el-input v-model="url" placeholder="如:https://www.bilibili.com/bangumi/play/ss34230/" />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="url2form()"
            >提交</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BookForm from '@/views/book/components/BookForm'

// import { addOne, addOneByUrl } from '@/api/Book'
export default {
  name: 'BookAdd',
  components: {
    BookForm
  },
  data() {
    return {
      activeName: 'form',
      url: '',
      book_form: {}
    }
  },
  methods: {
    onSubmit(Book) {
      // addOne(Book).then((res) => {
      //   this.$message('提交成功!')
      //   this.$router.push({ name: 'Book_list' })
      // })
    },
    resetValue(name) {
      this.book_form[name] = this.old_book_form[name]
    },
    url2form() {
      // todo: is url ?
      if (this.url) {
        // addOneByUrl(this.url).then((res) => {
        //   this.book_form = res.data
        //   this.activeName = 'form'
        // })
      }
    }
  }
}
</script>
