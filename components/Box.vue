<template>
    <div class="box" @click="handleClick">{{ content }}</div>
  </template>
  
  <script>
  export default {
    props: {
      content: String
    },
    methods: {
      handleClick() {
        // Handle the click event here
        const distValue = this.content.toLowerCase().replace(/\s/g, '-');
        const redirectUrl = `/go?dist=${distValue}`;
        window.location.href = redirectUrl;
      }
    }
  };
  </script>
  
  <style scoped>
  .box {
    width: 100px;
    height: 100px;
    background-color: #3498db;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
    cursor: pointer;
  }
  </style>
  