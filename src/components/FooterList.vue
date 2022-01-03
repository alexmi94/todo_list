<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="footer-list-component"
	>
        <ul>
            <li>
                <p>{{cmpList.length}} item left</p>
            </li>
            <li>
                <button
                @click="$emit('onFilter', 0)"
                >All</button>
                <button
                @click="$emit('onFilter', 1)"
                >Active</button>
                <button
                @click="$emit('onFilter', 2)"
                >Complete</button>
            </li>
            <li>
                <button
                @click="$emit('onClearComplete')"
                >Clear Complete</button>
            </li>
        </ul>
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    export default {
        name: 'FooterList', //=> Component identifier
        //=> Used to import values from parent component
        props: {
            content: {
                type: Array,
                default: () => {
                    return undefined
                },
            }
        },

        //=> Used to manage value from parent component
        computed: {
            cmpList: function(){
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
        methods: {},
        created(){},
        mounted(){},
    }
</script>

<!-- 
Define scoped style: only used for the component
-->
<style scopped>
</style>