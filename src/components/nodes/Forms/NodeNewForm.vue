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
                            v-model="is_final"
                            :options="options_final"
                            name="is_final_checkbox"
                    ></b-form-checkbox-group>
                </b-form-group>
            </div>
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

export default {
    name: "NodeNewForm",
    data: () => {
        return {
            story_id: null,
            title: '',
            description: '',
            is_final: [],
            options_final: [
                {text: 'Final Node', value: 1}
            ]
        }
    },
    watch: {
    },
    methods: {
        cancel() {
            this.$store.dispatch('getAllStories').then(() => {
                this.$router.go(-1);
            })
        },
        submit() {
            let data = {
                'title':        this.title,
                'description':  this.description,
                'is_final':     this.is_final.length !== 0,
                'story_id':     (this.$route.name === 'storyNew') ? 'new' : this.$route.params.story_id
            };
            this.$store.dispatch('createNode', data)
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
    computed: {
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
    }
}
</script>
