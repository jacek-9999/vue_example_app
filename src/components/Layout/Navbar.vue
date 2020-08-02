<template>
    <div>
        <b-navbar type="dark" variant="secondary" fixed="top">
            <b-navbar-nav>
                <b-nav-item v-if="!isPath('stories')" :to="{path: '/'}">
                    <b-icon variant="danger" font-scale="1.5" icon="arrow-left-square-fill"></b-icon>
                    Stories Edition List
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-item v-if="!isPath('games')" :to="{path: '/games'}">
                    <b-icon variant="warning" font-scale="1.5" icon="trophy"></b-icon>
                    Playable Stories
                </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item v-on:click="logout">Logout</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    components: {
    },
    methods:{
      logout: function () {
          this.$store.dispatch('logout')
              .then(() => {
                  this.$router.push({path: 'login'});
              });
      },
      isPath: function(path) {
          return this.$route.name === path
      }
    },
    computed: {
    }
}
</script>
<style>
</style>
