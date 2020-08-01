<template>
    <div class="StoriesList col-9 mx-auto">
            <b-list-group>
                <div v-if="is_loading" class="text-center">
                    <br/>
                    <Spinner></Spinner>
                </div>
                <div v-else>
                    <b-list-group-item variant="secondary">
                        <div class="d-flex justify-content-between">
                            <div></div>
                            <h4>Select story</h4>
                            <div></div>
                        </div>
                    </b-list-group-item>


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
import Spinner from "../Layout/Spinner";

export default {
    name: "GameList",
    components: {Spinner, GameListElement},
    methods: {
    },
    computed: mapGetters({
        stories_list: 'stories_list',
        is_loading: 'is_loading'
    }),
}
</script>