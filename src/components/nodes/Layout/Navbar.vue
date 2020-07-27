<template>
    <div>
        <b-navbar type="dark" variant="secondary" fixed="top">
            <b-navbar-nav>
                <b-nav-item :to="{path: '/'}">Home</b-nav-item>
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
    }
}
</script>
<style>
</style>
