<template>
  <div class="dashboard-container">

    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 5" :key="item">
        <el-image src="https://img.injahow.com/images/2020/03/15/background1.md.jpg" />
      </el-carousel-item>
    </el-carousel>

    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="hover">

          <div style="height: 300px;">
            <el-steps direction="vertical" :active="1">
              <el-step title="步骤 1" />
              <el-step title="步骤 2" />
              <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字" />
              <el-step title="步骤 4" />
              <el-step title="步骤 5" description="这是一段很长很长很长的描述性文字" />
            </el-steps>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="hover">
          <el-calendar :range="['2021-07-01', '2021-08-01']" />
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="hover">

          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>编辑商品 - 3</h4>
                <p>admin 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>删除商品 - 9</h4>
                <p>admin 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>添加商品 - 5</h4>
                <p>admin 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>

        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>
<style>

</style>
<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
