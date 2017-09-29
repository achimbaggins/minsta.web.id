<template>
   <div class="row">
    <div class="container">
      <div class="col m3" v-for="(data, index) in allpost" :key="index">
          <div class="card">
            <div class="card-image">
              <img :src="data.img">
              <span class="card-title"></span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
              <p><b>{{ data.author.name }}</b></p>
              <p>{{ data.caption }}</p>
              <p>Uploaded: {{ data.createdAt }}</p>
            </div>
          </div>
      </div>
    </div>
   </div>
</template>

<script>
  export default {
    data () {
      return {
        allpost: []
      }
    },
    methods: {
      getAllPost () {
        this.$http.get('/')
        .then(result => {
          this.allpost = result.data
        })
      }
    },
    created () {
      this.getAllPost()
    }
  }
</script>