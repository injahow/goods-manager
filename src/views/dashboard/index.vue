<template>
  <div class="dashboard-container">

    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item>
        <el-image src="https://img.injahow.com/images/2020/03/15/background1.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <el-image src="https://img.injahow.com/images/2021/07/04/2.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <el-image src="https://injahow.com/wp-content/uploads/2019/01/background.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <el-image src="https://img.injahow.com/images/2021/07/04/1lkfldj.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <el-image src="https://img.injahow.com/images/2021/07/04/1K64aC4-35.md.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <el-image src="https://img.injahow.com/images/2021/07/04/55-1Q212145J6101.md.jpg" />
      </el-carousel-item>

    </el-carousel>

    <el-row :gutter="12">

      <el-col :span="16">
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
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>添加商品 - 10</h4>
                <p>admin 提交于 2018/4/1 10:24</p>
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
