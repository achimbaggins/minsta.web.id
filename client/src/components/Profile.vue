<template>
<div>
   <Navbar></Navbar>
   <div class="row">
    <Form></Form>
    <UserGallery></UserGallery>
   </div>
   <Footer></Footer>
</div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import UserGallery from '@/components/UserGallery'
  import Form from '@/components/Form'
  import Footer from '@/components/Footer'
  export default {
    components: {
      Navbar,
      UserGallery,
      Form,
      Footer
    }
  }
</script>