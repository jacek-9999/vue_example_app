<template>
    <div v-if="fetch_stories_from_api.loading" class="text-center">
        <br/>
        <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
    <b-card v-else bg-variant="light">
        <b-form-group
            label-cols-lg="3"
            label="Action Node Edit"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
        >
            <b-form-group
                    id="fieldset-1"
                    description="Edit Title"
                    label=""
                    label-for="input-title"
                    :invalid-feedback="invalidTitleFeedback"
                    :valid-feedback="validTitleFeedback"
                    :state="titleState"
            >
                <b-form-input id="input-title" v-model="title" :state="titleState"></b-form-input>
            </b-form-group>
            <b-form-group
                    id="fieldset-2"
                    description="Edit Description"
                    label=""
                    label-for="input-description"
                    :invalid-feedback="invalidDescriptionFeedback"
                    :valid-feedback="validDescriptionFeedback"
                    :state="descriptionState"
            >
                <b-form-textarea
                        id="textarea"
                        v-model="description"
                        placeholder="Enter something..."
                        rows="3"
                        max-rows="6"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group v-if="!is_initial">
                <b-form-checkbox-group
                        id="fieldset-3"
                        v-model="is_final"
                        :options="checkbox_options"
                        name="is_final_checkbox"
                ></b-form-checkbox-group>
            </b-form-group>
            <hr>
            Options:
            <OptionCard></OptionCard>
            <hr>
            <div class="col-12">
                <div class="d-flex justify-content-between">
                    <b-button v-on:click="cancel()" size="lg" variant="danger">
                        <b-icon icon="arrow-left"></b-icon>back
                    </b-button>
                    <b-button  v-on:click="submit()" size="lg" variant="success">
                        save
                    </b-button>
                </div>
            </div>
        </b-form-group>
    </b-card>
</template>

<script>
import { mapGetters } from 'vuex'
import OptionCard from "./OptionCard";

export default {
    name: "NodeEditForm",
    components: {OptionCard},
    methods: {
        getStoryId() {
            return this.$route.params.story_id;
        },
        getNodeId() {
            return this.$route.params.node_id;
        },
        cancel: function () {
            this.$store.dispatch('getAllStories').then(() => {
                this.$router.go(-1);
            });
        },
        submit: function () {
            let data = {
                'title': this.title,
                'description': this.description,
                'is_final': this.is_final,
                'id': this.$route.params.node_id
            };
            this.$store.dispatch('updateNode', data)
                .then(() => {
                    this.$store.dispatch('resetLoader').then(() => {
                        this.$store.dispatch('getAllStories').then(() => {
                            this.$router.go(-1);
                        });
                    });
                }).catch((err) => {
                    console.log(err);
                });
        }
    },
    beforeMount: function() {
       // this.$store
       //     .dispatch('getNodeById', this.$route.params.node_id)
       //     .then((data) => {
        if (typeof this.$store.stories_list === "undefined") {
            this.$store.dispatch('getAllStories').then((data) => {
                console.log(data);
                console.log(this.$store.stories_list);
                this.title =
                    this.$store.stories_list[this.$route.params.story_id]
                        .nodes[this.$route.params.node_id].title;
                this.description =
                    this.$store.stories_list[this.$route.params.story_id]
                        .nodes[this.$route.params.node_id].description;
                this.is_final =
                    [this.$store.stories_list[this.$route.params.story_id]
                        .nodes[this.$route.params.node_id].is_final];
                this.is_initial =
                    this.$store.stories_list[this.$route.params.story_id]
                        .nodes[this.$route.params.node_id].is_initial;
                this.options =
                    this.$store.stories_list[this.$route.params.story_id]
                        .nodes[this.$route.params.node_id].options;
            });
        } else {
            this.title =
                this.$store.stories_list[this.$route.params.story_id]
                    .nodes[this.$route.params.node_id].title;
                    // description
            this.description =
                this.$store.stories_list[this.$route.params.story_id]
                    .nodes[this.$route.params.node_id].description;
            this.is_final =
                [this.$store.stories_list[this.$route.params.story_id]
                    .nodes[this.$route.params.node_id].is_final];
            this.is_initial =
                this.$store.stories_list[this.$route.params.story_id]
                    .nodes[this.$route.params.node_id].is_initial;
            this.options =
                this.$store.stories_list[this.$route.params.story_id]
                    .nodes[this.$route.params.node_id].options;
        }
       },
    computed: {
        ...mapGetters({
            fetch_stories_from_api: 'fetch_stories_from_api',
            stories_list: 'stories_list',
            node: 'node'
        }),
        titleState() {
            return this.title.length > 1 ? true : false
        },
        descriptionState() {
            return this.description.length > 1 ? true : false
        },
        invalidTitleFeedback() {
            if (this.title.length < 1) {
                return 'Title is empty.'
            } else {
                return 'Wrong title data.'
            }
        },
        invalidDescriptionFeedback() {
            if (this.title.length < 1) {
                return 'Description is empty.'
            } else {
                return 'Wrong description data.'
            }
        },
        validTitleFeedback() {
            return 'Submit'
            // return this.state === true ? 'Thank you' : ''
        },
        validDescriptionFeedback() {
            return 'Submit'
            // return this.state === true ? 'Thank you' : ''
        }
    },
    data() {
        return {
            title: '',
            description: '',
            is_initial: false,
            is_final: [],
            checkbox_options: [
                {text: 'Final Node', value: 1}
            ],
            options: []
        }
    }
}
</script>
