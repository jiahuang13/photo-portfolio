<template>
  <div>
    <el-row>
      <el-col :span="isMobile ? 22 : 0" :offset="1">
        <!-- 在手机屏幕上显示一列 -->
        <div class="item">
          <!-- <el-image
            v-for="item in list"
            :key="item.id"
            style="width: 100%; height: auto"
            :src="item.url"
            :fit="cover"
          ></el-image>
          <span>{{ item.name }}</span> -->
        </div>
        <div class="item">
          <img style="width: 100%; height: auto" src="../assets/home.jpg" />
          <span>girl in white</span>
        </div>
        <div class="item">Item 3</div>
      </el-col>
      <!-- 在大屏幕上显示两列 -->
      <el-col :span="isMobile ? 0 : 10" :offset="1">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
      </el-col>
      <el-col :span="isMobile ? 0 : 10" :offset="1">
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "WeddingPage",
  data() {
    return {
      isMobile: false,
      list: [],
    };
  },
  methods: {
    checkScreenWidth() {
      this.isMobile = window.innerWidth < 768; // 设置手机屏幕的阈值，例如768px
    },
  },
};
</script>
