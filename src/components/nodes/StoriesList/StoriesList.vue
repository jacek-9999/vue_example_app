<template>
    <div class="StoriesList col-9 mx-auto">
            <b-list-group>
                <b-list-group-item variant="dark">
                    <div class="d-flex justify-content-between">
                        <div></div>
                            List of Stories:
<!--                        <b-button v-on:click="navToEditForm(item.id)" variant="success">-->
                        <b-button variant="success">
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
                    <story-list-element v-for="item in stories_list" :key="item.story_id" :item="item">
                    </story-list-element>
                </div>
            </b-list-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StoryListElement from "./StoryListElement";

export default {
    name: "StoriesList",
    components: {StoryListElement},
    methods: {},
    computed: mapGetters({
        stories_list: 'stories_list',
        stories: 'stories',
        fetch_stories_from_api: 'fetch_stories_from_api'
    }),
}
</script>