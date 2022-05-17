<template>
  <div id="table">

    <v-data-table :headers="headers" :items="items" :items-per-page="5">
      <template v-slot:item.actions="{ item }">
        <v-icon small @click="openModal(item, 'update')" class="mr-2"> mdi-pencil </v-icon>
        <v-icon small @click="openModal(item, 'delete')"> mdi-delete </v-icon>
      </template>
    </v-data-table>

    <v-dialog v-model="dialogDelete" max-width="700px">
      <div class="dialog-delete">
        <h1>Confirma solicitação de exclusão ?</h1>
        <div class="buttons">
          <v-btn @click="dialogDelete = false">Cancelar</v-btn>
          <v-btn @click="callbackConfirm('delete')">Confirmar</v-btn>
        </div>
      </div>
    </v-dialog>

     <v-dialog v-model="dialogUpdate" max-width="700px">
      <div class="dialog-update">
        <slot name="updateForm" />
        <div class="buttons">
          <v-btn @click="dialogUpdate = false">Cancelar</v-btn>
          <v-btn @click="callbackConfirm('update')">Confirmar</v-btn>
        </div>
      </div>
    </v-dialog>

  </div>
</template>

<script src="./Table.js" />
<style lang="scss" src="./Table.scss" />
