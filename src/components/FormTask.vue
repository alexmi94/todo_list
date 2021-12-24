<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="form-task-component"
	>
        <!-- 
            Set form validation (https://vuejs.org/v2/cookbook/form-validation.html)
            Bind submit event to emit onSubmit event (https://fr.vuejs.org/v2/guide/components-custom-events.html)
        -->
        <form 
            @submit="onSubmit"
        >
            <!-- Inject value in input tag (https://v3.vuejs.org/guide/migration/v-model.html) -->
            <input 
                type="text"
                placeholder="What needs to be done"
                :value="cmpValue"
            >
        </form>
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    export default {
        name: 'FormTask', //=> Component identifier
        components: {  }, //=> Add child component

        //=> Used to import values from parent component
        props: {
            content: {
                type: String,
                default: () => {
                    return undefined
                },
            }
        },

        //=> Used to manage value from parent component
        computed: {
            cmpValue: function(){
                if( this.content ){
                    return this.content;
                }else{
                    return undefined;
                }
            },
        },

        data(){
            //=> Used to inject values within the component
            return{
            }
        },
        //=> Used to inject methods within the component
        methods: { 
            /* 
			Method to bind form submit
			*/
				onSubmit: function(event) {
                    // Stop event
                    event.preventDefault()

                    // Emit onSubmit event
                    this.$emit('onSubmit', event.target.children[0].value);
                    event.target.children[0].value = ""
				},
			//
        },
        //=> Component hooks https://bit.ly/31mmkxq (eq. event for component)
        created(){},
        mounted(){},
    }
</script>

<!-- 
Define scoped style: only used for the component
-->
<style scopped>
form{
    height: 100%;
}
</style>