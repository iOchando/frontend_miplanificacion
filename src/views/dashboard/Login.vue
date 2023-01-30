<template>
  <v-app>
    <v-row
      align="center"
      justify="center"
    >
      <base-material-card
        color="primary"
      >
        <template v-slot:heading>
          <v-img
          aspect-ratio="4.9"
          width="500"
          contain
          src="../../assets/logo12.png"
        />
        </template>
        <v-container class="py-0">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="credentials.username"
              label="Usuario"
              :rules="rules.username"
              prepend-icon="mdi-account-circle"
            />
            <v-text-field
              v-model="credentials.password"
              label="Contraseña"
              :rules="rules.password"
              prepend-icon="mdi-lock"
              type="password"
            />
            <v-row
              align="center"
              justify="center"
            >
              <v-btn
                color="primary"
                class="mr-0"
                :disabled="!valid"
                @click="login"
                v-on:keyup.enter="login"
              >
                Iniciar sesión
              </v-btn>
            </v-row>
            <br>
          </v-form>
        </v-container>
      </base-material-card>
    </v-row>
    <v-row>
      <dashboard-core-view />
    </v-row>
  </v-app>
</template>

<script>
  import axios from 'axios'
  import router from '../../router'
  export default {
    name: 'Auth',
    components: {
    },
    data: () => ({
      expandOnHover: false,
      credentials: {},
      valid: true,
      loading: false,
      rules: {
        username: [
          v => !!v || 'El usuario es requerido',
          v => (v && v.length > 3) || 'Mínimo 3 caracteres',
        ],
        password: [
          v => !!v || 'La contraseña es requerida',
          v => (v && v.length >= 5) || 'Debe tener por lo menos 5 digitos',
        ],
      },
    }),
    methods: {
      login () {
        if (this.$refs.form.validate()) {
          this.loading = true
          axios.post(window.location.protocol + '//' + window.location.hostname + ':8000/auth/', this.credentials)
            .then(data => {
              this.$session.start()
              this.$session.set('token', data.data.token)
              this.$session.set('puerto', '8000/')
              this.$session.set('url', window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto'))
              axios.post(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/get_id/', { username: this.credentials.username },
                         { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
                .then((response) => {
                  console.log(response.data.id)
                  this.$session.set('iduser', response.data.id)
                  router.push('/')
                }).catch((error) => {
                  console.log(error)
                })
            }).catch(e => {
              this.loading = false
              this.$swal({
                text: 'Usuario o contraseña equivocada',
                showConfirmButton: false,
                showCloseButton: true,
                timer: 3000,
                icon: 'warning',
              })
              console.log(e)
            })
        }
      },
    },
  }
</script>
