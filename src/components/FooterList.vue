<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="footer-list-component"
	>
        <ul>
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
        </ul>
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    export default {
        name: 'FooterList', //=> Component identifier
        components: {  }, //=> Add child component
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