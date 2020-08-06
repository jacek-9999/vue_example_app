<template>
    <div class="error-msg" v-if="current_error_msg">
        <b-button block variant="outline-danger">
            <b-icon icon="exclamation-square-fill" font-scale="2" animation="fade" variant="warning"></b-icon>
            {{current_error_msg}}
        </b-button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Msg',
    methods:{
    },
    mounted: function () {
    },
    computed: {
        ...mapGetters({
            current_error_msg: 'current_error_msg'
        }),
    },
}
</script>
<style>
</style>
