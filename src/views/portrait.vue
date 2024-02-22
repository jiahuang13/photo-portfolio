<template>
  <div class="portrait">
    <div class="title">
      <h1>Portrait</h1>
    </div>
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
  name: "PortraitPage",
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

<style>
.portrait {
  .title {
    position: absolute;
    top: 150px;
    left: 40px;
    text-align: start;
    h1 {
      /* font-weight: 100; */
      font-size: 20px;
      margin: 0;
      font-weight: normal;
    }
    h1 span {
      letter-spacing: 3px;
    }
    p {
      font-size: 16px;
      font-weight: 200;
      margin: 0;
      letter-spacing: 1px;
    }
    @media screen and (max-width: 768px) {
      /* 手機版 */
      top: 150px;
      h1 span {
        letter-spacing: 1px;
      }
      p {
        font-size: 14px;
      }
    }
  }
  .item {
    width: 100%;
    border: 1px solid #ccc;
    /* margin: 5px; */
  }
}
</style>
