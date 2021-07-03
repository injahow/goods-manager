<template>
  <div>
    <div class="app-container">
      <GoodSpuTable
        :list-loading="listLoading"
        :table-data="goodSpuTableData"
      />
    </div>

    <el-divider />

    <div class="app-container">
      <el-button
        type="primary"
        @click="form_type='add';dialogFormVisible=true;sku_form = {}"
      >添加系列</el-button>

      <el-table
        v-loading="listLoading"
        :data="tableData"
        width="100%"
        border
      >

        <el-table-column
          prop="skuId"
          label="编号"
          width="75"
          sortable
        />

        <el-table-column
          prop="skuName"
          label="名称"
          sortable
        />

        <el-table-column
          prop="skuImg"
          label="图片"
          width="140"
          sortable
        >
          <template slot-scope="scope">
            <div class="demo-image__preview">
              <el-image
                style="width: 100px; height: 100px"
                :src="scope.row.skuImg"
                :preview-src-list="[scope.row.skuImg]"
              />
            </div>
          </template>
        </el-table-column>

        <el-table-column
          prop="paramsMap"
          label="参数"
          width="100"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="dialogVisible = true; form_context = scope.row.paramsMap;"
            >查看</el-button>
          </template>
        </el-table-column>

        <el-table-column
          prop="originalPrice"
          label="原价"
          width="100"
        />

        <el-table-column
          prop="sellPrice"
          label="售价"
          width="100"
        />

        <el-table-column
          prop="goodStock"
          label="库存"
          width="100"
        />

        <el-table-column
          prop="createTime"
          label="创建时间"
          sortable
          width="190"
        >
          <template slot-scope="scope">
            <div class="block">
              <el-date-picker
                v-model="scope.row.createTime"
                size="mini"
                readonly
                type="date"
                format="yyyy 年 MM 月 dd 日"
              />
            </div>
          </template>
        </el-table-column>

        <el-table-column
          prop="updateTime"
          label="更新时间"
          sortable
          width="190"
        >
          <template slot-scope="scope">
            <div class="block">
              <el-date-picker
                v-model="scope.row.updateTime"
                size="mini"
                readonly
                type="date"
                format="yyyy 年 MM 月 dd 日"
              />
            </div>
          </template>
        </el-table-column>

        <el-table-column
          label="操作"
          width="150"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row);form_type='edit';dialogFormVisible=true"
            >编辑</el-button>
            <el-button
              type="danger"
              size="mini"
              @click="handleDelete(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog
        title="参数"
        :visible.sync="dialogVisible"
        width="60%"
      >
        <span>{{ form_context }}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog
        title="系列产品数据"
        :visible.sync="dialogFormVisible"
        :before-close="closeTip"
      >
        <el-form :model="sku_form">
          <el-form-item label="名称" :label-width="formLabelWidth">
            <el-input v-model="sku_form.skuName" autocomplete="off" />
          </el-form-item>

          <el-form-item label="图片" :label-width="formLabelWidth">
            <el-input v-model="sku_form.skuImg" autocomplete="off" />
          </el-form-item>

          <el-form-item label="参数" :label-width="formLabelWidth">
            <el-input
              v-model="sku_form.paramsMap"
              type="textarea"
              size="500"
              placeholder="请输入介绍"
              :autosize="{minRows:4,maxRows:8}"
              autocomplete="off"
            />
          </el-form-item>

          <el-form-item label="原价" :label-width="formLabelWidth">
            <el-input v-model="sku_form.originalPrice" autocomplete="off" />
          </el-form-item>

          <el-form-item label="售价" :label-width="formLabelWidth">
            <el-input v-model="sku_form.sellPrice" autocomplete="off" />
          </el-form-item>

          <el-form-item label="库存" :label-width="formLabelWidth">
            <el-input v-model="sku_form.goodStock" autocomplete="off" />
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sendForm()">确 定</el-button>
        </div>
      </el-dialog>

    </div>
  </div>
</template>

<script>
import GoodSpuTable from '@/views/good/components/GoodSpuTable'
import { deleteSku, getSameSku, getSkuById, editSku, addSku } from '@/api/good_sku'
import { compareForm } from '@/utils/check-changes'

export default {
  name: 'GoodDetail',
  components: {
    GoodSpuTable
  },
  data() {
    return {
      listLoading: false,
      tableData: {},
      dialogVisible: false,
      form_context: '',
      dialogFormVisible: false,
      sku_form: {},
      old_good_form: {},
      formLabelWidth: '100',
      form_type: '',
      goodSpuTableData: []
    }
  },
  mounted() {
    const goodSpuData = this.$route.params.goodSpuData
    if (goodSpuData) {
      this.goodSpuTableData = [goodSpuData]
    }
    const id = this.$route.params.id
    getSameSku(id).then(res => {
      if (res && res.code === 200) {
        this.tableData = res.data
      }
    })
  },
  methods: {
    handleEdit(val) {
      getSkuById(val.skuId).then(res => {
        this.sku_form = res.data
        this.old_good_form = Object.assign({}, this.sku_form)
      })
    },
    handleDelete(val) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteSku(val.skuId).then((res) => {
          this.$message(res.message)
          const id = this.$route.params.id
          getSameSku(id).then(res => {
            if (res && res.code === 200) {
              this.tableData = res.data
            }
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    sendForm() {
      if (this.form_type === 'edit') {
        const res = compareForm(this.sku_form, this.old_good_form)
        if (res.is_changed) {
          editSku(this.sku_form).then(res => {
            if (res && res.code === 200) {
              this.dialogFormVisible = false
              this.$message(res.message)
              // 回显
              const id = this.$route.params.id
              getSameSku(id).then(res => {
                if (res && res.code === 200) {
                  this.tableData = res.data
                }
              })
            }
          })
        } else {
          this.$message('未修改内容!')
        }
      } else {
        this.sku_form.goodId = this.$route.params.id
        addSku(this.sku_form).then(res => {
          if (res && res.code === 200) {
            this.dialogFormVisible = false
            this.$message(res.message)
            // 回显
            const id = this.$route.params.id
            getSameSku(id).then(res => {
              if (res && res.code === 200) {
                this.tableData = res.data
              }
            })
          }
        })
      }
    },
    closeTip() {
      this.$confirm('是否关闭表单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.dialogFormVisible = false
      })
    }
  }
}
</script>
<style>
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 170px;
}
</style>
