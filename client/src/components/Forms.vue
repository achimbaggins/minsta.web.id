<template>
  <div>
    <div class="container">
        <div class="col s4"> 
            <form action="#">
                <p><strong>Upload To Gallery</strong></p>
                <div class="file-field input-field">
                  <div class="btn">
                    <span>File</span>
                    <input type="file" @change="appendFile">
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path" type="text" placeholder="Upload one or more files">
                  </div>
                </div>
              </form>
              <form>
                <div class="row">
                  <div class="input-field">
                    <i class="material-icons prefix">mode_edit</i>
                    <textarea id="icon_prefix2" class="materialize-textarea" placeholder="Caption" v-model="newPost.caption"></textarea>
                    <button type="button" class="btn" @click="upload">Submit</button>
                  </div>
                </div>
              </form> 
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newPost: {
          caption: '',
          img: '',
          author: localStorage.getItem('id')
        }
      }
    },
    methods: {
      appendFile (e) {
        var data = e.target.files || e.dataTransfer.files
        this.newPost.img = data[0]
      },
      upload () {
        var data = new FormData()
        data.append('file', this.newPost.img)
        data.append('caption', this.newPost.caption)
        data.append('authorId', this.newPost.author)
        this.$http.post('/posts', data)
        .then(result => {
          alert('sukses upload!!!')
        })
      }
    }
  }
</script>