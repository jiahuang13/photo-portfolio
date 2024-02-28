<template>
  <div class="portfolio">
    <el-row :gutter="60">
      <div
        class="title"
        style="
          font-size: 20px !important;
          margin: 60px auto 10px auto !important;
          font-weight: normal !important;
          letter-spacing: 2px;
          @media screen and (max-width: 992px) {
            /* 手機版 */
            top: 150px !important;
            font-size: 20px;
          }
        "
      >
        <span>黃佳</span> Jia Huang
      </div>
      <p class="title" style="letter-spacing: 2px; margin-bottom: 60px">
        Photography
      </p>
      <div class="btns">
        <el-button @click="showall">All</el-button>
        <el-button @click="handleClick(1)">Wedding</el-button>
        <el-button @click="handleClick(2)">Portrait</el-button>
        <el-button @click="handleClick(3)">Landscape</el-button>
        <el-button @click="handleClick(4)">Life</el-button>
        <el-button @click="handleClick(5)">Event</el-button>
      </div>
      <el-col :span="isMobile ? 20 : 0" :offset="isMobile ? 2 : 0">
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
            v-for="item in oddList"
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
            v-for="item in evenList"
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
    <el-backtop :bottom="50" :visibility-height="50"></el-backtop>
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
      originalList: [],
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
    const res = await getAllAlbumAPI();
    console.log(res);
    this.originalList = res;
    this.list = [...res];
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
      this.isMobile = window.innerWidth < 992; // 设置手机屏幕的阈值，例如768px
    },
    handleClick(id) {
      this.list = [...this.originalList];
      const map = {
        1: "wedding",
        2: "portrait",
        3: "landscape",
        4: "life",
        5: "event",
      };
      const category = map[id];
      this.list = this.originalList.filter((ele) =>
        ele.category.includes(category)
      );
    },
    showall() {
      this.list = this.originalList;
    },
  },
};
</script>

<style>
.portfolio {
  margin-top: 100px;
  margin-bottom: 200px;
  text-align: center;
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
    @media screen and (max-width: 460px) {
      .el-button {
        flex-basis: calc(50% - 10px);
      }
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
