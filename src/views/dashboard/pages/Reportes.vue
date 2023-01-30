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
          icon="mdi-chart-box-outline"
          color="primary"
          class="px-5 py-3"
        >
          <v-form
            ref="form"
          >
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-select
                    v-model="planta"
                    label="Planta"
                    :items="planificaciones"
                    item-text="planta"
                    item-value="planta"
                    hint="por favor seleccione una planta"
                    v-on:change="cargaCalendarioano(planta)"
                  />
                </v-col>                
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  md="3"
                >
                  <v-select
                    v-model="editedItem.anocon"
                    label="Año contable"
                    :items="calendarioano"
                    item-text="anocon"
                    item-value="anocon"
                    v-on:change="cargaCalendariomes(editedItem.anocon)"
                  />           
                </v-col>
                <v-col
                  cols="12"
                  md="3"
                >
                  <v-select
                    v-model="editedItem.mescon"
                    label="Mes contable"
                    :items="calendariomes"
                    item-text="mescon"
                    item-value="mescon"
                    v-on:change="cargaCalendariosem(editedItem.mescon)"
                  />
                </v-col>
                <v-col
                  cols="6"
                  md="3"
                >
                  <v-select
                    v-model="editedItem.semconId"
                    label="Semana contable"
                    :items="calendariosem"
                    type="submit"
                    item-text="semcon"
                    item-value="id"
                    v-on:change="actualizarID(editedItem.semconId)"
                  />
                </v-col>
      </v-row>
      </v-container>
      <v-form>
          <v-divider />
        <v-container>
          <v-card-title>
          <h1 class="display-1  text-white font-weight-bold font-italic">
            Generar Reporte:
          </h1> 
        </v-card-title>
          <v-row>   
            <v-col
                  cols="6"
                  md="3"
                ></v-col>
          </v-row>
          </v-container>
            <v-container>
              <v-row 
                align="end"
                justify="start"
              >
                    <v-btn
                      color="secondary"
                      dark
                      @click="reportExcel()"
                    >
                      Exportar Excel
                      <v-icon>mdi-file-excel</v-icon>
                    </v-btn>           
              </v-row>
              </v-container>
        
      </v-form>
      </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>  
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Planificacion',
    data () {
      return {
        planificaciones: [],
        calendarioano: [],
        calendariomes: [],
        calendariosem: [],
        editedItem: {},
        id_planificacion: null,
      }
    },
    mounted () {
      this.cargaPlanificaciones()
      if (this.editedItem.planta && this.editedItem.anocon && this.editedItem.semcon && this.editedItem && this.editedItem.mescon) {
        this.editedItem.anocon = this.$session.get('anocon')
        this.editedItem.mescon = this.$session.get('mescon')
        this.editedItem.semcon = this.$session.get('semcon')
        this.editedItem.planta = this.$session.get('planta')
        this.buscarPlanificacion(this.editedItem)
        this.cargaCapacidades(this.editedItem.planta)
        this.cargaCalendariomes(this.editedItem.anocon)
        this.cargaCalendariosem(this.editedItem.mescon)
      }
    },
    computed: {
    },
    methods: {
      cargaPlanificaciones () {
        this.planificaciones = []
        axios.get(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/planificaciones/',
                  { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
          .then((response) => {
            this.planificaciones = response.data
          }).catch((error) => {
            console.log(error)
          })
      },

      cargaFecha (semcon) {
        for (var i = 0; i < this.calendarioano.length; i++){
          if (this.calendarioano[i].ANOCON == this.editedItem.anocon && this.calendarioano[i].MESCON == this.editedItem.mescon && this.calendarioano[i].SEMCON == semcon){
            this.fecini = this.calendarioano[i].FECINI
            this.fecfin = this.calendarioano[i].FECFIN
            this.editedItem.semcon = semcon
            this.buscarPlanificacion()
            this.resetOptions()
            this.resetOptions2()
          }
        }
      },
      cargaCalendarioano (planta) {
        this.calendarioano = []
        this.calendariomes = []
        this.calendariosem = []
        this.id_planificacion = null
        for (var i = 0; i < this.planificaciones.length; i++){
          if (this.planificaciones[i].planta == planta){
            this.calendarioano.push(this.planificaciones[i])
          }
        }
      },
      cargaCalendariomes (anocon) {
        this.editedItem.mescon = this.$session.remove() || null
        this.editedItem.semcon = this.$session.remove() || null
        this.calendariomes = []
        this.calendariosem = []
        this.id_planificacion = null
        for (var i = 0; i < this.calendarioano.length; i++){
          if (this.calendarioano[i].anocon == anocon){
            this.calendariomes.push(this.calendarioano[i].mescon)
          }
        }
      },
      cargaCalendariosem (mescon) {
        this.calendariosem = []
        this.id_planificacion = null
        for (var i = 0; i < this.calendarioano.length; i++){
          if (this.calendarioano[i].mescon == mescon && this.calendarioano[i].anocon == this.editedItem.anocon){
            this.calendariosem.push(this.calendarioano[i])
          }
        }
      },
      actualizarID (id) {
        this.id_planificacion = id
      },
      reportExcel () {
        if (this.id_planificacion) {
            //const url = this.$session.get('url') + 'planificacion/report-excel/' + this.id_planificacion
            const url = 'http://127.0.0.1:8000/planificacion/report-excel/' + this.id_planificacion
            window.open(url, '_blank');
          
            /*axios.get(url,
                { 
                  headers:
                              {
                                Authorization: 'JWT ' + this.$session.get('token'),
                                'Content-Type': 'application/ms-excel',
                              }
                })
              .then((response) => {
                console.log(response.data)
                if (response.data) {
                  this.$swal({
                    text: 'SE GENERO EL REPORTE',
                    showConfirmButton: false,
                    showCloseButton: false,
                    showCancelButton: false,
                    timer: 1000,
                    icon: 'success',
                  })
                }
            }).catch((error) => {
              this.$swal({
                text: 'OCURRIO UN ERROR AL GENERAR EL REPORTE',
                showConfirmButton: true,
                showCloseButton: false,
                showCancelButton: false,
                timer: 1000,
                icon: 'error',
              })
              console.log(error)
            })*/
        }
        else {
          this.$swal({
                text: 'POR FAVOR SELECCIONE UNA PLANIFICACIÓN',
                showConfirmButton: true,
                showCloseButton: false,
                showCancelButton: false,
                timer: 1300,
                icon: 'error',
              })
        }
      },
    },
  }
</script>
