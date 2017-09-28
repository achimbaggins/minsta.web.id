<template>
  <div>
  <Navbar></Navbar>
  <Gallery></Gallery>
  <Footers></Footers>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Gallery from '@/components/Gallery'
  import Footers from '@/components/Footers'
  export default {
    components: {
      Navbar,
      Gallery,
      Footers
    }
  }
</script>