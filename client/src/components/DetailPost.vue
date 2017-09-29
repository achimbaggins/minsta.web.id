<template>
  <div>
    <div class="container">
      <div class="col m3">
          <div class="card">
            <div class="card-image">
              <img :src="photo[0].postId.img">
              <span class="card-title"></span>
            </div>
            <div class="card-content">
              <p><b>{{ photo[0].postId.caption }}</b></p>
            </div>
          </div>
      </div>

      <div class="col m3" v-for="comment in photo">
          <div class="card">
            <div class="card-content">
              <p><b>{{ comment.comment }}</b></p>
              <p>{{ comment.postId.author}}</p>
            </div>
          </div>
      </div>

      <div class="col m3">
          <div class="card">
            <div class="card-content">
              <input type="text" v-model="komentar.comment">
              <button type="button" @click="kirimkomentar"> Comment Dong </button>
            </div>
          </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    props: ['postid'],
    data () {
      return {
        photo: [],
        komentar: {
          comment: '',
          postId: this.postid,
          authorId: localStorage.getItem('id')
        }
      }
    },
    methods: {
      getPost (id) {
        this.$http.get(`/comments/${id}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(result => {
          this.photo = result.data
        })
        .catch(err => console.log(err))
      },
      kirimkomentar () {
        this.$http.post(`/comments/${this.postid}`, this.komentar, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(result => {
          this.photo.push(result.data)
        })
        .catch(err => console.log(err))
      }
    },
    created () {
      this.getPost(this.postid)
    }
  }
</script>