<template>
  <div id="find">
    <v-col cols="12" sm="9">
      <div class="label-input">
        <v-label> {{ label }} </v-label>
        <v-text-field solo @input="getInfo" v-model="search"/>
      </div>
    </v-col>
    <v-btn> Pesquisar </v-btn>
  </div>
</template>

<script src="./Find.js" />
<style lang="scss" src="./Find.scss" />
