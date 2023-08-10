<template>
  <div>
    <Navbar />
    <div class="grid-container">
      <div class="grid">
        <Box v-for="boxContent in boxContents" :key="boxContent.label" :content="boxContent" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Box from '@/components/Box.vue';

export default {
  components: {
    Navbar,
    Box
  },
  data() {
    return {
      boxContents: [
        { label: 'Parent Portal', url: 'https://www.parentportal.com' },
        { label: 'Print', url: 'https://www.printservice.com' },
        { label: 'Gmail', url: 'https://mail.google.com' },
        { label: 'Drive', url: 'https://www.google.com/drive' },
        { label: 'Sites', url: 'https://sites.google.com' },
        { label: 'HuskyNZ', url: 'https://www.husky.nz' }
      ]
    };
  }
};
</script>

<style scoped>
.grid-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
