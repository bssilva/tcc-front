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
            <v-text-field
              solo
              :rules="validateForm.cpf"
              v-mask="mask.cpf"
              v-model="redemption.cpf"
            ></v-text-field>
            <v-label>Escolha o prêmio</v-label>
            <v-select
              :items="prizes"
              item-text="name"
              item-value="_id"
              v-model="namePrizeRedemption"
              label="Selecionar"
              solo
            ></v-select>
            <v-label>Valor unitário (em pontos)</v-label>
            <v-text-field
              disabled
              solo
              v-model="redemption.value"
            ></v-text-field>
            <v-label>Quantidade</v-label>
            <v-text-field
              solo
              type="number"
              :rules="validateForm.redemption"
              v-model="redemption.quantity"
            ></v-text-field>
            <div class="valor-total" v-if="redemption.quantity">
              <v-label>Valor total (em pontos)</v-label>
              <v-text-field
                solo
                :value="Number(redemption.value) * redemption.quantity"
                disabled
              ></v-text-field>
            </div>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="insertRedemption">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./Redemptions.js" />
<style lang="scss" src="./Redemptions.scss" />
