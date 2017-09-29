<template>
   <div class="row">
    <div class="container">
      <div class="col m3" v-for="(data, index) in allpost" :key="index" :postid="data._id">
          <div class="card">
            <router-link :to="'/home/' + data._id">
              <div class="card-image">
                <img :src="data.img">
                <span class="card-title"></span>
                <a class="btn-floating halfway-fab waves-effect waves-light red" v-if="myid === data.author._id"><i class="material-icons">close</i></a>
              </div>
              <div class="card-content">
                <p><b>{{ data.author.name }}</b></p>
                <p>{{ data.caption }}</p>
                <p>Uploaded: {{ data.createdAt }}</p>
              </div>
            </router-link>
          </div>
      </div>
    </div>
   </div>
</template>

<script>
  export default {
    props: ['allpost'],
    data () {
      return {
        // allpost: [],
        myid: localStorage.getItem('id')
      }
    }
    // methods: {
    //   getAllPost () {
    //     this.$http.get('/', {
    //       headers: {
    //         token: localStorage.getItem('token')
    //       }
    //     })
    //     .then(result => {
    //       this.allpost = result.data.reverse()
    //     })
    //   }
    // },
    // created () {
    //   this.getAllPost()
    // }
  }
</script>