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
            <div v-if="is_loading" class="text-center">
                <br/>
                <Spinner></Spinner>
            </div>
            <div v-else>
                <NodesListElement v-for="item in stories_list[getStoryId()].nodes" :key="item.id" :item="item">
                </NodesListElement>
            </div>
        </b-list-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NodesListElement from "./NodesListElement";
import Spinner from "../../Layout/Spinner";

export default {
    name: "ListNodes",
    components: {Spinner, NodesListElement},
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
        // stories: 'stories',
        is_loading: 'is_loading'
    }),
}
</script>