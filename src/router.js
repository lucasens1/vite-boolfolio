import { createRouter, createWebHistory} from 'vue-router';
import ProjectPage from './pages/ProjectPage.vue';
import HomePage from './pages/HomePage.vue';

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
		}
	],
});

export { router };