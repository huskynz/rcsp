<template>
  <div class="box">
    <button class="styled-button" @click="redirectToWebsite">
      <div class="icon-container">
        <img :src="content.icon" alt="Icon" class="icon" />
      </div>
      <div class="box-label">{{ content.label }}</div>
    </button>
  </div>
</template>

<script>
export default {
  props: ['content'],
  methods: {
    redirectToWebsite() {
      window.location.href = this.content.url;
    }
  }
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 250px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  transition: border-color 0.3s, transform 0.3s;
}

.box:hover {
  border-color: #757575;
  transform: scale(1.05);
}

.styled-button {
  width: 100%;
  padding: 0;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.styled-button:hover {
  background-color: #ffffff;
}

.icon-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  max-width: 100%;
  max-height: 100%;
}

.box-label {
  margin-top: 10px;
}
</style>
