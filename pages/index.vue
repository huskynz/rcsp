<template>
  <div class="grid-container">
    <div class="grid">
      <Box v-for="boxContent in boxContents" :key="boxContent" :content="boxContent" />
    </div>
  </div>
</template>

<script>
import Box from '@/components/Box.vue';

export default {
  components: {
    Box
  },
  data() {
    return {
      boxContents: ['Parent Portal', 'Print', 'Gmail', 'Drive', 'Sites', 'HuskyNZ']
    };
  }
};
</script>

<style scoped>
.grid-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensure the container takes up at least the full viewport height */
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
