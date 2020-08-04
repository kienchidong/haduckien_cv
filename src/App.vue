<template>
    <div id="app" class="background-custom">
       <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
    #app {
        font-family: "Times New Roman", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .background-custom{
        background-image: url("./assets/images/background.jpg");
        background-repeat: repeat;
        min-height: 860px;
        padding-top: 3%;
    }
</style>
