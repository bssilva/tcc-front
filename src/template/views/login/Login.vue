<template>
  <div id="login">
      <div class="box-login">
          <v-card>
              <h1>Área de login</h1>
              <h2>Informe seus dados para continuar</h2>

              <v-label>Email</v-label>
              <v-text-field solo v-model="login.email"></v-text-field>
              <v-label>Senha</v-label>
              <v-text-field type="password" solo v-model="login.senha"></v-text-field>

              <div class="buttons" @click="sendLogin">
                  <v-btn>
                      Entrar
                  </v-btn>
              </div>
          </v-card>
      </div>
  </div>
</template>

<script src="./Login.js"/>

<style lang="scss" src="./Login.scss"/>