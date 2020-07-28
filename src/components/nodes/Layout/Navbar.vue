<template>
    <div>
        <b-navbar type="dark" variant="secondary" fixed="top">
            <b-navbar-nav>
                <b-nav-item v-if="!isBasePath" :to="{path: '/'}">
                    <b-icon variant="danger" icon="arrow-left-square-fill"></b-icon>
                    Stories List
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
          alert('not work in demo version');
      }
    },
    computed: {
        isBasePath() {
            return this.$route.name === 'stories'
        }
    }
}
</script>
<style>
</style>
