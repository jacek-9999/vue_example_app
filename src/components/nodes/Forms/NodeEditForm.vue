<template>
    <b-card bg-variant="light">
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
            <b-button variant="success">save</b-button>
            <b-button variant="danger">cancel</b-button>
        </b-form-group>
    </b-card>
</template>

<script>
export default {
    name: "NodeEditForm",
    computed: {
        titleState() {
            console.log(this.title);
            return this.title.length > 1 ? true : false
            // return true;
        },
        descriptionState() {
            console.log(this.description);
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
