<template>
  <div id="home">
    <div class="div-title">
      <h1 class="title">Seja bem vindo, <span>Nome do estabelecimento</span></h1>
      <h2>Gerenciamento de Programa de Fidelidade</h2>
    </div>

    <v-text-field type="date" v-model="date"></v-text-field>

    <div class="all-box">
      <router-link to="/clientes">
        <div class="box1">
          <h1>50</h1>
          <p>Clientes cadastrados no programa</p>
        </div>
      </router-link>
      <router-link to="/premios">
        <div class="box2">
          <h1>10</h1>
          <p>Prêmios cadastrados no programa</p>
        </div>
      </router-link>
      <router-link to="/resgates">
        <div class="box3">
          <h1>150</h1>
          <p>Resgates realizados no programa</p>
        </div>
      </router-link>
      <router-link to="/clientes">
        <div class="box4">
          <h1>50</h1>
          <p>Clientes cadastrados no programa</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script src="./Home.js" />

<style lang="scss" src="./Home.scss" />