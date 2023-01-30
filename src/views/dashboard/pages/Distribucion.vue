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
          icon="mdi-clipboard-check-outline"
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
                    v-model="semcon"
                    label="Semana contable"
                    :items="calendariosem"
                    type="submit"
                    item-text="semcon"
                    item-value="semcon"
                    v-on:change="cargaFecha(semcon)"
                  />
                </v-col>
        <v-form>
          <v-card-title>
                <h1 v-if ="fecini" class="display-1  text-white font-weight-bold font-italic">
                  Distribución para la semana: del {{fecini}} al {{fecfin}}
                </h1> 
                <h1 v-else class="display-1  text-white font-weight-bold font-italic">
                  Distribución para la semana:
                </h1> 
          </v-card-title>
          <v-container>
              <v-row dense>
                <v-col order="1">
                  <vuetify-money
                      v-model="editedItem.lunes"
                      v-bind:label="labelLunes"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsUds"
                    />
                  <vuetify-money    
                      v-model="editedItem.lunestb"
                      v-bind:label="labelTB"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsKg"
                    />
                </v-col>
                <v-col order="2">
                    <vuetify-money
                      v-model="editedItem.martes"
                      v-bind:label="labelMartes"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsUds"
                    />
                  <vuetify-money    
                      v-model="editedItem.martestb"
                      v-bind:label="labelTB"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsKg"
                    />
                </v-col>
                <v-col order="3">
                    <vuetify-money
                      v-model="editedItem.miercoles"
                      v-bind:label="labelMiercoles"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsUds"
                    />
                    <vuetify-money    
                      v-model="editedItem.miercolestb"
                      v-bind:label="labelTB"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsKg"
                    />
                </v-col>
                <v-col order="4">
                    <vuetify-money
                      v-model="editedItem.jueves"
                      v-bind:label="labelJueves"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsUds"
                    />
                    <vuetify-money    
                      v-model="editedItem.juevestb"
                      v-bind:label="labelTB"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsKg"
                    />
                </v-col>
                <v-col order="5">
                  <vuetify-money
                      v-model="editedItem.viernes"
                      v-bind:label="labelViernes"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsUds"
                    />
                  <vuetify-money    
                      v-model="editedItem.viernestb"
                      v-bind:label="labelTB"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsKg"
                    />
                </v-col>
                <v-col order="6">
                  <vuetify-money
                      v-model="editedItem.sabado"
                      v-bind:label="labelSabado"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsUds"
                    />
                    <vuetify-money    
                      v-model="editedItem.sabadotb"
                      v-bind:label="labelTB"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsKg"
                    />
                </v-col>
                <v-col order="7">
                    <vuetify-money
                      v-model="editedItem.total"
                      v-bind:label="labelTotal"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsUds"
                    />
                    <vuetify-money    
                      v-model="editedItem.totaltb"
                      v-bind:label="labelTB"
                      v-bind:outlined="outlined1"
                      v-bind:dense="dense1"
                      v-bind:disabled="disabled"
                      v-bind:options="optionsKg"
                    />
                </v-col>
              </v-row>
              <v-divider />
          </v-container>
      </v-form>
      </v-row>
      </v-container>
      </v-form>
      <v-card>
      <v-tabs v-model="step"
              background-color="primary"
              centered
              dark
            >
      <v-tab :value="1" disabled>
        <v-icon left>
          mdi-bird
        </v-icon>
        DISTRIBUCIÓN DE UNIDADES
      </v-tab>
      <v-tab :value="2" disabled>
        <v-icon left>
          mdi-family-tree
        </v-icon>
        DISTRIBUCIÓN DE FAMILIA
      </v-tab>
      <v-tab :value="3" disabled>
        <v-icon left>
          mdi-check-all
        </v-icon>
        DISTRIBUCIÓN COMERCIAL
      </v-tab>

      <v-tab-item>
        <v-container>
        <v-spacer v-for="(n,index) in this.avesItem.length" v-bind:key="n">
        <v-card-title v-if="agrupacion[index].status == true">
          <h1 class="display-1  text-white font-weight-bold font-italic">
          {{agrupacion[index].nombre}}:
          </h1> 
        </v-card-title>
        <v-row v-if="agrupacion[index].status == true" dense>
        <v-col order="1">
          <vuetify-money
              v-model.number="avesItem[index].undLunes"
              v-bind:label="labelLunes"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsLunes"
              v-on:input="operaciones(index)"
            />
          <vuetify-money
              v-model.number="avesItem[index].tonLunes"
              v-bind:label="labelTon"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
            />
        </v-col>
        <v-col order="2">
          <vuetify-money
              v-model.number="avesItem[index].undMartes"
              v-bind:label="labelMartes"
              v-bind:outlined="outlined1"
              v-bind:dense="dense1"
              v-bind:disabled="disabled2"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsMartes"
              v-on:input="operaciones(index)"
            />
          <vuetify-money
              v-model.number="avesItem[index].tonMartes"
              v-bind:label="labelTon"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
            />
        </v-col>
        <v-col order="3">
          <vuetify-money
              v-model.number="avesItem[index].undMiercoles"
              v-bind:label="labelMiercoles"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled3"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsMiercoles"
              v-on:input="operaciones(index)"
            />
          <vuetify-money
              v-model.number="avesItem[index].tonMiercoles"
              v-bind:label="labelTon"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
            />
        </v-col>
        <v-col order="4">
          <vuetify-money
              v-model.number="avesItem[index].undJueves"
              v-bind:label="labelJueves"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled4"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsJueves"
              v-on:input="operaciones(index)"
            />
          <vuetify-money
              v-model.number="avesItem[index].tonJueves"
              v-bind:label="labelTon"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"    
            />
        </v-col>
        <v-col order="5">
          <vuetify-money
              v-model.number="avesItem[index].undViernes"
              v-bind:label="labelViernes"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled5"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsViernes"
              v-on:input="operaciones(index)"
            />
          <vuetify-money
              v-model.number="avesItem[index].tonViernes"
              v-bind:label="labelTon"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
            />
        </v-col>
        <v-col order="6">
          <vuetify-money
              v-model.number="avesItem[index].undSabado"
              v-bind:label="labelSabado"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled6"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsSabado"
              v-on:input="operaciones(index)"
            />
          <vuetify-money
              v-model.number="avesItem[index].tonSabado"
              v-bind:label="labelTon"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"     
            />
        </v-col>
        <v-col order="7">
          <vuetify-money
              v-model.number="avesItem[index].undTotal"
              v-bind:label="labelTotal"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsUds"
            />
          <vuetify-money
              v-model.number="avesItem[index].tonTotal"
              v-bind:label="labelTon"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
            />
        </v-col>
        </v-row>
        </v-spacer>
      </v-container>
      </v-tab-item>
      <v-tab-item>  
          <v-container v-if="StatusFamily == true">
            <v-spacer v-for="(k,index2) in this.avesItem.length" v-bind:key="k">
            <v-card-title v-if="agrupacion[index2].familia == true && agrupacion[index2].status == true">
                <h1 class="display-1  text-white font-weight-bold font-italic">
                 DISTRIBUCIÓN DE FAMILIA PARA: {{agrupacion[index2].nombre}}
                </h1> 
              </v-card-title>
              <v-row v-if="agrupacion[index2].familia == true" dense>
        <v-col order="1">
          <vuetify-money
              v-model.number="avesItem[index2].tonLunes"
              v-bind:label="labelLunesFam"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
            />
        </v-col>
        <v-col order="2">
          <vuetify-money
              v-model.number="avesItem[index2].tonMartes"
              v-bind:label="labelMartesFam"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
            />
        </v-col>
        <v-col order="3">
          <vuetify-money
              v-model.number="avesItem[index2].tonMiercoles"
              v-bind:label="labelMiercolesFam"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
            />
        </v-col>
        <v-col order="4">
          <vuetify-money
              v-model.number="avesItem[index2].tonJueves"
              v-bind:label="labelJuevesFam"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"  
            />
        </v-col>
        <v-col order="5">
          <vuetify-money
              v-model.number="avesItem[index2].tonViernes"
              v-bind:label="labelViernesFam"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
            />
        </v-col>
        <v-col order="6">
          <vuetify-money
              v-model.number="avesItem[index2].tonSabado"
              v-bind:label="labelSabadoFam"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"  
            />
        </v-col>
        <v-col order="7">
          <vuetify-money
              v-model.number="avesItem[index2].tonTotal"
              v-bind:label="labelTotalFam"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
            />
        </v-col>
        </v-row>
            </v-spacer>
            <v-spacer v-for="(m,index1) in this.familiaItem.length" v-bind:key="m">
              <v-card-title v-if="familia[index1].status == true">
                <h1 class="display-1  text-white font-weight-bold font-italic">
                {{familia[index1].nombre}}: (Rend. {{familia[index1].rendimiento}}%)
                </h1> 
                </v-card-title>
                <v-row v-if="familia[index1].status == true" dense>
                <v-col order="1">
                <vuetify-money
                    v-model.number="familiaItem[index1].tonLunes"
                    v-bind:label="labelLunesFam"
                    v-bind:outlined="outlined1"
                    v-bind:disabled="disabled1"
                    v-bind:dense="dense1"
                    v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                    v-bind:options="optionsKgLunes"   
                    v-on:input="limiteValidateFamilia(index1)"       
                  />
              </v-col>
              <v-col order="2">
                <vuetify-money
                    v-model.number="familiaItem[index1].tonMartes"
                    v-bind:label="labelMartesFam"
                    v-bind:outlined="outlined1"
                    v-bind:disabled="disabled2"
                    v-bind:dense="dense1"
                    v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                    v-bind:options="optionsKgMartes"
                    v-on:input="limiteValidateFamilia(index1)" 
                  />
              </v-col>
              <v-col order="3">
                <vuetify-money
                    v-model.number="familiaItem[index1].tonMiercoles"
                    v-bind:label="labelMiercolesFam"
                    v-bind:outlined="outlined1"
                    v-bind:disabled="disabled3"
                    v-bind:dense="dense1"
                    v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                    v-bind:options="optionsKgMiercoles"
                    v-on:input="limiteValidateFamilia(index1)" 
                  />
              </v-col>
              <v-col order="4">
                <vuetify-money
                    v-model.number="familiaItem[index1].tonJueves"
                    v-bind:label="labelJuevesFam"
                    v-bind:outlined="outlined1"
                    v-bind:disabled="disabled4"
                    v-bind:dense="dense1"
                    v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                    v-bind:options="optionsKgJueves"
                    v-on:input="limiteValidateFamilia(index1)" 
                  />
              </v-col>
              <v-col order="5">
                <vuetify-money
                    v-model.number="familiaItem[index1].tonViernes"
                    v-bind:label="labelViernesFam"
                    v-bind:outlined="outlined1"
                    v-bind:disabled="disabled5"
                    v-bind:dense="dense1"
                    v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                    v-bind:options="optionsKgViernes"
                    v-on:input="limiteValidateFamilia(index1)" 
                  />
              </v-col>
              <v-col order="6">
                <vuetify-money
                    v-model.number="familiaItem[index1].tonSabado"
                    v-bind:label="labelSabadoFam"
                    v-bind:outlined="outlined1"
                    v-bind:disabled="disabled6"
                    v-bind:dense="dense1"
                    v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                    v-bind:options="optionsKgSabado"
                    v-on:input="limiteValidateFamilia(index1)" 
                  />
              </v-col>
              <v-col order="7">
                <vuetify-money
                    v-model.number="familiaItem[index1].tonTotal"
                    v-bind:label="labelTotalFam"
                    v-bind:outlined="outlined1"
                    v-bind:disabled="disabled"
                    v-bind:dense="dense1"
                    v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                    v-bind:options="optionsKg"
                  />
              </v-col>
              </v-row>
            </v-spacer>
          </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-container>
        <v-spacer v-for="(n,index) in this.agrupacion.length" v-bind:key="n">
        <v-card-title v-if="agrupacion[index].status == true && agrupacion[index].familia == false">
          <v-icon
            class="mr-2"
            color="primary"
            @click="showDialog(avesItem[index])"
          >
            mdi-eye
          </v-icon>
          <h1 class="display-1  text-white font-weight-bold font-italic">
          {{agrupacion[index].nombre}}:
          </h1> 
          
        </v-card-title>
        <v-row v-if="agrupacion[index].status == true && agrupacion[index].familia == false" dense>
        <v-col order="1">
          <vuetify-money
              v-model.number="comercialItem[index].ventLunes"
              v-bind:label="labelLunesVent"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComLunes[index]"   
              v-on:input="limiteValidateComercial(index)"    
            />
          <vuetify-money
              v-model.number="comercialItem[index].proLunes"
              v-bind:label="labelLunesPro"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled1"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComLunes[index]"  
              v-on:input="limiteValidateComercial(index)"    
            />
        </v-col>
        <v-col order="2">
          <vuetify-money
              v-model.number="comercialItem[index].ventMartes"
              v-bind:label="labelMartesVent"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled2"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComMartes[index]"   
              v-on:input="limiteValidateComercial(index)"     
            />
          <vuetify-money
              v-model.number="comercialItem[index].proMartes"
              v-bind:label="labelMartesPro"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled2"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComMartes[index]"
              v-on:input="limiteValidateComercial(index)" 
            />
        </v-col>
        <v-col order="3">
          <vuetify-money
              v-model.number="comercialItem[index].ventMiercoles"
              v-bind:label="labelMiercolesVent"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled3"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComMiercoles[index]"   
              v-on:input="limiteValidateComercial(index)"        
            />
          <vuetify-money
              v-model.number="comercialItem[index].proMiercoles"
              v-bind:label="labelMiercolesPro"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled3"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComMiercoles[index]"    
              v-on:input="limiteValidateComercial(index)"    
            />
        </v-col>
        <v-col order="4">
          <vuetify-money
              v-model.number="comercialItem[index].ventJueves"
              v-bind:label="labelJuevesVent"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled4"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComJueves[index]"    
              v-on:input="limiteValidateComercial(index)"   
            />
          <vuetify-money
              v-model.number="comercialItem[index].proJueves"
              v-bind:label="labelJuevesPro"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled4"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComJueves[index]"     
              v-on:input="limiteValidateComercial(index)" 
            />
        </v-col>
        <v-col order="5">
          <vuetify-money
              v-model.number="comercialItem[index].ventViernes"
              v-bind:label="labelViernesVent"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled5"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComViernes[index]"
              v-on:input="limiteValidateComercial(index)"         
            />
          <vuetify-money
              v-model.number="comercialItem[index].proViernes"
              v-bind:label="labelViernesPro"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled5"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComViernes[index]" 
              v-on:input="limiteValidateComercial(index)" 
            />
        </v-col>
        <v-col order="6">
          <vuetify-money
              v-model.number="comercialItem[index].ventSabado"
              v-bind:label="labelSabadoVent"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled6"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComSabado[index]" 
              v-on:input="limiteValidateComercial(index)"    
            />
          <vuetify-money
              v-model.number="comercialItem[index].proSabado"
              v-bind:label="labelSabadoPro"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled6"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsComSabado[index]"
              v-on:input="limiteValidateComercial(index)" 
            />
        </v-col>
        <v-col order="7">
          <vuetify-money
              v-model.number="comercialItem[index].ventTotal"
              v-bind:label="labelTotalVent"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"    
            />
          <vuetify-money
              v-model.number="comercialItem[index].proTotal"
              v-bind:label="labelTotalPro"
              v-bind:outlined="outlined1"
              v-bind:disabled="disabled"
              v-bind:dense="dense1"
              v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
              v-bind:options="optionsKg"
            />
        </v-col>
        </v-row>
        </v-spacer>
        <v-spacer v-if="StatusFamily == true">
            <v-spacer v-for="(m,index1) in this.familiaItem.length" v-bind:key="m">
              <v-card-title v-if="familia[index1].status == true">
                <v-icon
                  class="mr-2"
                  color="primary"
                  @click="showDialog(familiaItem[index1])"
                >
                  mdi-eye
                </v-icon>
                <h1 class="display-1  text-white font-weight-bold font-italic">
                {{familia[index1].nombre}}:
                </h1> 
                </v-card-title>
                <v-row v-if="familia[index1].status == true" dense>
                <v-col order="1">
                <vuetify-money
                  v-model.number="comFamItem[index1].ventLunes"
                  v-bind:label="labelLunesVent"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled1"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamLunes[index1]"   
                  v-on:input="limiteValidateComFam(index1)"    
                />
              <vuetify-money
                  v-model.number="comFamItem[index1].proLunes"
                  v-bind:label="labelLunesPro"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled1"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamLunes[index1]"  
                  v-on:input="limiteValidateComFam(index1)"    
                />
              </v-col>
              <v-col order="2">
                <vuetify-money
                  v-model.number="comFamItem[index1].ventMartes"
                  v-bind:label="labelMartesVent"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled2"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamMartes[index1]"   
                  v-on:input="limiteValidateComFam(index1)"    
                />
              <vuetify-money
                  v-model.number="comFamItem[index1].proMartes"
                  v-bind:label="labelMartesPro"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled2"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamMartes[index1]"  
                  v-on:input="limiteValidateComFam(index1)"    
                />
              </v-col>
              <v-col order="3">
                <vuetify-money
                  v-model.number="comFamItem[index1].ventMiercoles"
                  v-bind:label="labelMiercolesVent"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled3"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamMiercoles[index1]"   
                  v-on:input="limiteValidateComFam(index1)"    
                />
              <vuetify-money
                  v-model.number="comFamItem[index1].proMiercoles"
                  v-bind:label="labelMiercolesPro"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled3"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamMiercoles[index1]"  
                  v-on:input="limiteValidateComFam(index1)"    
                />
              </v-col>
              <v-col order="4">
                <vuetify-money
                  v-model.number="comFamItem[index1].ventJueves"
                  v-bind:label="labelJuevesVent"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled4"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamJueves[index1]"   
                  v-on:input="limiteValidateComFam(index1)"    
                />
              <vuetify-money
                  v-model.number="comFamItem[index1].proJueves"
                  v-bind:label="labelJuevesPro"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled4"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamJueves[index1]"  
                  v-on:input="limiteValidateComFam(index1)"    
                />
              </v-col>
              <v-col order="5">
                <vuetify-money
                  v-model.number="comFamItem[index1].ventViernes"
                  v-bind:label="labelViernesVent"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled5"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamViernes[index1]"   
                  v-on:input="limiteValidateComFam(index1)"    
                />
              <vuetify-money
                  v-model.number="comFamItem[index1].proViernes"
                  v-bind:label="labelViernesPro"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled5"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamViernes[index1]"  
                  v-on:input="limiteValidateComFam(index1)"    
                />
              </v-col>
              <v-col order="6">
                <vuetify-money
                  v-model.number="comFamItem[index1].ventSabado"
                  v-bind:label="labelSabadoVent"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled6"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamSabado[index1]"   
                  v-on:input="limiteValidateComFam(index1)"    
                />
              <vuetify-money
                  v-model.number="comFamItem[index1].proSabado"
                  v-bind:label="labelSabadoPro"
                  v-bind:outlined="outlined1"
                  v-bind:disabled="disabled6"
                  v-bind:dense="dense1"
                  v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                  v-bind:options="optionsComFamSabado[index1]"  
                  v-on:input="limiteValidateComFam(index1)"    
                />
              </v-col>
              <v-col order="7">
                <vuetify-money
                    v-model.number="comFamItem[index1].ventTotal"
                    v-bind:label="labelTotalVent"
                    v-bind:outlined="outlined1"
                    v-bind:disabled="disabled"
                    v-bind:dense="dense1"
                    v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                    v-bind:options="optionsKg"          
                  />
                <vuetify-money
                    v-model.number="comFamItem[index1].proTotal"
                    v-bind:label="labelTotalPro"
                    v-bind:outlined="outlined1"
                    v-bind:disabled="disabled"
                    v-bind:dense="dense1"
                    v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                    v-bind:options="optionsKg"
                  />
              </v-col>
              </v-row>
            </v-spacer>
          </v-spacer>
      </v-container>
      </v-tab-item>
    </v-tabs>
    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 0"
        depressed
        @click="step--"
      >
        Atras
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-if="step == 0 || step == 1"
        :disabled="step === 2"
        color="primary"
        depressed
        @click="step++"
      >
        Siguiente
      </v-btn>
      <v-btn
        v-if="step == 2"
        :disabled = disabledbtn
        color="primary"
        depressed
        @click="saveItem()"
      >
        Guardar Distribución
      </v-btn>
    </v-card-actions>
    </v-card>
          <v-row>
            <v-col
                  cols="6"
                  md="3"
                ></v-col>
          </v-row>
          <v-dialog
            v-model="dialog"
            max-width="1000px"
          >
            <template v-slot:activator="{ on }">
            </template>
            <v-card>
              <v-toolbar
                dark
                color="primary"
              >
                <v-toolbar-title>
                  <span>{{dialogItem.nombre}}</span>
                </v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                  <v-btn
                    icon
                    dark
                    @click="cerrarDialogo"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
              <v-row dense>
                <v-col order="1">
                  <vuetify-money
                      v-model.number="dialogItem.tonLunes"
                      v-bind:label="labelTon"
                      v-bind:outlined="outlined1"
                      v-bind:disabled="disabled"
                      v-bind:dense="dense1"
                      v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                      v-bind:options="optionsKg"
                    />
                </v-col>
                <v-col order="2">
                  <vuetify-money
                      v-model.number="dialogItem.tonMartes"
                      v-bind:label="labelTon"
                      v-bind:outlined="outlined1"
                      v-bind:disabled="disabled"
                      v-bind:dense="dense1"
                      v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                      v-bind:options="optionsKg"
                    />
                </v-col>
                <v-col order="3">
                  <vuetify-money
                      v-model.number="dialogItem.tonMiercoles"
                      v-bind:label="labelTon"
                      v-bind:outlined="outlined1"
                      v-bind:disabled="disabled"
                      v-bind:dense="dense1"
                      v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                      v-bind:options="optionsKg"
                    />
                </v-col>
                <v-col order="4">
                  <vuetify-money
                      v-model.number="dialogItem.tonJueves"
                      v-bind:label="labelTon"
                      v-bind:outlined="outlined1"
                      v-bind:disabled="disabled"
                      v-bind:dense="dense1"
                      v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                      v-bind:options="optionsKg"  
                    />
                </v-col>
                <v-col order="5">
                  <vuetify-money
                      v-model.number="dialogItem.tonViernes"
                      v-bind:label="labelTon"
                      v-bind:outlined="outlined1"
                      v-bind:disabled="disabled"
                      v-bind:dense="dense1"
                      v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                      v-bind:options="optionsKg"
                    />
                </v-col>
                <v-col order="6">
                  <vuetify-money
                      v-model.number="dialogItem.tonSabado"
                      v-bind:label="labelTon"
                      v-bind:outlined="outlined1"
                      v-bind:disabled="disabled"
                      v-bind:dense="dense1"
                      v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                      v-bind:options="optionsKg"  
                    />
                </v-col>
                <v-col order="7">
                  <vuetify-money
                      v-model.number="dialogItem.tonTotal"
                      v-bind:label="labelTon"
                      v-bind:outlined="outlined1"
                      v-bind:disabled="disabled"
                      v-bind:dense="dense1"
                      v-bind:valueWhenIsEmpty="valueWhenIsEmpty"
                      v-bind:options="optionsKg"
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
        step: 0,
        labelLunesVent: "Lunes Vent.",
        labelMartesVent: "Martes Vent.",
        labelMiercolesVent: "Miercoles Vent.",
        labelJuevesVent: "Jueves Vent.",
        labelViernesVent: "Viernes Vent.",
        labelSabadoVent: "Sabado Vent.",
        labelTotalVent: "Total Vent.",
        labelLunesPro: "Lunes Proc.",
        labelMartesPro: "Martes Proc.",
        labelMiercolesPro: "Miercoles Proc.",
        labelJuevesPro: "Jueves Proc.",
        labelViernesPro: "Viernes Proc.",
        labelSabadoPro: "Sabado Proc.",
        labelTotalPro: "Total Proc.",
        labelLunes: "Lunes",
        labelMartes: "Martes",
        labelMiercoles: "Miercoles",
        labelJueves: "Jueves",
        labelViernes: "Viernes",
        labelSabado: "Sabado",
        labelTotal: "TOTAL",
        labelTB: "Kgs Beneficiadas",
        labelTon: "Kgs",
        labelLunesFam: "Lunes Kg",
        labelMartesFam: "Martes Kg",
        labelMiercolesFam: "Miercoles Kg",
        labelJuevesFam: "Jueves Kg",
        labelViernesFam: "Viernes Kg",
        labelSabadoFam: "Sabado Kg",
        labelTotalFam: "TOTAL KG",

        outlined1: true,
        disabled: true,
        disabledbtn: true,
        disabled1: true,
        disabled2: true,
        disabled3: true,
        disabled4: true,
        disabled5: true,
        disabled6: true,
        dense1: true,
        valueWhenIsEmpty: "", // "0" or "" or null
        auxlunMin: 0,
        auxlunMax: 9,
        valueOptions1: {
          min: 0,
          minEvent: "CustomMinEvent",
          max: 5000,
          maxEvent: "CustomMaxEvent"
        },
        optionsUds: {
          locale: "pt-BR",
          suffix: "und",
          length: 9,
          precision: 0
        },
        optionsLunes: {
          locale: "pt-BR",
          suffix: "und",
          length: 9,
          precision: 0
        },
        optionsMartes: {
          locale: "pt-BR",
          suffix: "und",
          length: 9,
          precision: 0
        },
        optionsMiercoles: {
          locale: "pt-BR",
          suffix: "und",
          length: 9,
          precision: 0
        },
        optionsJueves: {
          locale: "pt-BR",
          suffix: "und",
          length: 9,
          precision: 0
        },
        optionsViernes: {
          locale: "pt-BR",
          suffix: "und",
          length: 9,
          precision: 0
        },
        optionsSabado: {
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
        optionsKgLunes: {
          locale: "pt-BR",
          suffix: "kg",
          length: 9,
          precision: 0
        },
        optionsKgMartes: {
          locale: "pt-BR",
          suffix: "kg",
          length: 9,
          precision: 0
        },
        optionsKgMiercoles: {
          locale: "pt-BR",
          suffix: "kg",
          length: 9,
          precision: 0
        },
        optionsKgJueves: {
          locale: "pt-BR",
          suffix: "kg",
          length: 9,
          precision: 0
        },
        optionsKgViernes: {
          locale: "pt-BR",
          suffix: "kg",
          length: 9,
          precision: 0
        },
        optionsKgSabado: {
          locale: "pt-BR",
          suffix: "kg",
          length: 9,
          precision: 0
        },
        optionsKg: {
          locale: "pt-BR",
          suffix: "kg",
          length: 9,
          precision: 0
        },
        optionsRend: {
          locale: "pt-BR",
          suffix: "%",
          length: 9,
          precision: 0
        },
        dialog: false,
        plantas: [],
        agrupacion: [],
        familia: [],
        planificaciones: [],
        capacidadoperativa: '',
        capacidadinstalada: '',
        calendarioano: [],
        calendariomes: [],
        calendariosem: [],
        dialogItem: {},
        dialogComItem: {},
        fecini: '',
        fecfin: '',
        semcon: "",
        index: 0,
        index1: 0,
        index2: 0,
        index3: 0,
        tamaño: 0,
        auxComercial: [],
        auxComFam: [],
        StatusFamily: false,
        is_save: true,
        IndexFamilia: 0,
        search: '',
        varLunes: 0,
        idsemcon:'',
        idplanta:'',
        tabla_items: [],
        editedItem: {},
        avesItem: [],
        familiaItem: [],
        comercialItem: [],
        comFamItem: [],
        finalComFamItem: [],
        optionsComLunes: [],
        optionsComMartes: [],
        optionsComMiercoles: [],
        optionsComJueves: [],
        optionsComViernes: [],
        optionsComSabado: [],
        optionsComFamLunes: [],
        optionsComFamMartes: [],
        optionsComFamMiercoles: [],
        optionsComFamJueves: [],
        optionsComFamViernes: [],
        optionsComFamSabado: [],
        viewItem: {},
        auxItem: {},
        opItem: {},
        resetItem: [],
        operItem: [],
        operFamItem: [],
        operComItem: [],
        operComFamItem: [],
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
      this.cargaFamilia()
      this.cargaAgrupacion()
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
        console.log(item)
        this.dialogItem = item || {}
        this.dialogItem.nombre = item.nombre
        this.dialog = !this.dialog
      },
      crearArrayAves () {
        this.avesItem = []
        this.operItem = []
        this.resetItem = []
        this.comercialItem = []
        this.auxComercial = []
        for (var i = 0; i < this.agrupacion.length; i++){
          if (this.agrupacion[i].status) {
            this.avesItem.push({})
            this.operItem.push({})
            this.resetItem.push({})
            this.comercialItem.push({})
            this.auxComercial.push({})
            if (this.agrupacion[i].familia){
              this.StatusFamily = true
              this.IndexFamilia = i
            }
          }
        }
      },
      crearArrayFamilia () {
        this.familiaItem = []
        this.comFamItem = []
        this.auxComFam = []
        for (var j = 0; j < this.familia.length; j++){
          this.familiaItem.push({})
          this.comFamItem.push({})
          this.auxComFam.push({})
        }
      },
      resetOptions () {
        this.optionsComLunes = []
        this.optionsComMartes = []
        this.optionsComMiercoles = []
        this.optionsComJueves = []
        this.optionsComViernes = []
        this.optionsComSabado = []
        for (var i = 0; i < this.agrupacion.length; i++){
          if (this.agrupacion[i].status) {
            this.optionsComLunes.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })

            this.optionsComMartes.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })

            this.optionsComMiercoles.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })
            
            this.optionsComJueves.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })
            this.optionsComViernes.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })
            this.optionsComSabado.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })
          }
        }
      },
      resetOptions2 () {
        this.optionsComFamLunes = []
        this.optionsComFamMartes = []
        this.optionsComFamMiercoles = []
        this.optionsComFamJueves = []
        this.optionsComFamViernes = []
        this.optionsComFamSabado = []
        for (var i = 0; i < this.familia.length; i++){
          if (this.familia[i].status) {
            this.optionsComFamLunes.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })
            this.optionsComFamMartes.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })
            this.optionsComFamMiercoles.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })
            this.optionsComFamJueves.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })
            this.optionsComFamViernes.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })
            this.optionsComFamSabado.push({
              locale: "pt-BR",
              suffix: "kg",
              length: 9,
              precision: 0
            })
          }
        }
      },
      ver () {
        console.log(this.comFamItem)
        console.log(this.comercialItem)
      },
      cargaPlanificaciones () {
        this.dialogItem.nombre = ""
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
      cargaAgrupacion () {
        this.agrupacion = []
        axios.get(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/agrupacion/',
                  { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
          .then((response) => {
            this.agrupacion = response.data
            this.crearArrayAves()
          }).catch((error) => {
            console.log(error)
          })
      },
      cargaFamilia () {
        this.familia = []
        axios.get(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/familia/?status=true',
                  { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
          .then((response) => {
            this.familia = response.data
            this.crearArrayFamilia()
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
            this.resetOptions()
            this.resetOptions2()
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
              response.data[0]
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
              this.activate()
              this.buscarDistAves()
              }
            else {
              this.reset()
              this.activate()
              this.buscarDistAves ()
            }
            }).catch((error) => {
              console.log(error)
            })
            }
      },
      buscarDistAves () {
        this.agrupacion = []
        if (this.editedItem.id){
          axios.get(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/distaves/?id_plan='+this.editedItem.id,
                    { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
            .then((response) => {
              if (response.data[0]) {
                this.is_save = false
                this.agrupacion = response.data
                for (var i = 0; i < response.data.length; i++){
                  this.agrupacion[i].nombre = response.data[i].agrupacion
                  this.agrupacion[i].status = true
                  this.agrupacion[i].familia = response.data[i].familia
                  this.avesItem = []
                  this.avesItem = response.data
                  this.disabledbtn = false
                }
                this.buscarDistFamilia()
                this.buscarDistComercial()
              }else {
                this.is_save = true
                this.cargaAgrupacion ()
                this.cargaFamilia()
                this.disabledbtn = false
              }
            }).catch((error) => {
              console.log(error)
            })
          }
        else {
          this.is_save = true
          this.cargaAgrupacion ()
          this.cargaFamilia()
          this.disabledbtn = false
        }
      },
      buscarDistFamilia () {
        this.familia = []
        if (this.editedItem.id){
          axios.get(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/distfamilia/?id_plan='+this.editedItem.id,
                    { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
            .then((response) => {
              if (response.data[0]) {
                this.familia = response.data
                for (var i = 0; i < response.data.length; i++){
                  this.familia[i].status = true
                  this.familia[i].nombre = response.data[i].familia
                  this.familiaItem = []
                  this.familiaItem = response.data
                  this.disabledbtn = false
                }
              }else {
                this.disabledbtn = false
              }
            }).catch((error) => {
              console.log(error)
            })
          }
        else {
          this.disabledbtn = false
        }
      },
      buscarDistComercial () {
        if (this.editedItem.id){
          axios.get(window.location.protocol + '//' + window.location.hostname + ':' + this.$session.get('puerto') + 'planificacion/distcomercial/?id_plan='+this.editedItem.id,
                    { headers: { Authorization: 'JWT ' + this.$session.get('token') } })
            .then((response) => {
              if (response.data[0]) {
                this.comercialItem = []
                this.comFamItem = []
                for (var i = 0; i < response.data.length; i++){
                  if (response.data[i].tipo == 1) {
                    this.comercialItem.push(response.data[i])
                    this.auxComercial[i].auxLunesVent = response.data[i].ventLunes
                    this.auxComercial[i].auxLunesPro = response.data[i].proLunes
                    this.auxComercial[i].auxMartesVent = response.data[i].ventMartes
                    this.auxComercial[i].auxMartesPro = response.data[i].proMartes
                    this.auxComercial[i].auxMiercolesVent = response.data[i].ventMiercoles
                    this.auxComercial[i].auxMiercolesPro = response.data[i].proMiercoles
                    this.auxComercial[i].auxJuevesVent = response.data[i].ventJueves
                    this.auxComercial[i].auxJuevesPro = response.data[i].proJueves
                    this.auxComercial[i].auxViernesVent = response.data[i].ventViernes
                    this.auxComercial[i].auxViernesPro = response.data[i].proViernes
                    this.auxComercial[i].auxSabadoVent = response.data[i].ventSabado
                    this.auxComercial[i].auxSabadoPro = response.data[i].proSabado

                  } else if (response.data[i].tipo == 2) {
                    this.comFamItem.push(response.data[i])
                  }
                  this.disabledbtn = false
                }
              }else {
                this.disabledbtn = false
              }
            }).catch((error) => {
              console.log(error)
            })
          }
        else {
          this.disabledbtn = false
        }
      },
      activate () {
        if (this.editedItem.total == 0 || this.editedItem.total == undefined) {
          this.disabled1 = true
          this.disabled2 = true
          this.disabled3 = true
          this.disabled4 = true
          this.disabled5 = true
          this.disabled6 = true
        }else {
          if (this.editedItem.lunes == 0) { 
            this.disabled1 = true
          }else {
            this.disabled1 = false
          }
          if (this.editedItem.martes == 0) { 
            this.disabled2 = true
          }else {
            this.disabled2 = false
          }
          if (this.editedItem.miercoles == 0) { 
            this.disabled3 = true
          }else {
            this.disabled3 = false
          }
          if (this.editedItem.jueves == 0) { 
            this.disabled4 = true
          }else {
            this.disabled4 = false
          }
          if (this.editedItem.viernes == 0) { 
            this.disabled5 = true
          }else {
            this.disabled5 = false
          }
          if (this.editedItem.sabado == 0) { 
            this.disabled6 = true
          }else {
            this.disabled6 = false
          }
        }
      },
      operaciones(index) { 
        this.operItem = this.avesItem
        this.avesItem = []
        for (var i = 0; i < this.agrupacion.length; i++){
          this.avesItem.push({})
          if (this.agrupacion[i].familia){
            this.StatusFamily = true
          }
        }
        this.avesItem = this.operItem

        this.limiteValidate(index)

        this.operItem[index].undLunes = this.avesItem[index].undLunes || 0
        this.operItem[index].lunesem = this.operItem[index].undLunes*this.editedItem.lunespp || 0
        this.operItem[index].tonLunes = this.operItem[index].lunesem * (this.editedItem.lunesrend / 100) || 0

        this.operItem[index].undMartes = this.avesItem[index].undMartes || 0
        this.operItem[index].martesem = this.operItem[index].undMartes*this.editedItem.martespp || 0
        this.operItem[index].tonMartes = this.operItem[index].martesem * (this.editedItem.martesrend / 100) || 0

        this.operItem[index].undMiercoles = this.avesItem[index].undMiercoles || 0
        this.operItem[index].miercolesem = this.operItem[index].undMiercoles*this.editedItem.miercolespp || 0
        this.operItem[index].tonMiercoles = this.operItem[index].miercolesem * (this.editedItem.miercolesrend / 100) || 0

        this.operItem[index].undJueves = this.avesItem[index].undJueves || 0
        this.operItem[index].juevesem = this.operItem[index].undJueves*this.editedItem.juevespp || 0
        this.operItem[index].tonJueves = this.operItem[index].juevesem * (this.editedItem.juevesrend / 100) || 0

        this.operItem[index].undViernes = this.avesItem[index].undViernes || 0
        this.operItem[index].viernesem = this.operItem[index].undViernes*this.editedItem.viernespp || 0
        this.operItem[index].tonViernes = this.operItem[index].viernesem * (this.editedItem.viernesrend / 100) || 0

        this.operItem[index].undSabado = this.avesItem[index].undSabado || 0
        this.operItem[index].sabadoem = this.operItem[index].undSabado*this.editedItem.sabadopp || 0
        this.operItem[index].tonSabado = this.operItem[index].sabadoem * (this.editedItem.sabadorend / 100) || 0

        this.operItem[index].undTotal = this.operItem[index].undLunes + this.operItem[index].undMartes + this.operItem[index].undMiercoles + this.operItem[index].undJueves + this.operItem[index].undViernes + this.operItem[index].undSabado
        this.operItem[index].tonTotal = this.operItem[index].tonLunes + this.operItem[index].tonMartes + this.operItem[index].tonMiercoles + this.operItem[index].tonJueves + this.operItem[index].tonViernes + this.operItem[index].tonSabado

        this.avesItem = []
        for (var i = 0; i < this.agrupacion.length; i++){
          this.avesItem.push({})
          if (this.agrupacion[i].familia){
            this.StatusFamily = true
          }
        }
        this.avesItem = this.operItem
        this.operItem = []

      },
      limiteValidate (index) {
        this.varLunes = 0
        this.varMartes = 0
        this.varMiercoles = 0
        this.varJueves = 0
        this.varViernes = 0
        this.varSabado = 0
        this.resLunes = 0
        this.resMartes = 0
        this.resMiercoles = 0
        this.resJueves = 0
        this.resViernes = 0
        this.resSabado = 0
        for (var i = 0; i < this.avesItem.length; i++) {
          this.varLunes += this.avesItem[i].undLunes || 0
          this.varMartes += this.avesItem[i].undMartes || 0
          this.varMiercoles += this.avesItem[i].undMiercoles || 0
          this.varJueves += this.avesItem[i].undJueves || 0
          this.varViernes += this.avesItem[i].undViernes || 0
          this.varSabado += this.avesItem[i].undSabado || 0
          if (i != index){
            this.resLunes += this.operItem[i].undLunes || 0
            this.resMartes += this.operItem[i].undMartes || 0
            this.resMiercoles += this.operItem[i].undMiercoles || 0
            this.resJueves += this.operItem[i].undJueves || 0
            this.resViernes += this.operItem[i].undViernes || 0
            this.resSabado += this.operItem[i].undSabado || 0
          }
        }
        if (this.varLunes >= this.editedItem.lunes) {
          this.operItem[index].undLunes = this.editedItem.lunes - (this.resLunes || 0) 
          this.optionsLunes.length = 0
        } else {
          this.optionsLunes.length = String(this.editedItem.lunes).length + 1
        }
        if (this.varMartes >= this.editedItem.martes) {
          this.operItem[index].undMartes = this.editedItem.martes - (this.resMartes || 0) 
          this.optionsMartes.length = 0
        } else {
          this.optionsMartes.length = String(this.editedItem.martes).length + 1
        }
        if (this.varMiercoles >= this.editedItem.miercoles) {
          this.operItem[index].undMiercoles = this.editedItem.miercoles - (this.resMiercoles || 0) 
          this.optionsMiercoles.length = 0
        } else {
          this.optionsMiercoles.length = String(this.editedItem.miercoles).length + 1
        }
        if (this.varJueves >= this.editedItem.jueves) {
          this.operItem[index].undJueves = this.editedItem.jueves - (this.resJueves || 0) 
          this.optionsJueves.length = 0
        } else {
          this.optionsJueves.length = String(this.editedItem.jueves).length + 1
        }
        if (this.varViernes >= this.editedItem.viernes) {
          this.operItem[index].undViernes = this.editedItem.viernes - (this.resViernes || 0) 
          this.optionsViernes.length = 0
        } else {
          this.optionsViernes.length = String(this.editedItem.viernes).length + 1
        }
        if (this.varSabado >= this.editedItem.sabado) {
          this.operItem[index].undSabado = this.editedItem.sabado - (this.resSabado || 0) 
          this.optionsSabado.length = 0
        } else {
          this.optionsSabado.length = String(this.editedItem.sabado).length + 1
        }
      },
      limiteValidateFamilia (index) {
        this.varLunes = 0
        this.varMartes = 0
        this.varMiercoles = 0
        this.varJueves = 0
        this.varViernes = 0
        this.varSabado = 0
        this.resLunes = 0
        this.resMartes = 0
        this.resMiercoles = 0
        this.resJueves = 0
        this.resViernes = 0
        this.resSabado = 0

        if (this.avesItem[this.IndexFamilia].tonLunes == undefined) {
          this.avesItem[this.IndexFamilia].tonLunes = 0
          this.familiaItem[index].tonLunes = 0
          this.optionsKgLunes.length = 0
        }

        if (this.avesItem[this.IndexFamilia].tonMartes == undefined) {
          this.avesItem[this.IndexFamilia].tonMartes = 0
          this.familiaItem[index].tonMartes = 0
          this.optionsKgMartes.length = 0
        }

        if (this.avesItem[this.IndexFamilia].tonMiercoles == undefined) {
          this.avesItem[this.IndexFamilia].tonMiercoles = 0
          this.familiaItem[index].tonMiercoles = 0
          this.optionsKgMiercoles.length = 0
        }

        if (this.avesItem[this.IndexFamilia].tonJueves == undefined) {
          this.avesItem[this.IndexFamilia].tonJueves = 0
          this.familiaItem[index].tonJueves = 0
          this.optionsKgJueves.length = 0
        }

        if (this.avesItem[this.IndexFamilia].tonViernes == undefined) {
          this.avesItem[this.IndexFamilia].tonViernes = 0
          this.familiaItem[index].tonViernes = 0
          this.optionsKgViernes.length = 0
        }

        if (this.avesItem[this.IndexFamilia].tonSabado == undefined) {
          this.avesItem[this.IndexFamilia].tonSabado = 0
          this.familiaItem[index].tonSabado = 0
          this.optionsKgSabado.length = 0
        }
        if (this.avesItem[this.IndexFamilia].tonTotal == undefined) {
          this.avesItem[this.IndexFamilia].tonTotal = 0
          this.familiaItem[index].tonTotal = 0
        }

        for (var i = 0; i < this.familiaItem.length; i++) {
          this.varLunes += this.familiaItem[i].tonLunes || 0
          this.varMartes += this.familiaItem[i].tonMartes || 0
          this.varMiercoles += this.familiaItem[i].tonMiercoles || 0
          this.varJueves += this.familiaItem[i].tonJueves || 0
          this.varViernes += this.familiaItem[i].tonViernes || 0
          this.varSabado += this.familiaItem[i].tonSabado || 0
          if (i != index){
            this.resLunes += this.familiaItem[i].tonLunes || 0
            this.resMartes += this.familiaItem[i].tonMartes || 0
            this.resMiercoles += this.familiaItem[i].tonMiercoles || 0
            this.resJueves += this.familiaItem[i].tonJueves || 0
            this.resViernes += this.familiaItem[i].tonViernes || 0
            this.resSabado += this.familiaItem[i].tonSabado || 0
          }
        }
        if (this.varLunes >= this.avesItem[this.IndexFamilia].tonLunes) {
          this.familiaItem[index].tonLunes = this.avesItem[this.IndexFamilia].tonLunes - (this.resLunes || 0) 
          this.optionsKgLunes.length = 0
        } else {
          this.optionsKgLunes.length = String(this.avesItem[this.IndexFamilia].tonLunes).length + 1
        }
        if (this.varMartes >= this.avesItem[this.IndexFamilia].tonMartes) {
          this.familiaItem[index].tonMartes = this.avesItem[this.IndexFamilia].tonMartes - (this.resMartes || 0) 
          this.optionsKgMartes.length = 0
        } else {
          this.optionsKgMartes.length = String(this.avesItem[this.IndexFamilia].tonMartes).length + 1
        }
        if (this.varMiercoles >= this.avesItem[this.IndexFamilia].tonMiercoles) {
          this.familiaItem[index].tonMiercoles = this.avesItem[this.IndexFamilia].tonMiercoles - (this.resMiercoles || 0) 
          this.optionsKgMiercoles.length = 0
        } else {
          this.optionsKgMiercoles.length = String(this.avesItem[this.IndexFamilia].tonMiercoles).length + 1
        }
        if (this.varJueves >= this.avesItem[this.IndexFamilia].tonJueves) {
          this.familiaItem[index].tonJueves = this.avesItem[this.IndexFamilia].tonJueves - (this.resJueves || 0) 
          this.optionsKgJueves.length = 0
        } else {
          this.optionsKgJueves.length = String(this.avesItem[this.IndexFamilia].tonJueves).length + 1
        }
        if (this.varViernes >= this.avesItem[this.IndexFamilia].tonViernes) {
          this.familiaItem[index].tonViernes = this.avesItem[this.IndexFamilia].tonViernes - (this.resViernes || 0) 
          this.optionsKgViernes.length = 0
        } else {
          this.optionsKgViernes.length = String(this.avesItem[this.IndexFamilia].tonViernes).length + 1
        }
        if (this.varSabado >= this.avesItem[this.IndexFamilia].tonSabado) {
          this.familiaItem[index].tonSabado = this.avesItem[this.IndexFamilia].tonSabado - (this.resSabado || 0) 
          this.optionsKgSabado.length = 0
        } else {
          this.optionsKgSabado.length = String(this.avesItem[this.IndexFamilia].tonSabado).length + 1
        }
        this.operacionesFamilia(index)
      },
      operacionesFamilia(index) { 
        this.operFamItem = this.familiaItem
        this.familiaItem = []
        this.familiaItem = this.operFamItem

        this.operFamItem[index].tonLunes = this.familiaItem[index].tonLunes || 0

        this.operFamItem[index].tonMartes = this.familiaItem[index].tonMartes || 0

        this.operFamItem[index].tonMiercoles = this.familiaItem[index].tonMiercoles || 0

        this.operFamItem[index].tonJueves = this.familiaItem[index].tonJueves || 0

        this.operFamItem[index].tonViernes = this.familiaItem[index].tonViernes || 0
    
        this.operFamItem[index].tonSabado = this.familiaItem[index].tonSabado || 0
     
        this.operFamItem[index].tonTotal = (this.operFamItem[index].tonLunes + this.operFamItem[index].tonMartes + this.operFamItem[index].tonMiercoles + this.operFamItem[index].tonJueves + this.operFamItem[index].tonViernes + this.operFamItem[index].tonSabado) || 0
    
        this.familiaItem = []

        this.familiaItem = this.operFamItem
        this.operFamItem = []
      },
      limiteValidateComercial (index) {
        this.varLunes = 0
        this.varMartes = 0
        this.varMiercoles = 0
        this.varJueves = 0
        this.varViernes = 0
        this.varSabado = 0
        this.resLunes = 0
        this.resMartes = 0
        this.resMiercoles = 0
        this.resJueves = 0
        this.resViernes = 0
        this.resSabado = 0

        if (this.avesItem[index].tonLunes == undefined) {
          this.avesItem[index].tonLunes = 0
          this.optionsComLunes[index].length = 0
        }
        if (this.avesItem[index].tonMartes == undefined) {
          this.avesItem[index].tonMartes = 0
          this.optionsComMartes[index].length = 0
        }
        if (this.avesItem[index].tonMiercoles == undefined) {
          this.avesItem[index].tonMiercoles = 0
          this.optionsComMiercoles[index].length = 0
        }
        if (this.avesItem[index].tonJueves == undefined) {
          this.avesItem[index].tonJueves = 0
          this.optionsComJueves[index].length = 0
        }
        if (this.avesItem[index].tonViernes == undefined) {
          this.avesItem[index].tonViernes = 0
          this.optionsComViernes[index].length = 0
        }
        if (this.avesItem[index].tonSabado == undefined) {
          this.avesItem[index].tonSabado = 0
          this.optionsComSabado[index].length = 0
        }

        this.varLunes = (this.comercialItem[index].ventLunes || 0) + (this.comercialItem[index].proLunes || 0)
        this.varMartes = (this.comercialItem[index].ventMartes || 0) + (this.comercialItem[index].proMartes || 0)
        this.varMiercoles = (this.comercialItem[index].ventMiercoles || 0) + (this.comercialItem[index].proMiercoles || 0)
        this.varJueves = (this.comercialItem[index].ventJueves || 0) + (this.comercialItem[index].proJueves || 0)
        this.varViernes = (this.comercialItem[index].ventViernes || 0) + (this.comercialItem[index].proViernes || 0)
        this.varSabado = (this.comercialItem[index].ventSabado || 0) + (this.comercialItem[index].proSabado || 0)

        if (this.varLunes >= this.avesItem[index].tonLunes) {
          if (this.auxComercial[index].auxLunesVent != this.comercialItem[index].ventLunes) {
            this.comercialItem[index].ventLunes = this.avesItem[index].tonLunes - (this.auxComercial[index].auxLunesPro || 0)
            this.optionsComLunes[index].length = 0
          }
          else if (this.auxComercial[index].auxLunesPro != this.comercialItem[index].proLunes) {
            this.comercialItem[index].proLunes = this.avesItem[index].tonLunes - (this.auxComercial[index].auxLunesVent || 0)
            this.optionsComLunes[index].length = 0
          }
        } else {
          this.optionsComLunes[index].length = String(this.avesItem[index].tonLunes).length + 1
        }

        if (this.varMartes >= this.avesItem[index].tonMartes) {
          if (this.auxComercial[index].auxMartesVent != this.comercialItem[index].ventMartes) {
            this.comercialItem[index].ventMartes = this.avesItem[index].tonMartes - (this.auxComercial[index].auxMartesPro || 0)
            this.optionsComMartes[index].length = 0
          }
          else if (this.auxComercial[index].auxMartesPro != this.comercialItem[index].proMartes) {
            this.comercialItem[index].proMartes = this.avesItem[index].tonMartes - (this.auxComercial[index].auxMartesVent || 0)
            this.optionsComMartes[index].length = 0
          }
        } else {
          this.optionsComMartes[index].length = String(this.avesItem[index].tonMartes).length + 1
        }

        if (this.varMiercoles >= this.avesItem[index].tonMiercoles) {
          if (this.auxComercial[index].auxMiercolesVent != this.comercialItem[index].ventMiercoles) {
            this.comercialItem[index].ventMiercoles = this.avesItem[index].tonMiercoles - (this.auxComercial[index].auxMiercolesPro || 0)
            this.optionsComMiercoles[index].length = 0
          }
          else if (this.auxComercial[index].auxMiercolesPro != this.comercialItem[index].proMiercoles) {
            this.comercialItem[index].proMiercoles = this.avesItem[index].tonMiercoles - (this.auxComercial[index].auxMiercolesVent || 0)
            this.optionsComMiercoles[index].length = 0
          }
        } else {
          this.optionsComMiercoles[index].length = String(this.avesItem[index].tonMiercoles).length + 1
        }

        if (this.varJueves >= this.avesItem[index].tonJueves) {
          if (this.auxComercial[index].auxJuevesVent != this.comercialItem[index].ventJueves) {
            this.comercialItem[index].ventJueves = this.avesItem[index].tonJueves - (this.auxComercial[index].auxJuevesPro || 0)
            this.optionsComJueves[index].length = 0
          }
          else if (this.auxComercial[index].auxJuevesPro != this.comercialItem[index].proJueves) {
            this.comercialItem[index].proJueves = this.avesItem[index].tonJueves - (this.auxComercial[index].auxJuevesVent || 0)
            this.optionsComJueves[index].length = 0
          }
        } else {
          this.optionsComJueves[index].length = String(this.avesItem[index].tonJueves).length + 1
        }

        if (this.varViernes >= this.avesItem[index].tonViernes) {
          if (this.auxComercial[index].auxViernesVent != this.comercialItem[index].ventViernes) {
            this.comercialItem[index].ventViernes = this.avesItem[index].tonViernes - (this.auxComercial[index].auxViernesPro || 0)
            this.optionsComViernes[index].length = 0
          }
          else if (this.auxComercial[index].auxViernesPro != this.comercialItem[index].proViernes) {
            this.comercialItem[index].proViernes = this.avesItem[index].tonViernes - (this.auxComercial[index].auxViernesVent || 0)
            this.optionsComViernes[index].length = 0
          }
        } else {
          this.optionsComViernes[index].length = String(this.avesItem[index].tonViernes).length + 1
        }

        if (this.varSabado >= this.avesItem[index].tonSabado) {
          if (this.auxComercial[index].auxSabadoVent != this.comercialItem[index].ventSabado) {
            this.comercialItem[index].ventSabado = this.avesItem[index].tonSabado - (this.auxComercial[index].auxSabadoPro || 0)
            this.optionsComSabado[index].length = 0
          }
          else if (this.auxComercial[index].auxSabadoPro != this.comercialItem[index].proSabado) {
            this.comercialItem[index].proSabado = this.avesItem[index].tonSabado - (this.auxComercial[index].auxSabadoVent || 0)
            this.optionsComSabado[index].length = 0
          }
        } else {
          this.optionsComSabado[index].length = String(this.avesItem[index].tonSabado).length + 1
        }

        this.operacionesComercial(index)

        this.auxComercial[index].auxLunesVent = this.comercialItem[index].ventLunes
        this.auxComercial[index].auxLunesPro = this.comercialItem[index].proLunes

        this.auxComercial[index].auxMartesVent = this.comercialItem[index].ventMartes
        this.auxComercial[index].auxMartesPro = this.comercialItem[index].proMartes

        this.auxComercial[index].auxMiercolesVent = this.comercialItem[index].ventMiercoles
        this.auxComercial[index].auxMiercolesPro = this.comercialItem[index].proMiercoles

        this.auxComercial[index].auxJuevesVent = this.comercialItem[index].ventJueves
        this.auxComercial[index].auxJuevesPro = this.comercialItem[index].proJueves

        this.auxComercial[index].auxViernesVent = this.comercialItem[index].ventViernes
        this.auxComercial[index].auxViernesPro = this.comercialItem[index].proViernes

        this.auxComercial[index].auxSabadoVent = this.comercialItem[index].ventSabado
        this.auxComercial[index].auxSabadoPro = this.comercialItem[index].proSabado
        
      },
      operacionesComercial(index) { 
        this.operComItem = this.comercialItem
        this.comercialItem = []
        this.comercialItem = this.operComItem

        this.operComItem[index].ventLunes = this.comercialItem[index].ventLunes || 0
        this.operComItem[index].proLunes = this.comercialItem[index].proLunes || 0

        this.operComItem[index].ventMartes = this.comercialItem[index].ventMartes || 0
        this.operComItem[index].proMartes = this.comercialItem[index].proMartes || 0

        this.operComItem[index].ventMiercoles = this.comercialItem[index].ventMiercoles || 0
        this.operComItem[index].proMiercoles = this.comercialItem[index].proMiercoles || 0

        this.operComItem[index].ventJueves = this.comercialItem[index].ventJueves || 0
        this.operComItem[index].proJueves = this.comercialItem[index].proJueves || 0

        this.operComItem[index].ventViernes = this.comercialItem[index].ventViernes || 0
        this.operComItem[index].proViernes = this.comercialItem[index].proViernes || 0

        this.operComItem[index].ventSabado = this.comercialItem[index].ventSabado || 0
        this.operComItem[index].proSabado = this.comercialItem[index].proSabado || 0
     
        this.operComItem[index].ventTotal = this.operComItem[index].ventLunes + this.operComItem[index].ventMartes + this.operComItem[index].ventMiercoles + this.operComItem[index].ventJueves + this.operComItem[index].ventViernes + this.operComItem[index].ventSabado
        this.operComItem[index].proTotal = this.operComItem[index].proLunes + this.operComItem[index].proMartes + this.operComItem[index].proMiercoles + this.operComItem[index].proJueves + this.operComItem[index].proViernes + this.operComItem[index].proSabado

        this.comercialItem = []

        this.comercialItem = this.operComItem
        this.operComItem = []
      },
      limiteValidateComFam (index) {
        this.varLunes = 0
        this.varMartes = 0
        this.varMiercoles = 0
        this.varJueves = 0
        this.varViernes = 0
        this.varSabado = 0
        this.resLunes = 0
        this.resMartes = 0
        this.resMiercoles = 0
        this.resJueves = 0
        this.resViernes = 0
        this.resSabado = 0

        if (this.familiaItem[index].tonLunes == undefined) {
          this.familiaItem[index].tonLunes = 0
          this.optionsComFamLunes[index].length = 0
        }
        if (this.familiaItem[index].tonMartes == undefined) {
          this.familiaItem[index].tonMartes = 0
          this.optionsComFamMartes[index].length = 0
        }
        if (this.familiaItem[index].tonMiercoles == undefined) {
          this.familiaItem[index].tonMiercoles = 0
          this.optionsComFamMiercoles[index].length = 0
        }
        if (this.familiaItem[index].tonJueves == undefined) {
          this.familiaItem[index].tonJueves = 0
          this.optionsComFamJueves[index].length = 0
        }
        if (this.familiaItem[index].tonViernes == undefined) {
          this.familiaItem[index].tonViernes = 0
          this.optionsComFamViernes[index].length = 0
        }
        if (this.familiaItem[index].tonSabado == undefined) {
          this.familiaItem[index].tonSabado = 0
          this.optionsComFamSabado[index].length = 0
        }

        this.varLunes = (this.comFamItem[index].ventLunes || 0) + (this.comFamItem[index].proLunes || 0)
        this.varMartes = (this.comFamItem[index].ventMartes || 0) + (this.comFamItem[index].proMartes || 0)
        this.varMiercoles = (this.comFamItem[index].ventMiercoles || 0) + (this.comFamItem[index].proMiercoles || 0)
        this.varJueves = (this.comFamItem[index].ventJueves || 0) + (this.comFamItem[index].proJueves || 0)
        this.varViernes = (this.comFamItem[index].ventViernes || 0) + (this.comFamItem[index].proViernes || 0)
        this.varSabado = (this.comFamItem[index].ventSabado || 0) + (this.comFamItem[index].proSabado || 0)

        if (this.varLunes >= this.familiaItem[index].tonLunes) {
          if (this.auxComFam[index].auxLunesFamVent != this.comFamItem[index].ventLunes) {
            this.comFamItem[index].ventLunes = this.familiaItem[index].tonLunes - (this.auxComFam[index].auxLunesFamPro || 0)
            this.optionsComFamLunes[index].length = 0
          }
          else if (this.auxComFam[index].auxLunesFamPro != this.comFamItem[index].proLunes) {
            this.comFamItem[index].proLunes = this.familiaItem[index].tonLunes - (this.auxComFam[index].auxLunesFamVent || 0)
            this.optionsComFamLunes[index].length = 0
          }
        } else {
          this.optionsComFamLunes[index].length = String(this.familiaItem[index].tonLunes).length + 1
        }

        if (this.varMartes >= this.familiaItem[index].tonMartes) {
          if (this.auxComFam[index].auxMartesFamVent != this.comFamItem[index].ventMartes) {
            this.comFamItem[index].ventMartes = this.familiaItem[index].tonMartes - (this.auxComFam[index].auxMartesFamPro || 0)
            this.optionsComFamMartes[index].length = 0
          }
          else if (this.auxComFam[index].auxMartesFamPro != this.comFamItem[index].proMartes) {
            this.comFamItem[index].proMartes = this.familiaItem[index].tonMartes - (this.auxComFam[index].auxMartesFamVent || 0)
            this.optionsComFamMartes[index].length = 0
          }
        } else {
          this.optionsComFamMartes[index].length = String(this.familiaItem[index].tonMartes).length + 1
        }

        if (this.varMiercoles >= this.familiaItem[index].tonMiercoles) {
          if (this.auxComFam[index].auxMiercolesFamVent != this.comFamItem[index].ventMiercoles) {
            this.comFamItem[index].ventMiercoles = this.familiaItem[index].tonMiercoles - (this.auxComFam[index].auxMiercolesFamPro || 0)
            this.optionsComFamMiercoles[index].length = 0
          }
          else if (this.auxComFam[index].auxMiercolesFamPro != this.comFamItem[index].proMiercoles) {
            this.comFamItem[index].proMiercoles = this.familiaItem[index].tonMiercoles - (this.auxComFam[index].auxMiercolesFamVent || 0)
            this.optionsComFamMiercoles[index].length = 0
          }
        } else {
          this.optionsComFamMiercoles[index].length = String(this.familiaItem[index].tonMiercoles).length + 1
        }

        if (this.varJueves >= this.familiaItem[index].tonJueves) {
          if (this.auxComFam[index].auxJuevesFamVent != this.comFamItem[index].ventJueves) {
            this.comFamItem[index].ventJueves = this.familiaItem[index].tonJueves - (this.auxComFam[index].auxJuevesFamPro || 0)
            this.optionsComFamJueves[index].length = 0
          }
          else if (this.auxComFam[index].auxJuevesFamPro != this.comFamItem[index].proJueves) {
            this.comFamItem[index].proJueves = this.familiaItem[index].tonJueves - (this.auxComFam[index].auxJuevesFamVent || 0)
            this.optionsComFamJueves[index].length = 0
          }
        } else {
          this.optionsComFamJueves[index].length = String(this.familiaItem[index].tonJueves).length + 1
        }

        if (this.varViernes >= this.familiaItem[index].tonViernes) {
          if (this.auxComFam[index].auxViernesFamVent != this.comFamItem[index].ventViernes) {
            this.comFamItem[index].ventViernes = this.familiaItem[index].tonViernes - (this.auxComFam[index].auxViernesFamPro || 0)
            this.optionsComFamViernes[index].length = 0
          }
          else if (this.auxComFam[index].auxViernesFamPro != this.comFamItem[index].proViernes) {
            this.comFamItem[index].proViernes = this.familiaItem[index].tonViernes - (this.auxComFam[index].auxViernesFamVent || 0)
            this.optionsComFamViernes[index].length = 0
          }
        } else {
          this.optionsComFamViernes[index].length = String(this.familiaItem[index].tonViernes).length + 1
        }

        if (this.varSabado >= this.familiaItem[index].tonSabado) {
          if (this.auxComFam[index].auxSabadoFamVent != this.comFamItem[index].ventSabado) {
            this.comFamItem[index].ventSabado = this.familiaItem[index].tonSabado - (this.auxComFam[index].auxSabadoFamPro || 0)
            this.optionsComFamSabado[index].length = 0
          }
          else if (this.auxComFam[index].auxSabadoFamPro != this.comFamItem[index].proSabado) {
            this.comFamItem[index].proSabado = this.familiaItem[index].tonSabado - (this.auxComFam[index].auxSabadoFamVent || 0)
            this.optionsComFamSabado[index].length = 0
          }
        } else {
          this.optionsComFamSabado[index].length = String(this.familiaItem[index].tonSabado).length + 1
        }

        this.operacionesComFam(index)

        this.auxComFam[index].auxLunesFamVent = this.comFamItem[index].ventLunes
        this.auxComFam[index].auxLunesFamPro = this.comFamItem[index].proLunes

        this.auxComFam[index].auxMartesFamVent = this.comFamItem[index].ventMartes
        this.auxComFam[index].auxMartesFamPro = this.comFamItem[index].proMartes

        this.auxComFam[index].auxMiercolesFamVent = this.comFamItem[index].ventMiercoles
        this.auxComFam[index].auxMiercolesFamPro = this.comFamItem[index].proMiercoles

        this.auxComFam[index].auxJuevesFamVent = this.comFamItem[index].ventJueves
        this.auxComFam[index].auxJuevesFamPro = this.comFamItem[index].proJueves

        this.auxComFam[index].auxViernesFamVent = this.comFamItem[index].ventViernes
        this.auxComFam[index].auxViernesFamPro = this.comFamItem[index].proViernes

        this.auxComFam[index].auxSabadoFamVent = this.comFamItem[index].ventSabado
        this.auxComFam[index].auxSabadoFamPro = this.comFamItem[index].proSabado
        
      },
      operacionesComFam(index) { 
        this.operComFamItem = this.comFamItem
        this.comFamItem = []
        this.comFamItem = this.operComFamItem

        this.operComFamItem[index].ventLunes = this.comFamItem[index].ventLunes || 0
        this.operComFamItem[index].proLunes = this.comFamItem[index].proLunes || 0

        this.operComFamItem[index].ventMartes = this.comFamItem[index].ventMartes || 0
        this.operComFamItem[index].proMartes = this.comFamItem[index].proMartes || 0

        this.operComFamItem[index].ventMiercoles = this.comFamItem[index].ventMiercoles || 0
        this.operComFamItem[index].proMiercoles = this.comFamItem[index].proMiercoles || 0

        this.operComFamItem[index].ventJueves = this.comFamItem[index].ventJueves || 0
        this.operComFamItem[index].proJueves = this.comFamItem[index].proJueves || 0

        this.operComFamItem[index].ventViernes = this.comFamItem[index].ventViernes || 0
        this.operComFamItem[index].proViernes = this.comFamItem[index].proViernes || 0

        this.operComFamItem[index].ventSabado = this.comFamItem[index].ventSabado || 0
        this.operComFamItem[index].proSabado = this.comFamItem[index].proSabado || 0
     
        this.operComFamItem[index].ventTotal = this.operComFamItem[index].ventLunes + this.operComFamItem[index].ventMartes + this.operComFamItem[index].ventMiercoles + this.operComFamItem[index].ventJueves + this.operComFamItem[index].ventViernes + this.operComFamItem[index].ventSabado
        this.operComFamItem[index].proTotal = this.operComFamItem[index].proLunes + this.operComFamItem[index].proMartes + this.operComFamItem[index].proMiercoles + this.operComFamItem[index].proJueves + this.operComFamItem[index].proViernes + this.operComFamItem[index].proSabado

        this.comFamItem = []

        this.comFamItem = this.operComFamItem
        this.operComFamItem = []
      },
      saveItem() {
        if (this.is_save == true) {
          this.saveDistribucion()
        } else {
          this.updateDistribucion()
        }
      },
      async saveDistribucion () {
        this.finalComFamItem = []
        let method = 'post'
        let urlDistAves = this.$session.get('url') + 'planificacion/guardardistaves/'
        let urlDistFamilia = this.$session.get('url') + 'planificacion/guardardistfamilia/'
        let urlDistComercial = this.$session.get('url') + 'planificacion/guardardistcomercial/'
        const id = this.editedItem.id
        for (var i = 0; i < this.agrupacion.length; i++){
          if (this.agrupacion[i].status == true) {
            this.validacionAves(this.avesItem[i])
            this.avesItem[i].id_plan = id
            this.avesItem[i].agrupacion = this.agrupacion[i].nombre
            this.avesItem[i].status = this.agrupacion[i].status
            this.avesItem[i].familia = this.agrupacion[i].familia
          }
        }

        for (var i = 0; i < this.familia.length; i++){
          if (this.familia[i].status == true) {
            this.validacionFamilia(this.familiaItem[i])
            this.familiaItem[i].id_plan = id
            this.familiaItem[i].familia = this.familia[i].nombre
            this.familiaItem[i].rendimiento = this.familia[i].rendimiento
          }
        }
        for (var i = 0; i < this.agrupacion.length; i++){
          if (this.agrupacion[i].status == true && this.agrupacion[i].familia == false) {
            this.comercialItem[i].id_plan = id
            this.comercialItem[i].tipo = 1
            this.comercialItem[i].nombre = this.agrupacion[i].nombre
            this.validacionComercial(this.comercialItem[i])
            this.finalComFamItem.push(this.comercialItem[i])
          }
        }
        for (var i = 0; i < this.familia.length; i++){
          if (this.familia[i].status == true) {
            this.comFamItem[i].id_plan = id
            this.comFamItem[i].tipo = 2
            this.comFamItem[i].nombre = this.familia[i].nombre
            this.validacionComercial(this.comFamItem[i])
            this.finalComFamItem.push(this.comFamItem[i])
          }
        }
              
        const resultAves = await axios[method](urlDistAves, this.avesItem,
                          {
                            headers:
                              {
                                Authorization: 'JWT ' + this.$session.get('token'),
                                'Content-Type': 'application/json',
                              },
                          })
                          .then((response) => {
                            return true
                          }).catch((error) => {
                            console.log(error)
                            return error
                          })
                          
        const resultFamilia = await axios[method](urlDistFamilia, this.familiaItem,
                          {
                            headers:
                              {
                                Authorization: 'JWT ' + this.$session.get('token'),
                                'Content-Type': 'application/json',
                              },
                          })
                          .then((response) => {
                            return true
                          }).catch((error) => {
                            console.log(error)
                            return error
                          })
        const resultComercial = await axios[method](urlDistComercial, this.finalComFamItem,
                          {
                            headers:
                              {
                                Authorization: 'JWT ' + this.$session.get('token'),
                                'Content-Type': 'application/json',
                              },
                          })
                          .then((response) => {
                            return true
                          }).catch((error) => {
                            console.log(error)
                            return error
                          })       
        if (resultAves == true && resultFamilia == true && resultComercial == true) {
          this.$swal({
            text: 'SE GUARDO LA DISTRIBUCIÓN EXITOSAMENTE',
            showConfirmButton: true,
            showCloseButton: false,
            showCancelButton: false,
            timer: 1000,
            icon: 'success',
          })
        } else {
          this.$swal({
            text: 'SE GENERO UN ERROR AL GUARDAR',
            showConfirmButton: true,
            showCloseButton: false,
            showCancelButton: false,
            timer: 1000,
            icon: 'error',
          })
        }
      },
      async updateDistribucion () {
        this.finalComFamItem = []
        let method = 'post'
        let urlDistAves = this.$session.get('url') + 'planificacion/editardistaves/'
        let urlDistFamilia = this.$session.get('url') + 'planificacion/editardistfamilia/'
        let urlDistComercial = this.$session.get('url') + 'planificacion/editardistcomercial/'
        const id = this.editedItem.id

        for (var i = 0; i < this.agrupacion.length; i++){
          if (this.agrupacion[i].status == true && this.agrupacion[i].familia == false) {
            this.validacionComercial(this.comercialItem[i])
            this.finalComFamItem.push(this.comercialItem[i])
          }
        }
        for (var i = 0; i < this.familia.length; i++){
          if (this.familia[i].status == true) {
            this.validacionComercial(this.comFamItem[i])
            this.finalComFamItem.push(this.comFamItem[i])
          }
        }

        console.log(this.avesItem)
        console.log(this.familiaItem)
        console.log(this.finalComFamItem)
              
        const resultAves = await axios[method](urlDistAves, this.avesItem,
                          {
                            headers:
                              {
                                Authorization: 'JWT ' + this.$session.get('token'),
                                'Content-Type': 'application/json',
                              },
                          })
                          .then((response) => {
                            return true
                          }).catch((error) => {
                            console.log(error)
                            return error
                          })
                          
        const resultFamilia = await axios[method](urlDistFamilia, this.familiaItem,
                          {
                            headers:
                              {
                                Authorization: 'JWT ' + this.$session.get('token'),
                                'Content-Type': 'application/json',
                              },
                          })
                          .then((response) => {
                            return true
                          }).catch((error) => {
                            console.log(error)
                            return error
                          })
        const resultComercial = await axios[method](urlDistComercial, this.finalComFamItem,
                          {
                            headers:
                              {
                                Authorization: 'JWT ' + this.$session.get('token'),
                                'Content-Type': 'application/json',
                              },
                          })
                          .then((response) => {
                            return true
                          }).catch((error) => {
                            console.log(error)
                            return error
                          })       
        if (resultAves == true && resultFamilia == true && resultComercial == true) {
          this.$swal({
            text: 'SE ACTUALIZO LA DISTRIBUCIÓN EXITOSAMENTE',
            showConfirmButton: true,
            showCloseButton: false,
            showCancelButton: false,
            timer: 1000,
            icon: 'success',
          })
        } else {
          this.$swal({
            text: 'SE GENERO UN ERROR AL ACTUALIZAR',
            showConfirmButton: true,
            showCloseButton: false,
            showCancelButton: false,
            timer: 1000,
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
        this.avesItem = []
        for (var i = 0; i < this.agrupacion.length; i++){
          this.avesItem.push({})
          if (this.agrupacion[i].familia){
            this.StatusFamily = true
          }
        }

        this.editedItem.planta = this.auxItem.planta
        this.editedItem.anocon = this.auxItem.anocon 
        this.editedItem.mescon = this.auxItem.mescon 
        this.editedItem.semcon = this.auxItem.semcon

        this.optionsLunes.length = String(this.editedItem.lunes).length
        this.optionsMartes.length = String(this.editedItem.martes).length
        this.optionsMiercoles.length = String(this.editedItem.miercoles).length
        this.optionsJueves.length = String(this.editedItem.jueves).length
        this.optionsViernes.length = String(this.editedItem.viernes).length
        this.optionsSabado.length = String(this.editedItem.sabado).length
      },
      validacionAves(avesItem) {
        if (!avesItem.undLunes || avesItem.undLunes == ''){
          avesItem.undLunes = 0
        }
        if (!avesItem.tonLunes || avesItem.tonLunes == ''){
          avesItem.tonLunes = 0
        }
        if (!avesItem.undMartes || avesItem.undMartes == ''){
          avesItem.undMartes = 0
        }
        if (!avesItem.tonMartes || avesItem.tonMartes == ''){
          avesItem.tonMartes = 0
        }
        if (!avesItem.undMiercoles || avesItem.undMiercoles == ''){
          avesItem.undMiercoles = 0
        }
        if (!avesItem.tonMiercoles || avesItem.tonMiercoles == ''){
          avesItem.tonMiercoles = 0
        }
        if (!avesItem.undJueves || avesItem.undJueves == ''){
          avesItem.undJueves = 0
        }
        if (!avesItem.tonJueves || avesItem.tonJueves == ''){
          avesItem.tonJueves = 0
        }
        if (!avesItem.undViernes || avesItem.undViernes == ''){
          avesItem.undViernes = 0
        }
        if (!avesItem.tonViernes || avesItem.tonViernes == ''){
          avesItem.tonViernes = 0
        }
        if (!avesItem.undSabado || avesItem.undSabado == ''){
          avesItem.undSabado = 0
        }
        if (!avesItem.tonSabado || avesItem.tonSabado == ''){
          avesItem.tonSabado = 0
        }
        if (!avesItem.undTotal || avesItem.undTotal == ''){
          avesItem.undTotal = 0
        }
        if (!avesItem.tonTotal || avesItem.tonTotal == ''){
          avesItem.tonTotal = 0
        }
      },
      validacionFamilia(familiaItem) {
        if (!familiaItem.tonLunes || familiaItem.tonLunes == ''){
          familiaItem.tonLunes = 0
        }
        if (!familiaItem.tonMartes || familiaItem.tonMartes == ''){
          familiaItem.tonMartes = 0
        }
        if (!familiaItem.tonMiercoles || familiaItem.tonMiercoles == ''){
          familiaItem.tonMiercoles = 0
        }
        if (!familiaItem.tonJueves || familiaItem.tonJueves == ''){
          familiaItem.tonJueves = 0
        }
        if (!familiaItem.tonViernes || familiaItem.tonViernes == ''){
          familiaItem.tonViernes = 0
        }
        if (!familiaItem.tonSabado || familiaItem.tonSabado == ''){
          familiaItem.tonSabado = 0
        }
        if (!familiaItem.tonTotal || familiaItem.tonTotal == ''){
          familiaItem.tonTotal = 0
        }
      },
      validacionComercial(item) {
        if (!item.ventLunes || item.ventLunes == ''){
          item.ventLunes = 0
        }
        if (!item.proLunes || item.proLunes == ''){
          item.proLunes = 0
        }
        if (!item.ventMartes || item.ventMartes == ''){
          item.ventMartes = 0
        }
        if (!item.proMartes || item.proMartes == ''){
          item.proMartes = 0
        }
        if (!item.ventMiercoles || item.ventMiercoles == ''){
          item.ventMiercoles = 0
        }
        if (!item.proMiercoles || item.proMiercoles == ''){
          item.proMiercoles = 0
        }
        if (!item.ventJueves || item.ventJueves == ''){
          item.ventJueves = 0
        }
        if (!item.proJueves || item.proJueves == ''){
          item.proJueves = 0
        }
        if (!item.ventViernes || item.ventViernes == ''){
          item.ventViernes = 0
        }
        if (!item.proViernes || item.proViernes == ''){
          item.proViernes = 0
        }
        if (!item.ventSabado || item.ventSabado == ''){
          item.ventSabado = 0
        }
        if (!item.proSabado || item.proSabado == ''){
          item.proSabado = 0
        }
        if (!item.ventTotal || item.ventTotal == ''){
          item.ventTotal = 0
        }
        if (!item.proTotal || item.proTotal == ''){
          item.proTotal = 0
        }
      },
    },
  }
</script>
