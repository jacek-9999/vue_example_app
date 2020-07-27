<template>
    <div class="ListNodes col-9 mx-auto">
        <b-list-group>
            <b-list-group-item variant="primary">List of Action Nodes:</b-list-group-item>
            <hr>
            <div v-if="fetch_stories_from_api.loading" class="text-center">
                <br/>
                <b-spinner variant="primary" label="Spinning"></b-spinner>
            </div>
            <div v-else>
                <NodesListElement v-for="item in stories[getStoryId()]" :key="item.id" :item="item">
                </NodesListElement>
            </div>
        </b-list-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NodesListElement from "./NodesListElement";

export default {
    name: "ListNodes",
    components: {NodesListElement},
    methods: {
        getStoryId() {
            return this.$route.params.story_id;
        },
        getColor(n) {
            return `hsl(${(n - 1) * 30}, 100%, 75%)`;
        }
    },
    computed: mapGetters({
        stories_list: 'stories_list',
        stories: 'stories',
        fetch_stories_from_api: 'fetch_stories_from_api'
    }),
}
</script>