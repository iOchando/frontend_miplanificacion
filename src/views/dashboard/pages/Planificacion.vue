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
          icon="mdi-clipboard-edit-outline"
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
                    v-model="idplanta"
                    label="Planta"
                    :items="plantas"
                    item-text="nombre"
                    item-value="id"
                    hint="por favor seleccione una planta"
                    v-on:change="cargaCapacidades(idplanta)"
                  />
                </v-col>
                
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-card-text>
                    <h1 class="display-1  text-white font-weight-medium font-italic">Capacidad Instalada: {{ capacidadinstalada }}
                    </h1>
                  </v-card-text>
               
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                <v-card-text>
                    <h1 class="display-1  text-white font-weight-medium font-italic">Capacidad Operativa: {{ capacidadoperativa }}
                    </h1>
                  </v-card-text>
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
                    item-text="ANOCON"
                    item-value="ANOCON"
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
                    item-text="MESCON"
                    item-value="MESCON"
                    v-on:change="cargaCalendariosem(editedItem.mescon)"
                  />
                </v-col>
                <v-col
                  cols="6"
                  md="3"
                >
                  <v-select
                    v-model="semcon"
                    label="Semana contable"
                    :items="calendariosem"
                    type="submit"
                    item-text="SEMCON"
                    item-value="SEMCON"
                    v-on:change="cargaFecha(semcon)"
                  />
                </v-col>
<v-form>
  <v-divider />
  <v-container>
    <v-card-title>
      <h1 v-if ="fecini" class="display-1  text-white font-weight-bold font-italic">
        Planificación para la semana: del {{fecini}} al {{fecfin}}
      </h1> 
      <h1 v-else class="display-1  text-white font-weight-bold font-italic">
        Planificación para la semana:
      </h1> 
    </v-card-title>
  </v-container>
    <v-container>
      <v-row dense>
        <v-col order="1">
         <vuetify-money
              v-model.number="editedItem.lunes"
              v-bind:label="labelLunes"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsUds"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value1 = $event"
              v-on:CustomMaxEvent="value1 = $event"
              v-on:input="operaciones()"
            />
          <vuetify-money
              v-model.number="editedItem.lunespp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value11 = $event"
              v-on:CustomMaxEvent="value11 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.lunesrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsRend"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.lunesem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.lunestb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money
              v-model.number="editedItem.lunespppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
        </v-col>

        <v-col order="2"
        >
            <vuetify-money
              v-model.number="editedItem.martes"
              v-bind:label="labelMartes"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsUds"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value1 = $event"
              v-on:CustomMaxEvent="value1 = $event"
              v-on:input="operaciones()"
            />
          <vuetify-money
              v-model.number="editedItem.martespp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value11 = $event"
              v-on:CustomMaxEvent="value11 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.martesrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsRend"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.martesem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.martestb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.martespppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
        </v-col>
        <v-col order="3"
        >
            <vuetify-money
              v-model.number="editedItem.miercoles"
              v-bind:label="labelMiercoles"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsUds"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value1 = $event"
              v-on:CustomMaxEvent="value1 = $event"
              v-on:input="operaciones()"
            />
          <vuetify-money
              v-model.number="editedItem.miercolespp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value11 = $event"
              v-on:CustomMaxEvent="value11 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.miercolesrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsRend"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.miercolesem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.miercolestb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.miercolespppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
        </v-col>
        <v-col order="4"
        >
            <vuetify-money
              v-model.number="editedItem.jueves"
              v-bind:label="labelJueves"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsUds"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value1 = $event"
              v-on:CustomMaxEvent="value1 = $event"
              v-on:input="operaciones()"
            />
          <vuetify-money
              v-model.number="editedItem.juevespp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value11 = $event"
              v-on:CustomMaxEvent="value11 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.juevesrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsRend"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.juevesem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.juevestb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.juevespppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
        </v-col>
        <v-col order="5"
        >
          <vuetify-money
              v-model.number="editedItem.viernes"
              v-bind:label="labelViernes"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsUds"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value1 = $event"
              v-on:CustomMaxEvent="value1 = $event"
              v-on:input="operaciones()"
            />
          <vuetify-money
              v-model.number="editedItem.viernespp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value11 = $event"
              v-on:CustomMaxEvent="value11 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.viernesrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsRend"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.viernesem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.viernestb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.viernespppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
        </v-col>
        <v-col order="6"
        >
          <vuetify-money
              v-model.number="editedItem.sabado"
              v-bind:label="labelSabado"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsUds"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value1 = $event"
              v-on:CustomMaxEvent="value1 = $event"
              v-on:input="operaciones()"
            />
          <vuetify-money
              v-model.number="editedItem.sabadopp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value11 = $event"
              v-on:CustomMaxEvent="value11 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.sabadorend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsRend"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
              v-on:input="operaciones()"
            />
            <vuetify-money    
              v-model.number="editedItem.sabadoem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.sabadotb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.sabadopppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
        </v-col>
        <v-col order="7"
        >
            <vuetify-money
              v-model.number="editedItem.total"
              v-bind:label="labelTotal"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsUds"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value1 = $event"
              v-on:CustomMaxEvent="value1 = $event"
            />
          <vuetify-money
              v-model.number="editedItem.totalpp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value11 = $event"
              v-on:CustomMaxEvent="value11 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.totalrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsRend"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.totalem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.totaltb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
            <vuetify-money    
              v-model.number="editedItem.totalpppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsPP"
              :valueOptions="valueOptions1"
              v-on:CustomMinEvent="value12 = $event"
              v-on:CustomMaxEvent="value12 = $event"
            />
        </v-col>
      </v-row>
      </v-container>
      </v-form>
      </v-row>
      </v-container>
      </v-form>
          <v-row
          align="center"
          justify="center"
          >
                <v-btn
                  color="secondary"
                  dark
                  @click="saveItem(editedItem)"
                >
                  Guardar Planificación
                </v-btn>     
          </v-row>
          <v-row>
            <v-col
                  cols="6"
                  md="3"
                ></v-col>
          </v-row>
        </base-material-card>
        <base-material-card
          icon="mdi-clipboard-text"
          color="primary"
          title="Registro de Planificaciones"
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
                  @click="showDialog(item)"
                >
                  mdi-eye
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
            max-width="1100px"
          >
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
                  <span>Detalles de la Planificación</span>
                </v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
            <v-form
            ref="form"
            >
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="2"
                >
                  <v-text-field
                      v-model="viewItem.planta"
                      type="text"
                      label="Planta"
                      disabled              
                      />
                </v-col>
                
                <v-col
                  cols="12"
                  md="1"
                >
                  <v-text-field
                      v-model="viewItem.anocon"
                      type="text"
                      label="Año Contable"
                      disabled  
                    />
               
                </v-col>
                <v-col
                  cols="12"
                  md="1"
                >
                <v-text-field
                      v-model="viewItem.mescon"
                      type="text"
                      label="Mes Contable"
                      disabled  
                    />
                </v-col>
                <v-col
                  cols="12"
                  md="1"
                >
                  <v-text-field
                      v-model="viewItem.semcon"
                      type="text"
                      label="Semana Contable"
                      disabled 
                    />
                </v-col>            
              </v-row>
      </v-container>
      </v-form>
      <v-row dense>
        <v-col order="1">
         <vuetify-money
              v-model="viewItem.lunes"
              v-bind:label="labelLunes"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsUds"
            />
          <vuetify-money
              v-model="viewItem.lunespp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
            <vuetify-money    
              v-model="viewItem.lunesrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsRend"
            />
            <vuetify-money    
              v-model="viewItem.lunesem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.lunestb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money
              v-model="viewItem.lunespppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
        </v-col>

        <v-col order="2">
            <vuetify-money
              v-model="viewItem.martes"
              v-bind:label="labelMartes"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsUds"
            />
          <vuetify-money
              v-model="viewItem.martespp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
            <vuetify-money    
              v-model="viewItem.martesrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsRend"
            />
            <vuetify-money    
              v-model="viewItem.martesem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.martestb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.martespppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
        </v-col>
        <v-col order="3">
            <vuetify-money
              v-model="viewItem.miercoles"
              v-bind:label="labelMiercoles"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsUds"
            />
          <vuetify-money
              v-model="viewItem.miercolespp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
            <vuetify-money    
              v-model="viewItem.miercolesrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsRend"
            />
            <vuetify-money    
              v-model="viewItem.miercolesem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.miercolestb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.miercolespppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
        </v-col>
        <v-col order="4">
            <vuetify-money
              v-model="viewItem.jueves"
              v-bind:label="labelJueves"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsUds"
            />
          <vuetify-money
              v-model="viewItem.juevespp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
            <vuetify-money    
              v-model="viewItem.juevesrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsRend"
            />
            <vuetify-money    
              v-model="viewItem.juevesem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.juevestb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.juevespppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
        </v-col>
        <v-col order="5">
          <vuetify-money
              v-model="viewItem.viernes"
              v-bind:label="labelViernes"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsUds"
            />
          <vuetify-money
              v-model="viewItem.viernespp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
            <vuetify-money    
              v-model="viewItem.viernesrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsRend"
            />
            <vuetify-money    
              v-model="viewItem.viernesem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.viernestb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.viernespppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
        </v-col>
        <v-col order="6">
          <vuetify-money
              v-model="viewItem.sabado"
              v-bind:label="labelSabado"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsUds"
            />
          <vuetify-money
              v-model="viewItem.sabadopp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
            <vuetify-money    
              v-model="viewItem.sabadorend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsRend"
            />
            <vuetify-money    
              v-model="viewItem.sabadoem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.sabadotb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.sabadopppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
        </v-col>
        <v-col order="7">
            <vuetify-money
              v-model="viewItem.total"
              v-bind:label="labelTotal"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsUds"
            />
          <vuetify-money
              v-model="viewItem.totalpp"
              v-bind:label="labelPPPV"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
            />
            <vuetify-money    
              v-model="viewItem.totalrend"
              v-bind:label="labelRend"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsRend"
            />
            <vuetify-money    
              v-model="viewItem.totalem"
              v-bind:label="labelEM"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.totaltb"
              v-bind:label="labelTB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsKg"
            />
            <vuetify-money    
              v-model="viewItem.totalpppb"
              v-bind:label="labelPPPB"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:options="optionsPP"
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
    name: 'Planificacion',
    data () {
      return {
        labelLunes: "Lunes",
        labelMartes: "Martes",
        labelMiercoles: "Miercoles",
        labelJueves: "Jueves",
        labelViernes: "Viernes",
        labelSabado: "Sabado",
        labelTotal: "TOTAL",
        labelPPPV: "P.P PV",
        labelEM: "Entradas a Matadero",
        labelRend: "% Rend. Bruto",
        labelTB: "Kgs Beneficiados",
        labelPPPB: "P.P PB",
        aux: 3,

        outlined1: true,
        disabled1: true,
        dense1: true,
        valueWhenIsEmpty: "", // "0" or "" or null
        valueOptions1: {
          min: 0,
          minEvent: "CustomMinEvent",
          max: 99999999,
          maxEvent: "CustomMaxEvent"
        },
        optionsUds: {
          locale: "pt-BR",
          suffix: "und",
          length: 9,
          precision: 0
        },
        optionsPP: {
          locale: "pt-BR",
          suffix: "kg",
          length: 9,
          precision: 2
        },
        optionsKg: {
          locale: "pt-BR",
          suffix: "kg",
          length: 9,
          precision: 2
        },
        optionsRend: {
          locale: "pt-BR",
          suffix: "%",
          length: 9,
          precision: 0
        },
        dialog: false,
        plantas: [],
        planificaciones: [],
        capacidadoperativa: '',
        capacidadinstalada: '',
        calendarioano: [],
        calendariomes: [],
        calendariosem: [],
        fecini: '',
        fecfin: '',
        search: '',
        semcon:'',
        idplanta:'',
        tabla_items: [],
        editedItem: {},
        viewItem: {},
        auxItem: {},
        opItem: {},
        tabla_headers: [
          { text: 'Acciones', value: 'actions', sortable: false },
          { text: 'Planta', value: 'planta' },
          { text: 'Año', value: 'anocon' },
          { text: 'Mes', value: 'mescon' },
          { text: 'Semana', value: 'semcon' },
          { text: 'Lunes', value: 'lunes' },
          { text: 'Martes', value: 'martes' },
          { text: 'Miércoles', value: 'miercoles' },
          { text: 'Jueves', value: 'jueves' },
          { text: 'Viernes', value: 'viernes' },
          { text: 'Sabado', value: 'sabado' },
          { text: 'Total', value: 'total' },
        ],
      }
    },
    mounted () {
      this.cargaPlanificaciones()
      this.cargaPlantas()
      this.cargaCalendarioano()
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
      showDialog (item) {
        this.viewItem = item || {}
        this.dialog = !this.dialog
      },
      cargaPlanificaciones () {
        this.tabla_items = []
        axios.get(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/planificaciones/',
                  { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
          .then((response) => {
            this.tabla_items = response.data.map((item) => {
              return {
                id: item.id,
                planta: item.planta,
                anocon: item.anocon,
                mescon: item.mescon,
                semcon: item.semcon,
                lunes: item.lunes,
                lunespp: item.lunespp,
                lunesrend: item.lunesrend,
                lunesem: item.lunesem,
                lunestb: item.lunestb,
                lunespppb: item.lunespppb,
                martes: item.martes,
                martespp: item.martespp,
                martesrend: item.martesrend,
                martesem: item.martesem,
                martestb: item.martestb,
                martespppb: item.martespppb,
                miercoles: item.miercoles,
                miercolespp: item.miercolespp,
                miercolesrend: item.miercolesrend,
                miercolesem: item.miercolesem,
                miercolestb: item.miercolestb,
                miercolespppb: item.miercolespppb,
                jueves: item.jueves,
                juevespp: item.juevespp,
                juevesrend: item.juevesrend,
                juevesem: item.juevesem,
                juevestb: item.juevestb,
                juevespppb: item.juevespppb,
                viernes: item.viernes,
                viernespp: item.viernespp,
                viernesrend: item.viernesrend,
                viernesem: item.viernesem,
                viernestb: item.viernestb,
                viernespppb: item.viernespppb,
                sabado: item.sabado,
                sabadopp: item.sabadopp,
                sabadorend: item.sabadorend,
                sabadoem: item.sabadoem,
                sabadotb: item.sabadotb,
                sabadopppb: item.sabadopppb,
                total: item.total,
                totalpp: item.totalpp,
                totalrend: item.totalrend,
                totalem: item.totalem,
                totaltb: item.totaltb,
                totalpppb: item.totalpppb,
                ...item.fields,
              }
            })
          }).catch((error) => {
            console.log(error)
          })
      },
      cargaPlantas () {
        this.plantas = []
        axios.get(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/plantas/',
                  { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
          .then((response) => {
            this.plantas = response.data
          }).catch((error) => {
            console.log(error)
          })
      },
      cargaCapacidades (idplanta) {
        axios.get(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/plantas/' + idplanta,
                  { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
          .then((response) => {
            this.capacidadoperativa = response.data.capacidadoperativa
            this.capacidadinstalada = response.data.capacidadinstalada
            this.editedItem.planta = response.data.nombre
            this.buscarPlanificacion()
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
          }
        }
      },
      cargaCalendarioano () {
        this.calendarioano = []
        axios.get(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/listtrgip001/',
                  { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
          .then((response) => {
            this.calendarioano = response.data
          }).catch((error) => {
            console.log(error)
          })
      },
      cargaCalendariomes (anocon) {
        this.editedItem.mescon = this.$session.remove()
        this.editedItem.semcon = this.$session.remove()
        this.fecini = ""
        this.fecfin = ""
        this.calendariomes = []
        this.calendariosem = []
        for (var i = 0; i < this.calendarioano.length; i++){
          if (this.calendarioano[i].ANOCON == anocon){
            this.calendariomes.push(this.calendarioano[i].MESCON)
          }
        }
      },
      cargaCalendariosem (mescon) {
        this.semcon = ""
        this.fecini = ""
        this.fecfin = ""
        this.calendariosem = []
        for (var i = 0; i < this.calendarioano.length; i++){
          if (this.calendarioano[i].MESCON == mescon && this.calendarioano[i].ANOCON == this.editedItem.anocon){
            this.calendariosem.push(this.calendarioano[i].SEMCON)
          }
        }
      },
      buscarPlanificacion () {
        this.reset()
        if (this.auxItem.planta&&this.auxItem.anocon&&this.auxItem.mescon&&this.auxItem.semcon){
          axios.get(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/planificaciones/?planta='+this.editedItem.planta+'&anocon='+this.editedItem.anocon+'&mescon='+this.editedItem.mescon+'&semcon='+this.editedItem.semcon,
                  { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
          .then((response) => {
            if (response.data[0]) {
              this.editedItem = {}
              this.editedItem.planta = response.data[0].planta  
              this.editedItem.anocon = response.data[0].anocon  
              this.editedItem.mescon = response.data[0].mescon  
              this.editedItem.semcon = response.data[0].semcon  

              this.editedItem.id = response.data[0].id            
              this.editedItem.lunes = response.data[0].lunes
              this.editedItem.lunespp = response.data[0].lunespp
              this.editedItem.lunesrend = response.data[0].lunesrend
              this.editedItem.lunesem = response.data[0].lunesem
              this.editedItem.lunestb = response.data[0].lunestb
              this.editedItem.lunespppb = response.data[0].lunespppb

              this.editedItem.martes = response.data[0].martes
              this.editedItem.martespp = response.data[0].martespp
              this.editedItem.martesrend = response.data[0].martesrend
              this.editedItem.martesem = response.data[0].martesem
              this.editedItem.martestb = response.data[0].martestb
              this.editedItem.martespppb = response.data[0].martespppb
              
              this.editedItem.miercoles = response.data[0].miercoles
              this.editedItem.miercolespp = response.data[0].miercolespp
              this.editedItem.miercolesrend = response.data[0].miercolesrend
              this.editedItem.miercolesem = response.data[0].miercolesem
              this.editedItem.miercolestb = response.data[0].miercolestb
              this.editedItem.miercolespppb = response.data[0].miercolespppb

              this.editedItem.jueves = response.data[0].jueves
              this.editedItem.juevespp = response.data[0].juevespp
              this.editedItem.juevesrend = response.data[0].juevesrend
              this.editedItem.juevesem = response.data[0].juevesem
              this.editedItem.juevestb = response.data[0].juevestb
              this.editedItem.juevespppb = response.data[0].juevespppb

              this.editedItem.viernes = response.data[0].viernes
              this.editedItem.viernespp = response.data[0].viernespp
              this.editedItem.viernesrend = response.data[0].viernesrend
              this.editedItem.viernesem = response.data[0].viernesem
              this.editedItem.viernestb = response.data[0].viernestb
              this.editedItem.viernespppb = response.data[0].viernespppb

              this.editedItem.sabado = response.data[0].sabado
              this.editedItem.sabadopp = response.data[0].sabadopp
              this.editedItem.sabadorend = response.data[0].sabadorend
              this.editedItem.sabadoem = response.data[0].sabadoem
              this.editedItem.sabadotb = response.data[0].sabadotb
              this.editedItem.sabadopppb = response.data[0].sabadopppb

              this.editedItem.total = response.data[0].total
              this.editedItem.totalpp = response.data[0].totalpp
              this.editedItem.totalrend = response.data[0].totalrend
              this.editedItem.totalem = response.data[0].totalem
              this.editedItem.totaltb = response.data[0].totaltb
              this.editedItem.totalpppb = response.data[0].totalpppb
              }
            else {
              this.reset()
            }
            }).catch((error) => {
              console.log(error)
            })
            }
      },
      operaciones () { 
        this.opItem.planta = this.editedItem.planta
        this.opItem.anocon = this.editedItem.anocon
        this.opItem.mescon = this.editedItem.mescon
        this.opItem.semcon = this.editedItem.semcon

        this.opItem.id = this.editedItem.id

        this.opItem.lunes = this.editedItem.lunes || 0
        this.opItem.lunespp = this.editedItem.lunespp || 0
        this.opItem.lunesrend = this.editedItem.lunesrend || 0
        this.opItem.lunesem = this.editedItem.lunes*this.editedItem.lunespp || 0
        this.opItem.lunestb = this.editedItem.lunesem * (this.editedItem.lunesrend / 100) || 0
        this.opItem.lunespppb = this.editedItem.lunestb / this.editedItem.lunes || 0

        this.opItem.martes = this.editedItem.martes || 0
        this.opItem.martespp = this.editedItem.martespp || 0
        this.opItem.martesrend = this.editedItem.martesrend || 0
        this.opItem.martesem = this.editedItem.martes*this.editedItem.martespp || 0
        this.opItem.martestb = this.editedItem.martesem * (this.editedItem.martesrend / 100) || 0
        this.opItem.martespppb = this.editedItem.martestb / this.editedItem.martes || 0

        this.opItem.miercoles = this.editedItem.miercoles || 0
        this.opItem.miercolespp = this.editedItem.miercolespp || 0
        this.opItem.miercolesrend = this.editedItem.miercolesrend || 0
        this.opItem.miercolesem = this.editedItem.miercoles*this.editedItem.miercolespp || 0
        this.opItem.miercolestb = this.editedItem.miercolesem * (this.editedItem.miercolesrend / 100) || 0
        this.opItem.miercolespppb = this.editedItem.miercolestb / this.editedItem.miercoles || 0

        this.opItem.jueves = this.editedItem.jueves || 0
        this.opItem.juevespp = this.editedItem.juevespp || 0
        this.opItem.juevesrend = this.editedItem.juevesrend || 0
        this.opItem.juevesem = this.editedItem.jueves*this.editedItem.juevespp || 0
        this.opItem.juevestb = this.editedItem.juevesem * (this.editedItem.juevesrend / 100) || 0
        this.opItem.juevespppb = this.editedItem.juevestb / this.editedItem.jueves || 0

        this.opItem.viernes = this.editedItem.viernes || 0
        this.opItem.viernespp = this.editedItem.viernespp || 0
        this.opItem.viernesrend = this.editedItem.viernesrend || 0
        this.opItem.viernesem = this.editedItem.viernes*this.editedItem.viernespp || 0
        this.opItem.viernestb = this.editedItem.viernesem * (this.editedItem.viernesrend / 100) || 0
        this.opItem.viernespppb = this.editedItem.viernestb / this.editedItem.viernes || 0

        this.opItem.sabado = this.editedItem.sabado || 0
        this.opItem.sabadopp = this.editedItem.sabadopp || 0
        this.opItem.sabadorend = this.editedItem.sabadorend || 0
        this.opItem.sabadoem = this.editedItem.sabado*this.editedItem.sabadopp || 0
        this.opItem.sabadotb = this.editedItem.sabadoem * (this.editedItem.sabadorend / 100) || 0
        this.opItem.sabadopppb = this.editedItem.sabadotb / this.editedItem.sabado || 0

        this.opItem.total = this.opItem.lunes + this.opItem.martes + this.opItem.miercoles + this.opItem.jueves + this.opItem.viernes + this.opItem.sabado
        this.opItem.totalpp = (this.opItem.lunespp + this.opItem.martespp + this.opItem.miercolespp + this.opItem.juevespp + this.opItem.viernespp + this.opItem.sabadopp) / 6
        this.opItem.totalrend = (this.opItem.lunesrend + this.opItem.martesrend + this.opItem.miercolesrend + this.opItem.juevesrend + this.opItem.viernesrend + this.opItem.sabadorend) / 6
        this.opItem.totalem = this.opItem.lunesem + this.opItem.martesem + this.opItem.miercolesem + this.opItem.juevesem + this.opItem.viernesem + this.opItem.sabadoem
        this.opItem.totaltb = this.opItem.lunestb + this.opItem.martestb + this.opItem.miercolestb + this.opItem.juevestb + this.opItem.viernestb + this.opItem.sabadotb
        this.opItem.totalpppb = (this.opItem.lunespppb + this.opItem.martespppb + this.opItem.miercolespppb + this.opItem.juevespppb + this.opItem.viernespppb + this.opItem.sabadopppb) / 6

        this.editedItem = {}
        this.editedItem = this.opItem
      },
      saveItem (item) {
        this.validacion(item)
        console.log(this.editedItem.total)
        console.log(this.capacidadoperativa)
        let method = 'post'
        let url = this.$session.get('url') + 'planificacion/planificaciones/'
        const id = this.editedItem.id
        console.log(id, "ID")
        if (this.editedItem.total <= this.capacidadoperativa){
          if (id) {
            item.user_update = this.$session.get('iduser')
            method = 'patch'
            url = this.$session.get('url') + 'planificacion/planificaciones/' + id + '/'
            axios[method](url, item,
                          {
                            headers:
                              {
                                Authorization: 'JWT ' + this.$session.get('token'),
                                'Content-Type': 'application/json',
                              },
                          }).then((response) => {
              if (response.data) {
                this.cargaPlanificaciones()
                this.$swal({
                  text: 'SE EDITO EL REGISTRO EXITOSAMENTE',
                  showConfirmButton: false,
                  showCloseButton: false,
                  showCancelButton: false,
                  timer: 2000,
                  icon: 'success',
                })
              }
            }).catch((error) => {
              this.$swal({
                text: 'SE GENERO UN ERROR AL EDITAR',
                showConfirmButton: true,
                showCloseButton: false,
                showCancelButton: false,
                timer: 2000,
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
                this.buscarPlanificacion()
                this.$swal({
                  text: 'SE GUARDO EL REGISTRO EXITOSAMENTE',
                  showConfirmButton: true,
                  showCloseButton: false,
                  showCancelButton: false,
                  timer: 1000,
                  icon: 'success',
                })
              }
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
              text: 'TOTAL SUPERA LA CAPACIDAD OPERATIVA',
              showConfirmButton: true,
              showCloseButton: false,
              showCancelButton: false,
              timer: 2000,
              icon: 'error',
            })
        }
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
            axios.delete(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/planificaciones/' + item.id + '',
                         { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
              .then((response) => {
                console.log(response)
                this.cargaPlanificaciones()
                this.$swal({
                  text: 'Registro eliminado',
                  showConfirmButton: true,
                  showCloseButton: false,
                  showCancelButton: false,
                  timer: 1500,
                  icon: 'success',})
                this.tabla_items.splice(this.tabla_items.findIndex(e => e.planta === item.planta), 1)
              }).catch((error) => {
                this.$swal('Se genero un error', '', 'error')
                console.log(error)
              })
          }
        })
      },
      cerrarDialogo: function () {
        this.dialog = !this.dialog
      },
      reset () {
        this.auxItem.planta = this.editedItem.planta
        this.auxItem.anocon = this.editedItem.anocon
        this.auxItem.mescon = this.editedItem.mescon
        this.auxItem.semcon = this.editedItem.semcon

        this.editedItem = {}
        this.opItem = {}

        this.editedItem.planta = this.auxItem.planta
        this.editedItem.anocon = this.auxItem.anocon 
        this.editedItem.mescon = this.auxItem.mescon 
        this.editedItem.semcon = this.auxItem.semcon
      },
      validacion(editedItem) {
        if (!editedItem.lunes || editedItem.lunes == ''){
          editedItem.lunes = 0
        }
        if (!editedItem.lunesem || editedItem.lunesem == ''){
          editedItem.lunesem = 0
        }
        if (!editedItem.lunesrend || editedItem.lunesrend == ''){
          editedItem.lunesrend = 0
        }
        if (!editedItem.lunespp || editedItem.lunespp == ''){
          editedItem.lunespp = 0
        }
        if (!editedItem.lunestb || editedItem.lunestb == ''){
          editedItem.lunestb = 0
        }
        if (!editedItem.lunespppb || editedItem.lunespppb == ''){
          editedItem.lunespppb = 0
        }

        if (!editedItem.martes || editedItem.martes == ''){
          editedItem.martes = 0
        }
        if (!editedItem.martespp || editedItem.martespp == ''){
          editedItem.martespp = 0
        }
        if (!editedItem.martesrend || editedItem.martesrend == ''){
          editedItem.martesrend = 0
        }
        if (!editedItem.martesem || editedItem.martesem == ''){
          editedItem.martesem = 0
        }
        if (!editedItem.martestb || editedItem.martestb == ''){
          editedItem.martestb = 0
        }
        if (!editedItem.martespppb || editedItem.martespppb == ''){
          editedItem.martespppb = 0
        }

        if (!editedItem.miercoles || editedItem.miercoles == ''){
          editedItem.miercoles = 0
        }
        if (!editedItem.miercolespp || editedItem.miercolespp == ''){
          editedItem.miercolespp = 0
        }
        if (!editedItem.miercolesrend || editedItem.miercolesrend == ''){
          editedItem.miercolesrend = 0
        }
        if (!editedItem.miercolesem || editedItem.miercolesem == ''){
          editedItem.miercolesem = 0
        }
        if (!editedItem.miercolestb || editedItem.miercolestb == ''){
          editedItem.miercolestb = 0
        }
        if (!editedItem.miercolespppb || editedItem.miercolespppb == ''){
          editedItem.miercolespppb = 0
        }

        if (!editedItem.jueves || editedItem.jueves == ''){
          editedItem.jueves = 0
        }
        if (!editedItem.juevespp || editedItem.juevespp == ''){
          editedItem.juevespp = 0
        }
        if (!editedItem.juevesrend || editedItem.juevesrend == ''){
          editedItem.juevesrend = 0
        }
        if (!editedItem.juevesem || editedItem.juevesem == ''){
          editedItem.juevesem = 0
        }
        if (!editedItem.juevestb || editedItem.juevestb == ''){
          editedItem.juevestb = 0
        }
        if (!editedItem.juevespppb || editedItem.juevespppb == ''){
          editedItem.juevespppb = 0
        }

        if (!editedItem.viernes || editedItem.viernes == ''){
          editedItem.viernes = 0
        }
        if (!editedItem.viernespp || editedItem.viernespp == ''){
          editedItem.viernespp = 0
        }
        if (!editedItem.viernesrend || editedItem.viernesrend == ''){
          editedItem.viernesrend = 0
        }
        if (!editedItem.viernesem || editedItem.viernesem == ''){
          editedItem.viernesem = 0
        }
        if (!editedItem.viernestb || editedItem.viernestb == ''){
          editedItem.viernestb = 0
        }
        if (!editedItem.viernespppb || editedItem.viernespppb == ''){
          editedItem.viernespppb = 0
        }

        if (!editedItem.sabado || editedItem.sabado == ''){
          editedItem.sabado = 0
        }
        if (!editedItem.sabadopp || editedItem.sabadopp == ''){
          editedItem.sabadopp = 0
        }
        if (!editedItem.sabadorend || editedItem.sabadorend == ''){
          editedItem.sabadorend = 0
        }
        if (!editedItem.sabadoem || editedItem.sabadoem == ''){
          editedItem.sabadoem = 0
        }
        if (!editedItem.sabadotb || editedItem.sabadotb == ''){
          editedItem.sabadotb = 0
        }
        if (!editedItem.sabadopppb || editedItem.sabadopppb == ''){
          editedItem.sabadopppb = 0
        }

        if (!editedItem.total || editedItem.total == ''){
          editedItem.total = 0
        }
        if (!editedItem.totalpp || editedItem.totalpp == ''){
          editedItem.totalpp = 0
        }
        if (!editedItem.totalrend || editedItem.totalrend == ''){
          editedItem.totalrend = 0
        }
        if (!editedItem.totalem || editedItem.totalem == ''){
          editedItem.totalem = 0
        }
        if (!editedItem.totaltb || editedItem.totaltb == ''){
          editedItem.totaltb = 0
        }
        if (!editedItem.totalpppb || editedItem.totalpppb == ''){
          editedItem.totalpppb = 0
        }
      },
    },
  }
</script>
