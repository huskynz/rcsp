<!-- Change redirect.vue to go.vue -->
<template>
    <div></div>
  </template>
  
  <script>
  export default {
    async asyncData({ query, redirect }) {
      const distValue = query.dist;
  
      if (distValue === 'parent-portal') {
        return redirect('https://parentportal.rollestoncollege.nz');
      } else if (distValue === 'box2') {
        return redirect('/box/box-2');
      }
      return redirect('/'); // Redirect to the home page or another default route
    }
  };
  </script>
  
  <style scoped>
  /* Add styles for the go page */
  </style>
  