<script>
import axios from 'axios';
import AppCard from '../components/AppCard.vue';
export default {
    components : {
        AppCard
    },
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
    <!-- <h1>Main Ciao!</h1> -->

    <div class="container ms_pt-120 pb-5">
        <h1> Lista dei progetti realizzati :</h1>    
            <div class="row row-cols-4">
                <div class="col g-3" v-for="project in projects">
                    <AppCard :project="project"/>
                </div>
            </div>
    </div>
</template>


<style lang="scss">
</style>