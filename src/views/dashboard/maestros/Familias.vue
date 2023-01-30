<template>
  <v-container
    id="Familia"
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
          title="Registro de Familias"
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
          <template v-slot:item.itemstatus="{ item }">
              <v-switch
                v-model="item.status"
                @change="editItem(item)"
              ></v-switch>
            </template>
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
                  @click="cerrarDialogo"
                >
                  Nueva Familia
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
                  <span>Crear Nueva Familia</span>
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
                  cols="12"
                  md="9"
                >
                    <v-text-field
                      v-model="editedItem.nombre"
                      type="text"
                      label="Nombre de la Familia"
                      :rules="rules.nombre"
                    />
                  </v-col>
                <v-col
                  cols="12"
                  md="3"
                >
                    <v-text-field
                      v-model="editedItem.rendimiento"
                      type="number"
                      label="Rendimiento"
                    />
                </v-col>
                </v-row>
                <v-row>
                  <v-col order="2">
                  <v-switch
                    v-model="editedItem.status"
                    :label="`Estatus`"
                  ></v-switch>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="dialog2"
            max-width="600px"
            
          >
            <v-card>
              <v-toolbar
                dark
                color="primary"
              >
                <v-btn
                  icon
                  dark
                  @click="cerrarDialogo2"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>
                  <span>Editar Familia</span>
                </v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                  <v-btn
                    text
                    @click="editdItem(editedItem)"
                  >
                    Guardar
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <v-row align="center">
                <v-col
                  cols="12"
                  md="9"
                >
                    <v-text-field
                      v-model="editedItem.nombre"
                      type="text"
                      label="Nombre de la Familia"
                      :rules="rules.nombre"
                    />
                  </v-col>
                <v-col
                  cols="12"
                  md="3"
                >
                    <v-text-field
                      v-model="editedItem.rendimiento"
                      type="number"
                      label="Rendimiento"
                    />
                </v-col>
                </v-row>
                <v-row>
                  <v-col order="2">
                  <v-switch
                    v-model="editedItem.status"
                    :label="`Estatus`"
                  ></v-switch>
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
    name: 'Familia',
    data () {
      return {
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
            text: 'Agrupación', value: 'nombre',
          },
          {
            text: 'Rend %', value: 'rendimiento',
          },
          {
            text: 'Estatus', value: 'itemstatus',
          },
          {
            text: 'Acciones', value: 'actions', sortable: false,
          },
        ],
        tabla_items: [],
        dialog: false,
        dialog2: false,
        editedItem: { user_update: this.$session.get('iduser') },
        data_draggable: {},
      }
    },
    mounted () {
      this.loadItems()
    },
    methods: {
      showEditDialog (item) {
        this.editedItem = item || {}
        this.editedItem.status = false
        this.dialog2 = !this.dialog2
      },
      loadItems () {
        this.tabla_items = []
        axios.get(this.$session.get('url') + 'planificacion/familia/',
                  { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
          .then((response) => {
            this.tabla_items = response.data.map((item) => {
              return {
                id: item.id,
                nombre: item.nombre,
                rendimiento: item.rendimiento,
                status: item.status,
                ...item.fields,
              }
            })
          }).catch((error) => {
            console.log(error)
          })
      },
      editItem(item){
        item.nombre = item.nombre.toUpperCase()
        let method = 'patch'
        let url = this.$session.get('url') + 'planificacion/familia/'
        const id = item.id
        item.user_update = this.$session.get('iduser')
        url = this.$session.get('url') + 'planificacion/familia/' + id + '/'
        console.log(item)
        axios[method](url, item,
                  {
                    headers:
                      {
                        Authorization: 'JWT ' + this.$session.get('token'),
                        'Content-Type': 'application/json',
                      },
                  })
      },
      editdItem(item){
        console.log(item)
        item.nombre = item.nombre.toUpperCase()
        let method = 'patch'
        let url = this.$session.get('url') + 'planificacion/familia/'
        const id = item.id
        item.user_update = this.$session.get('iduser')
        url = this.$session.get('url') + 'planificacion/familia/' + id + '/'
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
              this.cerrarDialogo2()
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
        
      },
      cerrarDialogo: function () {
        this.editedItem = {}
        this.editedItem.status = false
        this.dialog = !this.dialog
      },
      cerrarDialogo2: function () {
        this.editedItem = {}
        this.editedItem.status = false
        this.dialog2 = !this.dialog2
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
            axios.delete(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/familia/' + item.id + '',
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
      saveItem (item) {
        item.nombre = item.nombre.toUpperCase()
        let method = 'post'
        let url = this.$session.get('url') + 'planificacion/familia/'
        const id = item.id
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
      },
  }
</script>
