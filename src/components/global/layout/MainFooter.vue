<template>
<footer class="footer">
  <div class="content">
    <div class="site-info">
      <p>Brazilian Jiu-Jitsu Journal &copy; {{ year }}</p>
    </div>
    <div class="site-links">
      <a href="https://measureisall.com">measureisall.com</a> |
      <router-link :to="{ name: 'Privacy' }">Privacy Policy</router-link>
    </div>
  </div>
</footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
