<template>
  <div>
  <!-- <body style="background: linear-gradient(-45deg,#23A6D5, #23D5AB) !important;height:1024px;"> -->
    <!-- <button class="btn" style="margin-top: 25%;margin-left:45%;">Login</button> -->
  <!-- </body> -->

  <div style="background: linear-gradient(-45deg,#23A6D5, #23D5AB) !important;height:1000px;width:100%;"  >
  <center><a href="#" class="brand-logo center"><img src="../assets/minsta_logo.png" alt="logo" style="width:400px;margin-top:230px !important;"></a></center><center><fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button></center>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,public_profile,publish_actions,manage_pages,publish_pages',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      var self = this
      // window.FB.api('/me', {fields: ['id', 'name', 'email', 'pictures']}, dude => {
        // console.log(response)
        // console.log(`Good to see you, ${dude.name}.`)
      localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
      console.log(response)

      axios({
        method: 'post',
        url: `http://localhost:3000/login`,
        headers: {
          fbaccesstoken: localStorage.getItem('fbaccesstoken')
        }
      })
      .then(loginResponse => {
        localStorage.setItem('token', loginResponse.data.token)
        localStorage.setItem('name', loginResponse.data.name)
        localStorage.setItem('id', loginResponse.data.id)
        self.$router.push('/home')
        console.log('==========datanya', loginResponse.data)
      })
      .catch(err => {
        console.log(err)
        self.$router.push('/')
      })
      // })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    },
    checkLogin () {
      if (localStorage.fbaccesstoken) {
        this.$router.push('/home')
      }
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>
  .btn {
    background: #23A6D5 !important;
    color: white !important;
  }
  .fb-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 4px 8px;
    border-radius: 3px;
    background-color: #4267b2;
    color: #fff;
  }
</style>