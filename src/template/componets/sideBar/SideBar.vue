<template>
  <div id="side-bar">
    <div id="side-bar-close">
      <v-card>
        <v-navigation-drawer
          v-model="drawer"
          :mini-variant.sync="mini"
          permanent
        >
          <v-list-item class="logo-main">
            <v-list-item-avatar>
              <v-btn>
                <span class="mdi mdi-menu"></span>
              </v-btn>
            </v-list-item-avatar>

            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item link v-for="item in items" :key="item.title">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <div class="redirect">
                <router-link :to="item.to">
                  <v-list-item-content>
                    <v-list-item-title> {{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </router-link>
              </div>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
  </div>
</template>

<script src="./SideBar.js" />
<style lang="scss" src="./SideBar.scss" />
