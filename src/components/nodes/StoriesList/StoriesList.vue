<template>
    <div class="StoriesList col-9 mx-auto">
            <b-list-group>
                <b-list-group-item variant="primary">List of Stories:</b-list-group-item>
                <div v-if="stories_list.loading" class="text-center">
                    <br/>
                    <b-spinner variant="primary" label="Spinning"></b-spinner>
                </div>
                <div v-else>
                    <b-list-group-item v-for="item in stories_list" :key="item.story_id">
                        <router-link :to="{ path: 'nodes/'+item.story_id }">
                            {{ item.title }}
                        </router-link>
                    </b-list-group-item>
                </div>
            </b-list-group>
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