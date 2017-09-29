<template>
  <div>
    <div class="container">
      <div class=" col s4" v-for="(data, index) in userposts" :key="index">
          <div class="card">
            <div class="card-image">
              <img :src="data.img">
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
              <p><b>{{ data.author.name }}</b></p>
              <p>{{ data.caption }}</p>
              <p>Uploaded: {{ data.createdAt }}</p>
              <social-sharing :url="data.img" inline-template>
    <network network="facebook">
      <button type="button" name="button"><i class="fa fa-facebook"></i>Share Dong Say!</button>
    </network>
  </social-sharing>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['userposts']
  }
</script>