import { createRouter, createWebHistory} from 'vue-router';
import ProjectPage from './pages/ProjectPage.vue';
import HomePage from './pages/HomePage.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path : '/projects',
			name : 'projects',
			component : ProjectPage
		},
		{
			path : '/',
			name : 'home',
			component : HomePage
		},
        {
			// in Laravel usiamo {project} in Vue :valoredinamico
			path :'/projects/:slug',
			name: 'single-project',
			component: SingleProjectPage
		}
	],
});

export { router };