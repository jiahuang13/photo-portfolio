<template>
  <div class="header">
    <el-row>
      <!-- 在大屏幕上显示导航栏 -->
      <el-col :span="navbarVisible ? 24 : 0" class="desk-navbar">
        <div
          class="logo"
          v-on:click="$router.push('/')"
          style="
            position: absolute;
            top: 40px;
            left: 40px;
            font-size: 25px;
            z-index: 10;
            font-weight: 700;
          "
        >
          J.Huang
        </div>
        <a
          class="ig"
          href="https://www.instagram.com/pslms16_6/"
          target="_blank"
          style="position: absolute; top: 40px; right: 40px; z-index: 5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 2476 2476"
            id="instagram"
          >
            <path
              fill="rgb(50, 130, 63)"
              d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"
            ></path>
          </svg>
        </a>
        <el-menu
          mode="horizontal"
          background-color="#fff"
          text-color="#32823f"
          active-text-color="#92d99e"
          style="
            border-color: transparent;
            display: flex;
            justify-content: center;
            padding-top: 20px;
          "
        >
          <!-- 导航栏内容 -->
          <el-menu-item index="1" @click.native="$router.push('/')"
            >Portfolio</el-menu-item
          >
          <el-menu-item index="2" @click.native="$router.push('/about')"
            >About</el-menu-item
          >
        </el-menu>
      </el-col>

      <!-- 在小屏幕上显示漢堡選單 -->
      <el-col :span="hamburgerVisible ? 24 : 0" class="phone-navbar">
        <!-- logo -->
        <h1 class="logo">J.Huang</h1>
        <!-- 漢堡選單按钮 -->
        <el-button type="text" @click="toggleDrawer" class="burger"
          ><!-- 内联 SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="burger-icon"
          >
            <!-- SVG 图标的路径 -->
            <path
              fill="rgb(50, 130, 63)"
              d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"
            /></svg
        ></el-button>
        <!-- 漢堡選單抽屉 -->
        <el-drawer :visible.sync="drawerVisible" direction="rtl" size="100%">
          <!-- 漢堡選單内容 -->
          <el-menu>
            <el-menu-item index="1" @click.native="handleClick('/')"
              >Portfolio</el-menu-item
            >
            <el-menu-item index="2" @click.native="handleClick('/about')"
              >About</el-menu-item
            >
            <el-menu-item index="3"
              ><a
                class="ig"
                href="https://www.instagram.com/pslms16_6/"
                target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 2476 2476"
                  id="instagram"
                >
                  <path
                    fill="rgb(50, 130, 63)"
                    d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"
                  ></path></svg></a
            ></el-menu-item>
          </el-menu>
        </el-drawer>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      // 定义窗口宽度阈值，超过这个宽度显示导航栏，否则显示漢堡選單
      breakpoint: 768,
      // 控制导航栏和漢堡選單的显示状态
      navbarVisible: true,
      hamburgerVisible: false,
      drawerVisible: false,
    };
  },
  mounted() {
    // 监听窗口大小变化，根据窗口宽度切换导航栏和漢堡選單的显示状态
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    // 组件销毁前移除窗口大小变化的监听器
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    // 处理窗口大小变化事件
    handleResize() {
      this.navbarVisible = window.innerWidth >= this.breakpoint;
      this.hamburgerVisible = !this.navbarVisible;
      if (this.navbarVisible) {
        // 在大屏幕上，关闭漢堡選單抽屉
        this.drawerVisible = false;
      }
    },
    // 切换漢堡選單抽屉的显示状态
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible;
    },
    async handleClick(url) {
      await this.$router.push({ path: url });
      this.drawerVisible = false;
    },
  },
};
</script>

<style>
.header {
  top: 0;
  left: 0;
  z-index: 10;
  .desk-navbar {
    position: fixed;
    background-color: #fff;
    z-index: 5;
    top: 0;
    li.el-menu-item:hover,
    li.el-menu-item:focus {
      color: rgb(146, 217, 158) !important;
      border-bottom-color: rgb(146, 217, 158) !important;
      background-color: rgb(255, 255, 255) !important;
    }
    .logo {
      position: absolute !important;
      top: 10px !important;
      left: 40px !important;
      z-index: 5;
      font-size: 25px;
      cursor: pointer;
    }
    .ig {
      position: absolute;
      top: 40px;
      right: 40px;
      z-index: 5;
    }
    .el-menu--horizontal .el-menu .el-menu-item,
    .el-menu--horizontal .el-menu .el-submenu__title ::before {
      font-family: "Urbanist" !important;
    }
    .el-menu.el-menu--horizontal {
      border-color: transparent;
      display: flex;
      justify-content: center;
      padding-top: 20px;
    }
  }
  .phone-navbar {
    width: 100vw;
    background-color: #fff; /* 添加背景颜色 */
    z-index: 10; /* 设置合适的 z-index 值 */
    .logo {
      position: absolute;
      top: 10px;
      left: 40px;
      font-size: 25px;
    }
    .burger {
      width: 24px; /* SVG 图标的宽度 */
      height: 24px; /* SVG 图标的高度 */
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
}
</style>
