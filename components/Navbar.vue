<template>
    <aside class="sidebar">
      <div class="sidebar-header">
        <h1>My App</h1>
      </div>
      <nav class="navbar">
        <ul class="navbar-list">
          <li v-for="link in links" :key="link.label" class="navbar-item">
            <a :href="link.url">{{ link.label }}</a>
          </li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    data() {
      return {
        links: [
          { label: 'Home', url: '/' },
          { label: 'About', url: '/about' },
          { label: 'Contact', url: '/contact' }
          // Add more links as needed
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 200px; /* Adjust the width as needed */
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align content to the top */
    align-items: center;
  }
  
  .sidebar-header {
    padding: 20px;
    text-align: center;
  }
  
  .navbar-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  
  .navbar-item {
    margin: 10px 0;
  }
  
  .navbar-item a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .navbar-item a:hover {
    color: #f39c12;
  }
  </style>
  