<template>
    <div class="ListNodes col-9 mx-auto">
        <b-list-group>
            <b-list-group-item variant="info">
                <div class="d-flex justify-content-between">
                <div></div>
                    List of Action Nodes:
                <b-button v-on:click="navToNewNodeForm" variant="success">
                    <b-icon icon="plus-square"></b-icon>
                </b-button>
                </div>
            </b-list-group-item>
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
        navToNewNodeForm: function () {
            this.$router.push({ name: 'nodesNew' })
        },
        getStoryId() {
            return this.$route.params.story_id;
        }
    },
    computed: mapGetters({
        stories_list: 'stories_list',
        stories: 'stories',
        fetch_stories_from_api: 'fetch_stories_from_api'
    }),
}
</script>