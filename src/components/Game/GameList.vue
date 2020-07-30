<template>
    <div class="StoriesList col-9 mx-auto">
            <b-list-group>
                <div v-if="fetch_stories_from_api.loading" class="text-center">
                    <br/>
                    <b-spinner variant="primary" label="Spinning"></b-spinner>
                </div>
                <div v-else>
                    Select story
                    <hr>
                    <game-list-element v-for="item in stories_list" :key="item.story_id" :item="item">
                    </game-list-element>
                </div>
                <hr>
            </b-list-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GameListElement from "./GameListElement";

export default {
    name: "GameList",
    components: {GameListElement},
    methods: {
    },
    computed: mapGetters({
        stories_list: 'stories_list',
        stories: 'stories',
        fetch_stories_from_api: 'fetch_stories_from_api'
    }),
}
</script>