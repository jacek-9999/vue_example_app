<template>
    <div class="StoriesList col-6">
        <div>
            {{stories_list}}
        </div>
        <h1>List of Nodes:</h1>
        <div
                v-for="n in 12"
                v-bind:key="n"
                class="color"
                :style="{ backgroundColor: getColor(n) }">
            Node {{n}}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "StoriesList",
    methods: {
        getColor(n) {
            return `hsl(${(n - 1) * 30}, 100%, 75%)`;
        }
    },
    computed: mapGetters({
        stories_list: 'stories_list',
        stories: 'stories'
    }),
}
</script>