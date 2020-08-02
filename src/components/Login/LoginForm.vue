<template>
    <div class="mx-auto col-4">
            <b-card bg-variant="light">
                <b-icon icon="emoji-sunglasses" font-scale="4" variant="info" animation="throb"></b-icon>
                <p>Welcome</p>
                <b-form-input v-model="login" placeholder="Login"></b-form-input>
                <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
                <hr>
            <b-button variant="info" @click="submit">Login</b-button>
        </b-card>
    </div>
</template>
<script>
export default {
    name: "LoginForm",
    computed: {},
    methods: {
        submit: function () {
            console.log(this.login);
            console.log(this.password);
        }
    },
    data() {
        return {
            login: '',
            password: ''
        }
    }
}
</script>