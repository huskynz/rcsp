<template>
  <div class="page-wrapper">
    <Navbar />
    <div class="content">
      <div class="grid-container">
        <div class="grid">
          <Box v-for="(boxContent, index) in boxContents" :key="boxContent.label" :content="boxContent" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/footer.vue';
import Box from '@/components/Box.vue';

export default {
  components: {
    Navbar,
    Footer,
    Box
  },
  data() {
  return {
    boxContents: [
      { label: 'Parent Portal', icon: 'https://sportsgroundproduction.blob.core.windows.net/cms/14528/43349/menulogo_wo.png?v=637752167422600000', url: 'https://www.parentportal.com' },
      { label: 'Print', icon: 'https://sportsgroundproduction.blob.core.windows.net/cms/14528/43349/menulogo_wo.png?v=637752167422600000', url: 'https://www.printservice.com' },
      { label: 'Gmail', icon: 'https://sportsgroundproduction.blob.core.windows.net/cms/14528/43349/menulogo_wo.png?v=637752167422600000', url: 'https://mail.google.com' },
      { label: 'Drive', icon: 'https://sportsgroundproduction.blob.core.windows.net/cms/14528/43349/menulogo_wo.png?v=637752167422600000', url: 'https://www.google.com/drive' },
      // ... add more entries
    ]
  };
}
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 250px; /* Adjust height to accommodate label */
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  transition: border-color 0.3s, transform 0.3s;
}
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.grid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* Add sticky footer styles */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  flex-shrink: 0;
}
</style>