<template>
<div>
   <Navbar></Navbar>
   <div class="row">
    <Forms></Forms>
    <user-gallery :userposts="userposts" @dataBaru="tambahinDong"></user-gallery>
   </div>
   <Footers></Footers>
</div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import UserGallery from '@/components/UserGallery'
  import Forms from '@/components/Forms'
  import Footers from '@/components/Footers'
  export default {
    data () {
      return {
        userposts: [],
        myid: localStorage.getItem('id')
      }
    },
    components: {
      Navbar,
      UserGallery,
      Forms,
      Footers
    },
    methods: {
      checkLogin () {
        if (!localStorage.fbaccesstoken) {
          this.$router.push('/')
        }
      },
      getuserpost () {
        this.$http.get(`/userphoto/${this.myid}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(ok => {
          this.userposts = ok.data.reverse()
        })
      },
      tambahinDong (data) {
        console.log('datanya', data)
        this.userposts.unshift(data)
      }
    },
    mounted () {
      this.checkLogin()
      this.getuserpost()
    }
  }
</script>