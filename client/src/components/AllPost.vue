<template>
   <div class="row">
    <div class="container">
      <div class="col m3" v-for="(data, index) in allpost" :key="index" :postid="data._id">
          <div class="card">
            <router-link :to="'/home/' + data._id">
              <div class="card-image">
              <img :src="data.img" style="width:300px;height:300px;">
              <span class="card-title"></span>
              <a @click="deletePost(data._id)" class="btn-floating halfway-fab waves-effect waves-light red" v-if="myid === data.author._id"><i class="material-icons">close</i></a>
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
    },
    methods: {
      deletePost (idPost) {
        this.$http.delete(`/${idPost}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(result => {
          alert(result.data)
        })
        .catch(err => {
          console.log(err)
          alert('gagal menghapus')
        })
      }
    }
  }
</script>