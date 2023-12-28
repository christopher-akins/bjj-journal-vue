<template>
  <div class="main-banner">
    <div class="container">
      <h1>{{ props.bannerTitle }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  bannerTitle: {
    type: String,
    default: '404',
  }
});

</script>
