<script>
import axios from 'axios';
export default {
    data(){
        return {
            // Creo variabil che conterrà i progetti
            projects : []
        }
    },
    created(){
        axios.get('http://127.0.0.1:8000/api/projects').then(r=> {
            // Controllo che abbia preso correttamente i risultati dalla chiamata API
            console.log(r.data.result);
            this.projects = r.data.result;
        });
    }
}
</script>


<template>
    <h1>Main Ciao!</h1>
</template>


<style lang="scss">
</style>