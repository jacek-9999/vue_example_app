<template>
    <b-card-group deck>
        <b-card v-for="item in cardData" :key="item.id" :item="item">
            <b-card-text>
                {{item.title}}
            </b-card-text>
            <div class="d-flex justify-content-end">
                <b-button variant="warning">
                    unlink option
                </b-button>
            </div>
        </b-card>
        <b-card>
               <b-button variant="info">
                   <b-icon icon="plus"></b-icon>
                   Create new option
                </b-button>
        </b-card>
    </b-card-group>
</template>
<script>
export default {
    name: 'OptionCard',
    props: {
        cardData: Array
    },
    components: {
    },
    methods:{
    },
    computed: {
    }
}
</script>
<style>
</style>