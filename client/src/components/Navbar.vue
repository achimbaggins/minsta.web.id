<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">Minsta</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a><router-link to="/home">Home</router-link></a></li>
          <li><a><router-link to="/profile">My Gallery</router-link></a></li>
          
        </ul>
        <ul class="right hide-on-med-and-down" style="padding-right:30px;">
          <li>Welcome Home: <b>{{ myname }}</b></li>
          <li><a @click="doLogout">Logout</a></li>
        </ul>

      </div>
    </nav>  
  </div>
</template>

<script>
  export default {
    data () {
      return {
        myname: localStorage.getItem('name')
      }
    },
    methods: {
      doLogout () {
        localStorage.clear()
        this.$router.push('/')
      }
    }
  }
</script>