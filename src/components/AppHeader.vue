<script>
export default {
	data() {
		return {
			navItems : [
				{
					routeName: 'home',
					title : 'Home',
				},
				{
					routeName: 'projects',
					title : 'Projects'
				}
			],
		};
	},
}
</script>

<template>
    <div class="ms_header container d-flex flex-row align-items-center justify-content-between px-5">
        <h4>Boolfolio</h4>
        <ul class="d-flex gap-3 px-4 align-items-center ms_fs-list">
            <li v-for="item in navItems">
	            <router-link :to="{name: item.routeName }"> {{ item.title }} </router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.ms_header{
    min-height: 70px;
    z-index: 99999;
    color : white;
    background-color: seagreen;
    font-size: 1rem;
    max-width: 100%;
    position: fixed;
        ul{
            margin:0px;
        }
}
</style>