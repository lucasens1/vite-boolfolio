<script>
import axios from 'axios';
export default {
	data(){
		return{
			project : null,
		}
	},
	created(){
		console.log(this.$route);   // mi mostra la rotta corrent, tra cui anche il parametro slug che è quello nel path
		console.log(this.$router);  // mi mostra un insieme di funzioni, qualcosa a cui mi rivolgo per il routing
		const slug = this.$route.params.slug;
		// Chiamata axios
		axios.get(`http://127.0.0.1:8000/api/projects/${slug}`).then((r) => {
			// se va tutto ok, status 200
			console.log(r); // Mi arriva le info della pagina show dello slug
			this.project = r.data.results;
		})
		.catch((error) => {
            console.log('ERRORE QUI :', error);
			if(error.response.status === 404){
				console.log('reindirizzo in not found');
				// in pages creo NotFoundPage.vue
				// Devo utilizzare la navigazione programmatica, quindi $router
				this.$router.push({name: 'not-found'});
			}
		});
	}
}
</script>

<template>
	<div class="container ms_pt-120">
		<div v-if="project !== null">
			<h1> {{ project.title }} </h1>
			<p> {{ project.description }} </p>
			<p class="badge p-2 fs-5 fw-lighter" :style="{ backgroundColor: project.type.color }"> {{ project.type.name }} </p>
		</div>
	</div>
</template>

<style>
</style>