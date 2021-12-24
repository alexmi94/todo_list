/* 
Imports and config
*/
    // Import Vue
    import Vue from "vue";
    
    // Import VueX modules
    import Vuex from "vuex";
    import createPersistedState from "vuex-persistedstate";

    // Import App store module
    import ui from "./modules/ui";

    // Set up Vuex
    Vue.use(Vuex);
//



/* 
Export store
*/
    export default new Vuex.Store({
        // Used to add App store modules
        modules: {
            ui,
        },
        
        // Used to add VueX plugins
        plugins: [
            createPersistedState()
        ]
    });
//