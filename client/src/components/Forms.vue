<template>
  <div>
    <div class="container">
        <div class="col s4"> 
            <form action="#">
                <p><strong>Upload To Gallery</strong></p>
                <div class="file-field input-field">
                  <div class="btn">
                    <span>File</span>
                    <input type="file" multiple>
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
                    <textarea id="icon_prefix2" class="materialize-textarea" placeholder="Caption"></textarea>
                  </div>
                </div>
              </form> 
        </div>
      </div>
  </div>
</template>

<script>
  export default {
  }
</script>