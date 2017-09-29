<template>
  <div>
    <Navbar></Navbar>
    <router-view :allpost="allpost"></router-view>
    <!-- <Gallery></Gallery> -->
    <Footers></Footers>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Gallery from '@/components/Gallery'
  import Footers from '@/components/Footers'
  export default {
    data () {
      return {
        allpost: [],
        myid: localStorage.getItem('id')
      }
    },
    components: {
      Navbar,
      Gallery,
      Footers
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
      },
      checkLogin () {
        if (!localStorage.fbaccesstoken) {
          this.$router.push('/')
        }
      }
    },
    created () {
      this.checkLogin()
      this.getAllPost()
    }
  }

</script>