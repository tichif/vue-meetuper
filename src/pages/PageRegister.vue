<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please register to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://placehold.it/128x128" />
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="text"
                    placeholder="Username"
                    v-model="form.username"
                    @blur="$v.form.username.$touch()"
                  />
                  <div v-if="$v.form.username.$error" class="form-error">
                    <span
                      v-if="!$v.form.username.required"
                      class="help is-danger"
                    >Username is required</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="text"
                    placeholder="Name"
                    v-model="form.name"
                    @blur="$v.form.name.$touch()"
                  />
                  <div v-if="$v.form.name.$error" class="form-error">
                    <span v-if="!$v.form.name.required" class="help is-danger">Name is required</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="email"
                    placeholder="Your Email"
                    v-model="form.email"
                    @blur="$v.form.email.$touch()"
                  />
                  <div v-if="$v.form.email.$error" class="form-error">
                    <span v-if="!$v.form.email.required" class="help is-danger">Email is required</span>
                    <span v-if="!$v.form.email.email" class="help is-danger">Email is invalid</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="text"
                    placeholder="Avatar"
                    autocomplete
                    v-model="form.avatar"
                    @blur="$v.form.avatar.$touch()"
                  />
                  <div v-if="$v.form.avatar.$error" class="form-error">
                    <span v-if="!$v.form.avatar.url" class="help is-danger">URL format is not valid</span>
                    <span
                      v-if="!$v.form.avatar.supportedFileType"
                      class="help is-danger"
                    >Selected file type is not valid</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autocomplete="new-password"
                    v-model="form.password"
                    @blur="$v.form.password.$touch()"
                  />
                  <div v-if="$v.form.password.$error" class="form-error">
                    <span
                      v-if="!$v.form.password.required"
                      class="help is-danger"
                    >Password is required</span>
                    <span
                      v-if="!$v.form.password.minLength"
                      class="help is-danger"
                    >Password mut be at least 6 characters</span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    type="password"
                    placeholder="Password Confirmation"
                    autocomplete="off"
                    v-model="form.passwordConfirmation"
                    @blur="$v.form.passwordConfirmation.$touch()"
                  />
                  <div v-if="$v.form.passwordConfirmation.$error" class="form-error">
                    <span
                      v-if="!$v.form.passwordConfirmation.required"
                      class="help is-danger"
                    >Password Confirmation is required</span>
                    <span
                      v-if="!$v.form.passwordConfirmation.sameAsPassword"
                      class="help is-danger"
                    >Password must be matched</span>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="button is-block is-info is-large is-fullwidth"
                @click.prevent="register"
                :disabled="isFormInvalid"
              >Register</button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link :to="{ name: 'PageLogin' }">Login</router-link>&nbsp;·&nbsp;
            <a>Sign Up With Google</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  required,
  email,
  minLength,
  sameAs,
  url
} from "vuelidate/lib/validators";
import { supportedFileType } from "@/helpers/validators";
export default {
  data() {
    return {
      form: {
        username: null,
        name: null,
        email: null,
        avatar: null,
        password: null,
        passwordConfirmation: null
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      name: {
        required
      },
      email: {
        required,
        email
      },
      avatar: {
        url,
        supportedFileType
      },
      password: {
        required,
        minLength: minLength(6)
      },
      passwordConfirmation: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    register() {
      // Validate the form
      this.$v.form.$touch();

      this.$store
        .dispatch("auth/registerUser", this.form)
        .then(() => {
          this.$router.push("/login");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    isFormInvalid() {
      return this.$v.form.$invalid;
    }
  }
};
</script>

<style scoped>
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>
