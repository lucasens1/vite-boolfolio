<script>
export default {
    props : {
        project : Object
    }
}
</script>
<template>
    <div class="card h-100 my-3">
        <div class="card-body">
            <router-link :to="{ name : 'single-project', params: { slug : project.slug } }">
                <h3><i>{{ project.title }}</i></h3>
            </router-link>
            <!-- Implemento il tipo di progetto e controllo se lo abbia assegnato -->
            <h6>Tipo di progetto : <span class="badge mx-2 my-2" :style="{ backgroundColor: project.type.color ? project.type.color : 'black' }"> {{ project.type.name ? project.type.name : 'tipo non specificato' }} </span></h6>
            <p> Lista delle tecnologie utilizzate : </p>
            <ul class="my-2 d-flex flex-column gap-2 align-items-center">
                <li v-for="tech in project.technologies">
                    <span class="p-1">{{ tech ? tech.name : "Non sono state specificate le tecnologie utilizzate" }}</span>
                    <span class="badge p-1 mx-2" style="background-color: black;">{{ tech.version ? tech.version : "N/A" }}</span>
                </li>
                <li v-if="project.technologies.length === 0">
                    <i><span class="fw-lighter">Non sono state specificate le tecnologie utilizzate.</span></i>
                </li>
            </ul>
        </div>
    </div>
</template>