<template>
  <div class="album">
    <el-row :gutter="isMobile ? 0 : 40">
      <h1 class="title">{{ albumname }}</h1>
      <p class="title">{{ albuminfo }}</p>
      <el-col :span="isMobile ? 22 : 0" :offset="isMobile ? 1 : 0">
        <!-- 在手机屏幕上显示一列 -->
        <div class="item" v-loading="loading">
          <transition-group name="fade">
            <el-image
              v-for="item in list"
              :key="item.id"
              style="width: 100%; height: auto"
              :src="item.url"
              :preview-src-list="[item.url]"
              @click="picClick(item.id)"
            />
          </transition-group>
        </div>
      </el-col>
      <!-- 在大屏幕上显示两列 -->
      <el-col :span="isMobile ? 0 : 10" :offset="isMobile ? 0 : 2">
        <div class="item" v-loading="loading">
          <transition-group name="fade">
            <el-image
              v-for="item in oddList"
              :key="item.id"
              style="width: 100%; height: auto"
              :src="item.url"
              :preview-src-list="[item.url]"
              @click="picClick(item.id)"
            />
          </transition-group>
        </div>
      </el-col>
      <el-col :span="isMobile ? 0 : 10">
        <div class="item" v-loading="loading">
          <transition-group name="fade">
            <el-image
              v-for="item in evenList"
              :key="item.id"
              style="width: 100%; height: auto"
              :src="item.url"
              :preview-src-list="[item.url]"
              @click="picClick(item.id)"
            />
          </transition-group>
        </div>
      </el-col>
      <el-link
        class="previousProject project"
        @click="nextProject(-1)"
        v-if="+this.$route.params.id > 1"
        ><i class="el-icon-back"></i> Previous Project
      </el-link>
      <el-link
        class="nextProject project"
        @click="nextProject(1)"
        v-if="+this.$route.params.id < albumcount"
        >Next Project <i class="el-icon-right"></i>
      </el-link>
    </el-row>
    <el-backtop :bottom="50" :visibility-height="50"></el-backtop>
  </div>
</template>

<script>
import { getAlbumAPI, getAllAlbumAPI } from "@/api/portfolio";
// import router from "@/router";

export default {
  name: "AlbumPage",
  data() {
    return {
      isMobile: false,
      list: [],
      albumname: "",
      albuminfo: "",
      albumcount: "",
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
    const res = await getAlbumAPI(this.$route.params.id);
    // console.log(res.data);
    this.list = [...res.data];
    const resAll = await getAllAlbumAPI();
    const data = resAll.data[+this.$route.params.id - 1];
    this.albumname = data.name;
    this.albuminfo = data.info;
    this.albumcount = resAll.data.length;
  },
  mounted() {
    this.checkScreenWidth();
    window.addEventListener("resize", this.checkScreenWidth);
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      this.isMobile = window.innerWidth < 768; // 设置手机屏幕的阈值，例如768px
    },
    nextProject(step) {
      const newid = +this.$route.params.id + step;
      this.$router.push(`/album/${newid}`);
    },
    picClick(id) {
      console.log(id);
    },
  },
  watch: {
    $route() {
      // 路由发生变化页面刷新
      window.location.reload();
    },
  },
};
</script>

<style>
.album {
  margin-top: 100px;
  margin-bottom: 200px;
  max-width: 100% !important;
  h1.title {
    /* font-weight: 100; */
    font-size: 20px;
    margin: 100px auto 20px auto;
    font-weight: normal;
    @media screen and (max-width: 768px) {
      /* 手機版 */
      margin-top: 20px;
    }
  }
  p.title {
    margin-bottom: 50px;
    font-weight: 100;
    /* font-size: 14px; */
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s all;
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
  }
  .project {
    position: absolute;
    bottom: -70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(50, 130, 63);
    font-size: 20px;
    @media screen and (max-width: 768px) {
      /* 手機版 */
      font-size: 16px;
    }
  }
  .nextProject {
    right: 50px;
    svg {
      transform: rotate(180deg);
    }
    @media screen and (max-width: 768px) {
      /* 手機版 */
      font-size: 16px;
      right: 20px;
    }
  }
  .previousProject {
    left: 50px;
    @media screen and (max-width: 768px) {
      /* 手機版 */
      font-size: 16px;
      left: 20px;
    }
  }
}
</style>
