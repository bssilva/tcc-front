<template>
  <v-app>
    <div id="app">
      <SideBar v-if="!$route.path.includes('login')"/>
      <router-view />
    </div>
  </v-app>
</template>

<script src="./App.js" />
<style lang="scss" src="./App.scss" />
