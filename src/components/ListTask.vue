<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="list-task-component"
	>
        <!-- Loop on  cmpList -->
        <div 
            v-for="(item, idx) in cmpList" 
            :key="`item-task-${idx}`"
        >

            <div
                v-if="cmpFilter.nb === 0"
            >
            <!-- Inject item in SingleTask -->
            <SingleTask 
                :content="item"
                @onClick="$emit('onClick', $event)"
                @onRemove="$emit('onRemove', $event)"
            />
            </div>

            <div
                v-if="cmpFilter.nb === 1"
            >
            <!-- Inject item in SingleTask -->
            <div v-if="!item.done">
            <SingleTask 
                :content="item"
                @onClick="$emit('onClick', $event)"
                @onRemove="$emit('onRemove', $event)"
            />
            </div>
            </div>


            <div
                v-if="cmpFilter.nb === 2"
            >
            <!-- Inject item in SingleTask -->
            <div v-if="item.done">
            <SingleTask 
                :content="item"
                @onClick="$emit('onClick', $event)"
                @onRemove="$emit('onRemove', $event)"
            />
            </div>
            </div>

        </div>


        <!-- Display child component -->
        
        <FooterList
            :content="cmpList"
            @onFilter="$emit('onFilter', $event)"
            @onClearComplete="$emit('onClearComplete', $event)"
         />
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    // Import child component
    import SingleTask from "./SingleTask.vue";
    import FooterList from "./FooterList.vue";

    export default {
        name: 'ListTask', //=> Component identifier
        components: { SingleTask, FooterList }, //=> Add child component

        //=> Used to import values from parent component
        props: {
            content: {
                type: Array,
                default: () => {
                    return undefined
                },
            },
            filter: {
                type: Object,
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
            cmpFilter: function(){
                return this.filter;
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