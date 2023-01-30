<template>
  <v-container
    id="Plantas"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
      >
        <base-material-card
          icon="mdi-clipboard-text"
          color="primary"
          title="Registro de Plantas"
          class="px-5 py-3"
        >
          <v-spacer />
          <v-col
            md="4"
            offset-md="8"
          >
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            />
          </v-col>
          <v-data-table
            :headers="tabla_headers"
            :items="tabla_items"
            :search="search"
          >
            <template v-slot:item.actions="{ item }">
              <div class="text-truncate">
                <v-icon
                  class="mr-2"
                  color="primary"
                  @click="showEditDialog(item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  color="pink"
                  class="mr-2"
                  @click="deleteItem(item)"
                >
                  mdi-delete
                </v-icon>
              </div>
            </template>
          </v-data-table>
          <v-dialog
            v-model="dialog"
            max-width="600px"
            
          >
            <template v-slot:activator="{ on }">
              <div class="d-flex">
                <v-btn
                  color="secondary"
                  dark
                  v-on="on"
                  @click="cerrarDialogo()"
                >
                  Nueva Planta
                </v-btn>
              </div>
            </template>
            <v-card>
              <v-toolbar
                dark
                color="primary"
              >
                <v-btn
                  icon
                  dark
                  @click="cerrarDialogo"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>
                  <span v-if="editedItem.id">Editar Planta id: {{ editedItem.id }}</span>
                  <span v-else>Crear Nueva Planta</span>
                </v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                  <v-btn
                    text
                    @click="saveItem(editedItem)"
                  >
                    Guardar
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <v-row align="center">
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="12"
                  >
                    <v-text-field
                      v-model="editedItem.nombre"
                      type="text"
                      label="Nombre de la planta "
                      :rules="rules.nombre"
                      hint="Planta"
                    />
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="6"
                  >
                  <vuetify-money
                    v-model="editedItem.capacidadinstalada"
                    v-bind:label="labelInstalada"
                    v-bind:dense="dense1"
                    v-bind:options="optionsUds"
                    :valueOptions="valueOptions1"
                 />
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="6"
                  >
                  <vuetify-money
                    v-model="editedItem.capacidadoperativa"
                    v-bind:label="labelOperativa"
                    v-bind:dense="dense1"
                    v-bind:options="optionsUds"
                    :valueOptions="valueOptions1"
                 />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-dialog>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Plantas',
    data () {
      return {
        labelInstalada: "Capacidad Instalada",
        labelOperativa: "Capacidad Operativa",
        dense1: true,
        valueOptions1: {
          max: 9999999999,
          maxEvent: "CustomMaxEvent"
        },
        optionsUds: {
          locale: "pt-BR",
          suffix: "uds",
          length: 12,
          precision: 0
        },

        search: '',
        rules: {
          nombre: [
            v => !!v || 'El valor es requerido',
            v => (v && v.length > 2) || 'Mínimo 3 caracteres',
            v => (v && v.length < 120) || 'Maximo 120 caracteres',
          ],
        },
        tabla_headers: [
          {
            text: 'Id', value: 'id',
          },
          {
            text: 'Planta', value: 'nombre',
          },
          {
            text: 'Capacidad instalada', value: 'capacidadinstalada',
          },
          {
            text: 'Capacidad operativa', value: 'capacidadoperativa',
          },
          {
            text: 'Acciones', value: 'actions', sortable: false,
          },
        ],
        tabla_items: [],
        dialog: false,
        editedItem: { user_update: this.$session.get('iduser') },
        data_draggable: {},
      }
    },
    mounted () {
      this.loadItems()
    },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
      showEditDialog (item) {
        this.editedItem = item || {}
        this.dialog = !this.dialog
      },
      loadItems () {
        this.tabla_items = []
        axios.get(this.$session.get('url') + 'planificacion/plantas/',
                  { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
          .then((response) => {
            this.tabla_items = response.data.map((item) => {
              return {
                id: item.id,
                nombre: item.nombre,
                capacidadinstalada: item.capacidadinstalada,
                capacidadoperativa: item.capacidadoperativa,
                ...item.fields,
              }
            })
          }).catch((error) => {
            console.log(error)
          })
      },
      saveItem (item) {
        item.nombre = item.nombre.toUpperCase()
        let method = 'post'
        let url = this.$session.get('url') + 'planificacion/plantas/'
        const id = item.id
        if (+this.editedItem.capacidadoperativa <= +this.editedItem.capacidadinstalada){
          if (id) {
            item.user_update = this.$session.get('iduser')
            method = 'patch'
            url = this.$session.get('url') + 'planificacion/plantas/' + id + '/'
            console.log(item)
            axios[method](url, item,
                          {
                            headers:
                              {
                                Authorization: 'JWT ' + this.$session.get('token'),
                                'Content-Type': 'application/json',
                              },
                          }).then((response) => {
              if (response.data) {
                console.log(response.data)
                this.$swal({
                  text: 'SE EDITO EL REGISTRO EXITOSAMENTE',
                  showConfirmButton: false,
                  showCloseButton: false,
                  showCancelButton: false,
                  timer: 1000,
                  icon: 'success',
                })
          
              }
              this.cerrarDialogo()
            }).catch((error) => {
              this.$swal({
                text: 'SE GENERO UN ERROR AL EDITAR',
                showConfirmButton: true,
                showCloseButton: false,
                showCancelButton: false,
                timer: 1000,
                icon: 'error',
              })
              console.log(error)
            })
          } else {
            item.user_create = this.$session.get('iduser')
            item.user_update = this.$session.get('iduser')
            axios[method](url, item,
                          {
                            headers:
                              {
                                Authorization: 'JWT ' + this.$session.get('token'),
                                'Content-Type': 'application/json',
                              },
                          }).then((response) => {
              if (response.data.id) {
                console.log(response.data)
                this.tabla_items.push(response.data)
                this.$swal({
                  text: 'SE GUARDO EL REGISTRO EXITOSAMENTE',
                  showConfirmButton: true,
                  showCloseButton: false,
                  showCancelButton: false,
                  timer: 1000,
                  icon: 'success',
                })
              }
              this.cerrarDialogo()
            }).catch((error) => {
              this.$swal({
                text: 'SE GENERO UN ERROR AL GUARDAR',
                showConfirmButton: true,
                showCloseButton: false,
                showCancelButton: false,
                timer: 1000,
                icon: 'error',
              })
              console.log(error)
            })
          }
        }else{
          this.$swal({
              text: 'CAPACIDAD OPERATIVA NO PUEDE SUPERAR LA CAPACIDAD INSTALADA',
              showConfirmButton: true,
              showCloseButton: false,
              showCancelButton: false,
              timer: 1800,
              icon: 'error',
            })
        }
      },
      cerrarDialogo: function () {
        this.editedItem = {}
        this.tabla_componentes_items = {}
        this.dialog = !this.dialog
      },
      deleteItem (item) {
        this.$swal({
          text: 'Esta seguro de eliminar el registro?',
          showConfirmButton: true,
          showCloseButton: true,
          showCancelButton: true,
          icon: 'warning',
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/plantas/' + item.id + '',
                         { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
              .then((response) => {
                console.log(response)
                this.$swal({
                  text: 'Registro eliminado',
                  showConfirmButton: true,
                  showCloseButton: false,
                  showCancelButton: false,
                  timer: 1500,
                  icon: 'success',})
                this.tabla_items.splice(this.tabla_items.findIndex(e => e.nombre === item.nombre), 1)
              }).catch((error) => {
                this.$swal('Se genero un error', '', 'error')
                console.log(error)
              })
          }
        })
      },
    },
  }
</script>
