<!-- 
Define template (Vue - MVC)
-->
<template>
	<div id="app">
		<header>
			<!-- Bind text content (eq. https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/innerText) -->
			<h1 v-text="cmpTitleHeader" />
		</header>
		<main>
			<!-- Inject formValue in FormTask -->
			<FormTask 
				:content="formValue"
				@onSubmit="onSubmit"
			/>

			<ListTask 
				:filter="storeFilter"
				:content="storeTasks"
				@onClick="toggleTaskState"
				@onRemove="remove"
				@onClearComplete="ClearComplete"
				@onFilter="filter"
			/>

		</main>
		<footer>
			<!-- Bind HTML content (eq. https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML) -->
			<p v-html="cmpTitleFooter" />
		</footer>
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
	// Import child components
	import FormTask from "./components/FormTask.vue";
	import ListTask from "./components/ListTask.vue";

    export default {
		//=> Component identifier
        name: 'App',
        //=> Add child component
		components: { 
			FormTask, 
			ListTask ,
		},
		//=> Used to inject values within the component
        data(){
			console.log(this.$store.getters.filter)
            return{
				// Store values
				storeTasks: this.$store.getters.tasks,
				storeFilter: this.$store.getters.filter,

				// Component values
				cmpTitleHeader: `Vue ToDo MVC`,
				cmpTitleFooter: `© <a href="https://www.linkedin.com/in/julien-n-21219b28/">Julien Noyer</a> - All rights reserved for educational purposes only`,

				// Child component values
				formValue: ``,
            }
        },
		
        //=> Used to inject methods within the component
        methods: { 
			/* 
			Method to bind form submit
			*/
				onSubmit: function(event) {
					// Add new task in store
					this.$store.dispatch('addTask', event);
				},
			//

			/* 
			Methode toggle task state
			*/
				toggleTaskState: function(event){

					// Add new task in store
					this.$store.dispatch('toggleState', event);
				},

				remove: function(event){

					// Add new task in store
					this.$store.dispatch('remove', event);
				},
				filter: function(event){

					// Add new task in store
					this.$store.dispatch('setfilter', event);
				},
				ClearComplete: function(event){

					// Add new task in store
					this.$store.dispatch('clearcomplete', event);
				},
			//
		},

        //=> Component hooks https://bit.ly/31mmkxq (eq. event for component)
        created(){},
        mounted(){},
    }
</script>

<!-- Import main.css from assets -->
<style src="@/assets/css/main.css"></style>
<style>
pre{
	text-align: left;
}
</style>
