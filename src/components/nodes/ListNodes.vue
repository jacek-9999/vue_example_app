<template>
    <div class="ListNodes col-6">
        <h1>List of Nodes:</h1>
        <div
                v-for="n in 12"
                v-bind:key="n"
                class="color"
                :style="{ backgroundColor: getColor(n) }">
            Node {{n}}
        </div>
    </div>
</template>

<script>
export default {
    name: "ListNodes",
    methods: {
        getColor(n) {
            return `hsl(${(n - 1) * 30}, 100%, 75%)`;
        }
    }
}
</script>