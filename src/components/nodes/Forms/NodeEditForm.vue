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
            <b-form-group>
                <b-form-checkbox-group
                        id="fieldset-3"
                        v-model="is_final"
                        :options="options"
                        name="is_final_checkbox"
                ></b-form-checkbox-group>
            </b-form-group>
            <hr>
            <div class="col-12">
                <div class="d-flex justify-content-between">
                    <b-button size="lg" variant="danger">cancel</b-button>
                    <b-button size="lg" variant="success">save</b-button>
                </div>
            </div>

        </b-form-group>
    </b-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "NodeEditForm",
    methods: {
        ...mapGetters({
            fetch_stories_from_api: 'fetch_stories_from_api',
            node: 'node'
        }),
        ...mapActions({
            getNodeById: 'getNodeById'

        }),
    },
    beforeMount: function() {
       this.$store.dispatch('getNodeById', this.$route.params.node_id);
    },
    computed: {
        fillForm() {
            // return this.$store.state.node[this.$route.params.node_id].title;
            // console.log(this.$store.state.node);
            // console.log(this.$route.params.node_id);
            if (this.$store.getters.node(this.$route.params.node_id) !== undefined) {
               // console.log(this.$store.getters.node(this.$route.params.node_id).title);
                this.title =  this.$store.getters.node(this.$route.params.node_id).title;
                this.description =  this.$store.getters.node(this.$route.params.node_id).description;
                this.is_final =  [this.$store.getters.node(this.$route.params.node_id).is_final];
            }
            // console.log(this.$store.getters.node(this.$route.params.node_id));
            // return );
            // return this.$store.getters.node();
        },
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
            is_final: [],
            options: [
                {text: 'Final Node', value: 1}
            ]
        }
    }
}
</script>
