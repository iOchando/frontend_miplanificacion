<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="white"
    flat
    height="75"
  >
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight"
      v-text="$route.name"
    />

    <v-spacer />

    <div class="mx-3" />

    <v-btn
      class="ml-2"
      min-width="0"
      text
      to="/"
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>
    
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ml-2"
          min-width="0"
          text
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-btn
             color="primary"
             text
              @click="logout"
            >
              Cerrar sesión
            </v-btn>
      </v-list>
    </v-menu>
  </div>
  

  </v-app-bar>
</template>

<script>
  // Components
  import { VHover, VListItem } from 'vuetify/lib'

  // Utilities
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'DashboardCoreAppBar',

    components: {
      AppBarItem: {
        render (h) {
          return h(VHover, {
            scopedSlots: {
              default: ({ hover }) => {
                return h(VListItem, {
                  attrs: this.$attrs,
                  class: {
                    'black--text': !hover,
                    'white--text secondary elevation-12': hover,
                  },
                  props: {
                    activeClass: '',
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                }, this.$slots.default)
              },
            },
          })
        },
      },
    },

    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    
    computed: {
      ...mapState(['drawer']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
      logout: function () {
        this.$session.destroy()
        this.$router.push('/login')
        this.$swal({
          text: 'SE HA FINALIZADO SU SESIÓN',
          showConfirmButton: true,
          showCloseButton: false,
          showCancelButton: false,
          icon: 'success',
        })
      },
    },
  }
</script>
