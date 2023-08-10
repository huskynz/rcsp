<template>
    <div class="box">
      <button class="styled-button" @click="redirectToWebsite">{{ content.label }}</button>
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
    height: 200px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  
  .styled-button {
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s; /* Add smooth transitions */
  }
  
  /* Apply hover effect */
  .styled-button:hover {
    background-color: #0056b3; /* Darker color on hover */
    transform: scale(1.05); /* Slight scale increase on hover */
  }
  </style>
  