<template>
    <b-card bg-variant="light">
        <b-form-group
            label-cols-lg="3"
            label="Create Action Node"
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
            <div class="d-flex">
                <b-form-group>
                    <b-form-checkbox-group
                            id="fieldset-3"
                            v-model="is_initial"
                            :options="options_initial"
                            name="is_final_checkbox"
                    ></b-form-checkbox-group>
                </b-form-group>
                <b-form-group>
                    <b-form-checkbox-group
                            id="fieldset-3"
                            v-model="is_final"
                            :options="options_final"
                            name="is_final_checkbox"
                    ></b-form-checkbox-group>
                </b-form-group>
            </div>
            {{node_prepared_to_create}}
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

export default {
    name: "NodeNewForm",
    data: () => {
        return {
            story_id: null,
            title: '',
            description: '',
            is_initial: [],
            options_initial: [
                {text: 'Initial Node', value: 1}
            ],
            is_final: [],
            options_final: [
                {text: 'Final Node', value: 1}
            ]
        }
    },
    watch: {
        show(newVal) {
            console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
        }
    },
    methods: {
        cancel() {
            console.log('Toggle button clicked')
            this.show = !this.show
        },
        submit() {
            console.log('Alert dismissed')
        }
    },
    computed: {
        ...mapGetters({
            node_prepared_to_create: 'node_prepared_to_create'
        }),
    }
}
</script>
