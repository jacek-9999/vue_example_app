<template>
    <div class="col-6">
        <h1>New Node</h1>
        {{node_prepared_to_create}}
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
import { mapGetters } from 'vuex'

export default {
    name: "NodeNewForm",
    data: () => {
        return {
            show: true,
            story_id: null
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
    },
    computed: {
        ...mapGetters({
            node_prepared_to_create: 'node_prepared_to_create'
        }),
    }
}
</script>
