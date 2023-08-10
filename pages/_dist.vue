<template>
    <div></div>
  </template>
  
  <script>
  export default {
    async asyncData({ params }) {
      const distParam = params.dist || ''; // Get the ':dist' parameter value
  
      let redirectPath = '/'; // Default redirection path
  
      if (distParam === 'something') {
        redirectPath = '/destination1'; // Redirect to destination1 for 'something'
      } else if (distParam === 'another') {
        redirectPath = '/destination2'; // Redirect to destination2 for 'another'
      } // Add more conditions as needed
  
      // Perform the redirection
      return {
        redirect: redirectPath,
      };
    },
  };
  </script>
  