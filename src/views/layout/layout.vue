<template>
  <div>
    <myheader></myheader>
    <router-view></router-view>
    <p>© 2024 by Jia Huang</p>
  </div>
</template>

<script>
import myheader from "@/views/layout/header.vue";
export default {
  name: "LayoutPage",
  components: {
    myheader,
  },
};
</script>

<style></style>
