<template>
  <div>
    <div class="container">
      <h1>Hello world</h1>
      <form class="pt-3" @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">email</label>
          <input
            v-model="email"
            @blur="$v.email.$touch()"
            type='email'
            id="email"
            :class="{'is-invalid': $v.email.$error}"
            class="form-control"
          >
          <div v-if="!$v.email.required" class="invalid-feedback">
            Email field is required
          </div>
          <div v-if="!$v.email.email" class="invalid-feedback">
            Email is not valid
          </div>
          <div v-if="!$v.email.uniqEmail" class="invalid-feedback">
            this email is in use
          </div>
        </div>
        <div class="form-group">
          <label for="pass">password</label>
          <input
            v-model="password"
            @blur="$v.password.$touch()"
            type='password'
            id="pass"
            :class="{'is-invalid': $v.password.$error}"
            class="form-control"
          >
          <div v-if="!$v.password.minLength" class="invalid-feedback">
            Min length of password is 6 now it is {{password.length}}
          </div>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm pass</label>
          <input
            v-model="confirmPassword"
            @blur="$v.confirmPassword.$touch()"
            type='password'
            id="confirmPassword"
            :class="{'is-invalid': $v.confirmPassword.$error}"
            class="form-control"
          >
          <div v-if="!$v.password.sameAs" class="invalid-feedback">
            Passwords should match
          </div>
        </div>
        <button type="submit" class="btn btn-success" :disabled="$v.$invalid">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>

  import { required, email, minLength, sameAs, maxLength } from 'vuelidate/lib/validators'
  export default {
    components: {
    },
    name: 'app',
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('email ', this.email);
        console.log('password ', this.password);
      }
    },
    computed: {
      isValidEmail() {

      }
    },
    validations: {
      email: {
        required,
        email,
        uniqEmail: function (newEmail) {
          if(newEmail == '') return  true;

          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const value = newEmail !== 'test@gmail.com';
              resolve(value)
            },1000)
          })
        }
      },
      password: {
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs('password')
      }
    }
  }
</script>

<style lang="scss">
  .list {
    max-width: 200px;
    margin: 0 auto;
    border: 2px solid red;
    padding: 10px;
    li {
      display: block;
      margin-bottom: 10px;
    }
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
