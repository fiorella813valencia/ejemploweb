<template>
  <div class="containerDataTable">
    <br>
    <h1>Rooms</h1>

    <router-link  to="/admin/artist/new"> <pv-button>Nuevo</pv-button> </router-link>
    <br>
    <pv-data-table class="dataTable" :value="cars" responsiveLayout="scroll" :scrollable="true" scrollHeight="600px" dataKey="id" v-model:filters="filters" filterDisplay="menu" :loading="loading" :paginator="true" :rows="10">
      <template #header>
        <div>
          Lista de Habitaciones
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <pv-input-text type="Buscar" v-model="value1" placeholder="Search" />
          </span>
        </div>
      </template>
      <pv-column field="id" header="Id" :sortable="true">
        <template #filter="{filterModel,filterCallback}">
          <pv-input-text type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/>
        </template>
      </pv-column>

      <pv-column field="name" header="Name" :sortable="true">
        <template #filter="{filterModel,filterCallback}">
          <pv-input-text type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/>
        </template>
      </pv-column>

      <pv-column field="photo" header="Photo" :sortable="true">
        <template #body="slotProps">
          <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
        </template>
      </pv-column>

      <pv-column field="favsport" header="Favorite_Sport" :sortable="true">
        <template #filter="{filterModel,filterCallback}">
          <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/>
        </template>
      </pv-column>
      <pv-column field="points" header="Points" :sortable="true">
        <template #filter="{filterModel,filterCallback}">
          <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="`Search by name - ${filterModel.matchMode}`"/>
        </template>
      </pv-column>

      <pv-column field="edit" header="Edit" :sortable="true">
        <template #body="slotProps">
          <div class="table-header">
            <pv-button icon="pi pi-cog" />
          </div>
        </template>
      </pv-column>

      <pv-column field="delete" header="Delete" :sortable="true">
        <template #body="slotProps">
          <div class="table-header">
            <pv-button icon="pi pi-times" />
          </div>
        </template>
      </pv-column>


    </pv-data-table>
  </div>
</template>

<script>

import {UserNew} from "../services/challenges-services";

export default {
  data() {
    return {
      value: "",
      cars: [
        { number: "Room1", guest: "Alexis Frogoziolo", date: "13/05/21", price: "$40,000", status: "Disponibles", time: "1D", registrar: "Registrar" },
        { number: "Room2", guest: "Alexis Frogoziolo", date: "13/05/21", price: "$40,000", status: "Disponibles", time: "1D", registrar: "Registrar" },
        { number: "Room3", guest: "Alexis Frogoziolo", date: "13/05/21", price: "$40,000", status: "Disponibles", time: "1D", registrar: "Registrar" },
        { number: "Room4", guest: "Alexis Frogoziolo", date: "13/05/21", price: "$40,000", status: "Disponibles", time: "1D", registrar: "Registrar" },
        { number: "Room6", guest: "Alexis Frogoziolo", date: "13/05/21", price: "$40,000", status: "Disponibles", time: "1D", registrar: "Registrar" },
        { number: "Room7", guest: "Alexis Frogoziolo", date: "13/05/21", price: "$40,000", status: "Disponibles", time: "1D", registrar: "Registrar" },
        { number: "Room8", guest: "Alexis Frogoziolo", date: "13/05/21", price: "$40,000", status: "Disponibles", time: "1D", registrar: "Registrar" },
        { number: "Room9", guest: "Alexis Frogoziolo", date: "13/05/21", price: "$40,000", status: "Disponibles", time: "1D", registrar: "Registrar" },
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.containerDataTable {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #011530;
  height: 100vh;
}

.containerDataTable h1 {
  font-family: 'Roboto', sans-serif;
  color: #CACACA;
}

.dataTable {
  width: 95%;
}

</style>