<script>
import ProjectPage from './pages/ProjectPage.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components : {
    AppHeader,
    ProjectPage,
    AppFooter,
  }
}
</script>

<template>
  <AppHeader/>
	<router-view></router-view>
  <AppFooter/>
</template>

<style lang="scss">
</style>
