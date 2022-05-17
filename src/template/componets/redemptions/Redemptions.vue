<template>
  <div id="redemption">
    <Header
      :title="'Resgates'"
      :nameButton="'Inserir Resgate'"
      :callback="fillModal"
    />
    <Find
      :label="'Pesquisar resgate :'"
      :items="itemsTable"
      v-model="searchObject"
    />
    <Table
      :headers="headersTable"
      :items="searchObject.length > 0 ? searchObject : itemsTable"
    />

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5"> Inserir resgate </v-card-title>

        <v-card-text>
          <v-form>
            <v-label>CPF do cliente</v-label>
            <v-text-field solo v-model="redemption.cpd"></v-text-field>
            <v-label>Escolha o prêmio</v-label>
            <v-text-field solo v-model="redemption.id_premio"></v-text-field>
            <v-label>Valor (em pontos)</v-label>
            <v-select :items="prizes" label="Solo field" solo></v-select>
            <v-label>Quantidade</v-label>
            <v-text-field solo v-model="redemption.qtd"></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="insertPoints">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./Redemptions.js" />
<style lang="scss" src="./Redemptions.scss" />
