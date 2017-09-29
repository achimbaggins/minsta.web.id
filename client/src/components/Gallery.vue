<template>
<div>
 <router-view :allpost="allpost"></router-view>
</div>
</template>

<script>
  export default {
    data () {
      return {
        allpost: [],
        myid: localStorage.getItem('id')
      }
    },
    methods: {
      getAllPost () {
        this.$http.get('/', {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(result => {
          this.allpost = result.data.reverse()
        })
      }
    },
    created () {
      this.getAllPost()
    }
  }
</script>