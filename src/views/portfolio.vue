<template>
  <div class="portfolio">
    <el-row :gutter="120">
      <h1 class="title"><span>黃佳美</span> Jia Huang</h1>
      <p class="title">Photography</p>
      <el-col :span="isMobile ? 18 : 0" :offset="isMobile ? 3 : 0">
        <!-- 在手机屏幕上显示一列 -->
        <transition-group name="fade">
          <div
            class="item"
            v-for="item in list"
            :key="item.id"
            v-on:click="$router.push(`/album/${item.id}`)"
          >
            <el-image style="width: 100%; height: auto" :src="item.url" />
            <p class="name">{{ item.name }}</p>
            <p class="info">{{ item.info }}</p>
          </div>
        </transition-group>
      </el-col>
      <!-- 在大屏幕上显示两列 -->
      <el-col :span="isMobile ? 0 : 8" :offset="isMobile ? 0 : 4">
        <transition-group name="fade">
          <div
            class="item"
            v-for="item in list1"
            :key="item.id"
            v-on:click="$router.push(`/album/${item.id}`)"
          >
            <el-image style="width: 100%; height: auto" :src="item.url" />
            <p class="name">{{ item.name }}</p>
            <p class="info">{{ item.info }}</p>
          </div>
        </transition-group>
      </el-col>
      <el-col :span="isMobile ? 0 : 8">
        <transition-group name="fade">
          <div
            class="item"
            v-for="item in list2"
            :key="item.id"
            v-on:click="$router.push(`/album/${item.id}`)"
          >
            <el-image style="width: 100%; height: auto" :src="item.url" />
            <p class="name">{{ item.name }}</p>
            <p class="info">{{ item.info }}</p>
          </div>
        </transition-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getAllAlbumAPI } from "@/api/portfolio";

export default {
  name: "AlbumPage",
  data() {
    return {
      isMobile: false,
      list: [],
      list1: [],
      list2: [],
    };
  },
  async created() {
    const res = await getAllAlbumAPI();
    this.list = res;
    this.list1 = res.filter((_, index) => index % 2 === 0); // 偶数项
    this.list2 = res.filter((_, index) => index % 2 !== 0); // 奇数项
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      this.isMobile = window.innerWidth < 768; // 设置手机屏幕的阈值，例如768px
    },
  },
};
</script>

<style>
.portfolio {
  margin-top: 100px;
  margin-bottom: 200px;
  h1.title {
    /* font-weight: 100; */
    font-size: 20px;
    margin: 100px auto 10px;
    font-weight: normal;
    letter-spacing: 2px;
    @media screen and (max-width: 768px) {
      /* 手機版 */
      top: 150px;
    }
  }
  p.title {
    letter-spacing: 2px;
    margin-bottom: 80px;
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
      margin: 5px 0;
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
