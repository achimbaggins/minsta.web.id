<template>
<div>
   <Navbar></Navbar>
   <div class="row">
    <Forms></Forms>
    <user-gallery></user-gallery>
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
      }
    },
    created () {
      this.checkLogin()
    }
  }
</script>