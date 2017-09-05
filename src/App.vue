<template>
  <v-app>
      <v-navigation-drawer temporary right v-model="sideNav" class="hidden-md-and-up">
          <v-list>
              <v-list-tile 
                  v-for="item in menuItems" 
                  :key="item.title"
                  router
                  :to="item.link">
                  <v-list-tile-action>
                      <v-icon>{{item.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>{{item.title}}</v-list-tile-content>
              </v-list-tile>
          </v-list> 
      </v-navigation-drawer>
      <v-toolbar dark class="primary">
          <v-toolbar-title>
              <router-link to='/' tag='span' style='cursor: pointer'>Dev Meetup</router-link></v-toolbar-title> 
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat v-for="item in menuItems" 
                          :key="item.title"
                          router
                          :to="item.link">
                  <v-icon left>{{item.icon}}</v-icon> 
                  {{item.title}}</v-btn>
          </v-toolbar-items>
          <v-toolbar-side-icon 
              @click.native.stop="sideNav = !sideNav"
              class="hidden-md-and-up"></v-toolbar-side-icon>
          <!--<v-menu top right class="hidden-md-and-up">-->
              <!--<v-btn icon slot="activator">-->
                  <!--<v-icon>reorder</v-icon>-->
              <!--</v-btn>-->
              <!--<v-list>-->
                  <!--<v-list-tile v-for="(item,index) in items" :key="index" @click="">-->
                      <!--<v-list-tile-title>{{item}}</v-list-tile-title>-->
                  <!--</v-list-tile>-->
              <!--</v-list>-->
          <!--</v-menu>-->
      </v-toolbar>
      <main>
          <router-view></router-view>
      </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        menuItems: [
            { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
            { icon: 'room', title: 'Organize Meetup', link: '/createmeetup'},
            { icon: 'person', title: 'Profile', link: 'profile'},
            { icon: 'face', title: 'Sign up', link: '/signup'},
            { icon: 'lock_open', title: 'Log in', link: '/signin'}
        ],
        sideNav: false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
