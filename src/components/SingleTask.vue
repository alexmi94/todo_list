<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="single-task-component"
	>   <ul>
        <li>        
        <button
            @click="$emit('onClick', cmpValue._id)"
        >
        </button>
        </li>
        
        <li>
        <p v-if="!cmpValue.done">{{ cmpValue.content }}</p>
        <p v-else class="line">{{ cmpValue.content }}</p>
        </li>
        <!-- Bind click event -->
        <li>
        <button
            @click="$emit('onRemove', cmpValue._id)"
        > 
        </button>
        </li>
        </ul>
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    export default {
        name: 'SingleTask', //=> Component identifier
        components: {  }, //=> Add child component

        //=> Used to import values from parent component
        props: {
            content: {
                type: Object,
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
        methods: { },
        //=> Component hooks https://bit.ly/31mmkxq (eq. event for component)
        created(){},
        mounted(){},
    }
</script>

<!-- 
Define scoped style: only used for the component
-->
<style scopped>
</style>