<template>
    <div class="root">
        <b-row>
            <b-col cols="6">
                <strong>{{ schoolName }}</strong>
            </b-col>
            <b-col cols="6" align="right" v-if="time">
                {{ time }}
            </b-col>
            <b-col cols="12" v-if="special">
                <p><em>Chuy&ecirc;n ng&agrave;nh: {{ special }}</em></p>
            </b-col>
            <b-col cols="12">
                {{ content }}
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "DetailComponent",
        props: ['schoolName', 'time', 'special', 'content']
    }
</script>

<style scoped>

</style>
