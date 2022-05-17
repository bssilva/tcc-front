<template>
  <div id="client">
    <Header
      :title="'Clientes'"
      :nameButton="'Cadastrar clientes'"
      :callback="fillModal"
    />
    <Find
      :label="'Pesquisar cliente :'"
      :items="itemsTable"
      v-model="searchObject"
    />
    <Table
      :headers="headersTable"
      :items="searchObject.length > 0 ? searchObject : itemsTable"
      :callbackDelete="deleteCustomer"
      :callbackUpdate="updateCustomer"
      v-model="customerUpdate"
    >
      <template v-slot:updateForm>
        <v-card>
          <v-card-title class="text-h5"> Atualizar cliente </v-card-title>

          <v-card-text>
            <v-form ref="form" lazy-validation>
              <v-label>Nome</v-label>
              <v-text-field
                solo
                :rules="validateForm.required"
                v-model="customerUpdate.name"
              ></v-text-field>
              <v-label>CPF</v-label>
              <v-text-field
                solo
                :rules="validateForm.cpf"
                v-mask="mask.cpf"
                v-model="customerUpdate.cpf"
              ></v-text-field>
              <v-label>Email</v-label>
              <v-text-field
                solo
                :rules="validateForm.email"
                v-model="customerUpdate.email"
              ></v-text-field>
              <v-label>Senha</v-label>
              <v-text-field
                solo
                :rules="validateForm.password"
                v-model="customerUpdate.password"
                type="password"
              ></v-text-field>
              <v-label>Saldo de pontos</v-label>
              <v-text-field
                solo
                :rules="validateForm.points"
                v-model="customerUpdate.balance"
                type="number"
              ></v-text-field>
              <v-label>Celular</v-label>
              <v-text-field
                solo
                v-mask="mask.cellPhone"
                v-model="customerUpdate.cellphone"
              ></v-text-field>
              <!-- <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Cancelar
                </v-btn>
                <v-btn color="green darken-1" text @click="update()">
                  Salvar
                </v-btn>
              </v-card-actions> -->
            </v-form>
          </v-card-text>
        </v-card>
      </template>
    </Table>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5"> Cadastrar cliente </v-card-title>

        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-label>Nome</v-label>
            <v-text-field
              solo
              :rules="validateForm.required"
              v-model="customer.name"
            ></v-text-field>
            <v-label>CPF</v-label>
            <v-text-field
              solo
              :rules="validateForm.cpf"
              v-mask="mask.cpf"
              v-model="customer.cpf"
            ></v-text-field>
            <v-label>Email</v-label>
            <v-text-field
              solo
              :rules="validateForm.email"
              v-model="customer.email"
            ></v-text-field>
            <v-label>Senha</v-label>
            <v-text-field
              solo
              :rules="validateForm.password"
              v-model="customer.password"
              type="password"
            ></v-text-field>
            <v-label>Saldo de pontos</v-label>
            <v-text-field
              solo
              :rules="validateForm.points"
              v-model="customer.balance"
              type="number"
            ></v-text-field>
            <v-label>Celular</v-label>
            <v-text-field
              solo
              v-mask="mask.cellPhone"
              v-model="customer.cellphone"
            ></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                Cancelar
              </v-btn>
              <v-btn color="green darken-1" text @click="saveCustomer">
                Salvar
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./Clients.js" />
<style lang="scss" src="./Client.scss" />
