<!-- pages/auth.vue -->

<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  </template>
  
  <script>
  import { supabase } from '~/plugins/supabase';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const { user, session, error } = await supabase.auth.signIn({
            email: this.email,
            password: this.password
          });
          if (!error) {
            this.$store.dispatch('auth/setUser', user);
            // Redirect to dashboard or another page
            this.$router.push('/dashboard');
          } else {
            console.error(error);
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  