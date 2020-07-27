<template>
    <div class="col-6">
        <h1>Node Delete</h1>
        <b-button size="sm" @click="toggle">
            {{ show ? 'Hide' : 'Show' }} Alert
        </b-button>
        <b-alert
                v-model="show"
                class="mt-3 col-6"
                dismissible
                @dismissed="dismissed"
        >
            Add new Node
        </b-alert>
    </div>
</template>

<script>
export default {
    name: "NodeDeleteForm",
    data() {
    return {
        show: true
    }
},
    watch: {
        show(newVal) {
            console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
        }
    },
    methods: {
        toggle() {
            console.log('Toggle button clicked')
            this.show = !this.show
        },
        dismissed() {
            console.log('Alert dismissed')
        }
    }
}
</script>
