<template>
  <div class="album">
    <el-row :gutter="20">
      <h1 class="title">{{ albumname }}</h1>
      <p class="title">{{ albuminfo }}</p>
      <el-col :span="isMobile ? 22 : 0" :offset="isMobile ? 1 : 0">
        <!-- 在手机屏幕上显示一列 -->
        <div class="item">
          <transition-group name="fade">
            <el-image
              v-for="item in list"
              :key="item.id"
              style="width: 100%; height: auto"
              :src="item.url"
              :preview-src-list="[item.url]"
            />
          </transition-group>
        </div>
      </el-col>
      <!-- 在大屏幕上显示两列 -->
      <el-col :span="isMobile ? 0 : 10" :offset="isMobile ? 0 : 2">
        <div class="item">
          <transition-group name="fade">
            <el-image
              v-for="item in list1"
              :key="item.id"
              style="width: 100%; height: auto"
              :src="item.url"
              :preview-src-list="[item.url]"
            />
          </transition-group>
        </div>
      </el-col>
      <el-col :span="isMobile ? 0 : 10">
        <div class="item">
          <transition-group name="fade">
            <el-image
              v-for="item in list2"
              :key="item.id"
              style="width: 100%; height: auto"
              :src="item.url"
              :preview-src-list="[item.url]"
            />
          </transition-group>
        </div>
      </el-col>
      <el-link class="arrow"
        >Next Project <i class="el-icon-right"></i>
      </el-link>
    </el-row>
  </div>
</template>

<script>
import { getAlbumAPI } from "@/api/portfolio";

export default {
  name: "AlbumPage",
  data() {
    return {
      isMobile: false,
      list: [],
      list1: [],
      list2: [],
      albumname: "",
      albuminfo: "",
    };
  },
  async created() {
    const res = await getAlbumAPI(this.$route.params.id);
    this.list = res.photos;
    this.list1 = res.photos.filter((_, index) => index % 2 === 0); // 偶数项
    this.list2 = res.photos.filter((_, index) => index % 2 !== 0); // 奇数项
    this.albumname = res.name;
    this.albuminfo = res.info;
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
.album {
  margin-top: 100px;
  margin-bottom: 200px;
  h1.title {
    /* font-weight: 100; */
    font-size: 20px;
    margin: 100px auto 20px auto;
    font-weight: normal;
    @media screen and (max-width: 768px) {
      /* 手機版 */
      top: 150px;
    }
  }
  p.title {
    margin-bottom: 50px;
    font-weight: 100;
    /* font-size: 14px; */
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
  }
  .arrow {
    position: absolute;
    bottom: -50px;
    right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(50, 130, 63);
    font-size: 20px;
    svg {
      transform: rotate(180deg);
    }
  }
}
</style>
