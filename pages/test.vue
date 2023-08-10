<template>
    <div>
      <Navbar v-if="userRole === 'admin'" />
      <UserNavbar v-else />
      <div class="content">
        <!-- Common content for all users -->
        <div v-if="userRole === 'admin'">
          <!-- Admin-specific content -->
        </div>
        <div v-else>
          <!-- User-specific content -->
        </div>
      </div>
      <AdminPanel v-if="userRole === 'admin'" />
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState('auth', ['userRole'])
    }
  };
  </script>
  