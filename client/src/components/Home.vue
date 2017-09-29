<template>
  <div>
  <Navbar></Navbar>
  <Gallery></Gallery>
  <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Gallery from '@/components/Gallery'
  import Footer from '@/components/Footer'
  export default {
    components: {
      Navbar,
      Gallery,
      Footer
    }
  }
</script>