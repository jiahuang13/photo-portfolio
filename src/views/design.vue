<template>
  <div class="design">
    <el-row :gutter="isMobile ? 0 : 40">
      <el-col :span="isMobile ? 22 : 0" :offset="isMobile ? 1 : 0">
        <h2 class="title">Design Work</h2>
        <!-- 在手机屏幕上显示一列 -->
        <div v-loading="loading">
          <transition-group name="fade">
            <div
              class="item"
              v-for="item in list"
              :key="item.id"
              v-on:click="picClick(item.id)"
            >
              <el-image
                style="width: 100%; height: auto"
                :src="item.url"
                :preview-src-list="[item.url]"
              />
              <!-- <p class="name">{{ item.name }}</p> -->
              <!-- <p class="info">{{ item.info }}</p> -->
            </div>
          </transition-group>
        </div>
      </el-col>
      <!-- 在大屏幕上显示两列 -->
      <el-col :span="isMobile ? 0 : 10" :offset="isMobile ? 0 : 2">
        <div v-loading="loading">
          <transition-group name="fade">
            <div
              class="item"
              v-for="item in oddList"
              :key="item.id"
              v-on:click="picClick(item.id)"
            >
              <el-image
                style="width: 100%; height: auto"
                :src="item.url"
                :preview-src-list="[item.url]"
              />
              <!-- <p class="name">{{ item.name }}</p> -->
              <!-- <p class="info">{{ item.info }}</p> -->
            </div>
          </transition-group>
        </div>
      </el-col>
      <el-col :span="isMobile ? 0 : 10">
        <div v-loading="loading">
          <transition-group name="fade">
            <div
              class="item"
              v-for="item in evenList"
              :key="item.id"
              v-on:click="picClick(item.id)"
            >
              <el-image
                style="width: 100%; height: auto"
                :src="item.url"
                :preview-src-list="[item.url]"
              />
              <!-- <p class="name">{{ item.name }}</p> -->
              <!-- <p class="info">{{ item.info }}</p> -->
            </div>
          </transition-group>
        </div>
      </el-col>
    </el-row>
    <el-backtop :bottom="50" :visibility-height="50"></el-backtop>
  </div>
</template>

<script>
import { getAllDesignAPI } from "@/api/portfolio";

export default {
  name: "DesignPage",
  data() {
    return {
      isMobile: false,
      list: [],
      originalList: [],
      loading: true,
    };
  },
  computed: {
    oddList() {
      return this.list.filter((_, index) => index % 2 === 0);
    },
    evenList() {
      return this.list.filter((_, index) => index % 2 !== 0);
    },
  },
  async created() {
    const res = await getAllDesignAPI();
    console.log(res);
    // this.originalList = res.data;
    this.list = res.data;
    // console.log(this.list);
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      this.isMobile = window.innerWidth < 992; // 设置手机屏幕的阈值，例如768px
    },
    picClick(id) {
      console.log(id);
    },
  },
};
</script>

<style>
.design {
  margin-top: 100px;
  margin-bottom: 200px;
  text-align: center;
  overflow-x: hidden;
  .title {
    font-weight: 100;
    font-size: 18px;
    padding: 30px 0;
  }
  .btns {
    margin-bottom: 60px;
    display: flex;
    flex-wrap: wrap; /* 允許按需要換行 */
    justify-content: center; /* 水平居中 */
    .el-button {
      font-family: "Urbanist";
      transition: all 0.5s;
      border-radius: 0;
      flex-basis: calc(10% - 10px); /* 設置每個按鈕的寬度，減去間距 */
      margin: 5px; /* 按鈕間的間距 */
    }
  }
  @media screen and (max-width: 460px) {
    margin-top: 70px;
    .btns .el-button {
      flex-basis: calc(50% - 10px);
    }
  }
  .el-row {
    max-width: 100%;
    margin-left: 0 !important;
    margin-right: -30px !important;
  }
  div.title {
    /* font-weight: 100; */
    font-size: 20px !important;
    margin: 60px auto 10px auto !important;
    font-weight: normal !important;
    letter-spacing: 2px;
    @media screen and (max-width: 992px) {
      /* 手機版 */
      top: 150px !important;
      font-size: 20px;
    }
  }
  p.title {
    letter-spacing: 2px;
    margin-bottom: 60px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .item {
    width: 100%;
    .el-image {
      margin-bottom: 20px;
      transition: 0.5s all; /* 添加过渡效果 */
    }
    .el-image:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.075) 0px 14px 28px,
        rgba(0, 0, 0, 0.098) 0px 10px 10px;
    }
    .name {
      margin-bottom: 8px;
    }
    .info {
      margin: 8px auto 50px;
    }
  }
}
</style>
