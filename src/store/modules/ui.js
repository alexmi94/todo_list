export default {
    state: {
        // Define dynamic states: each state is a subjet to subscribe
        tasks: [],
        filter: {nb:0},
    },
    
    getters: {
        // Define getters: each static states must have getters
        tasks: (state) => state.tasks,
        filter: (state) => state.filter,
    },

    mutations: {
        // Define mutations: each states must have mutation
        ADDTASKS( state, payload ){
            // Check if task aleready exist and set unique ID
            let addTask = true;
            let uniqueId = 0;

            // Loop on task list
            for( let item of state.tasks){
                if( item.content === payload.data ){
                    // Set already exist
                    addTask = false;
                }

                // Set unique ID
                uniqueId = item._id + 1
            }

            // Add new task
            if(addTask){
                // Add task with content and _id 
                state.tasks.push({
                    content: payload.data,
                    _id: uniqueId,
                    done: false
                })
            }
        },

        TOGGLESTATE( state, payload ){
            for(let item of state.tasks){
                if(payload.data == item._id){
                    item.done = !item.done
                }
            }
        },

        REMOVE( state, payload ){
            for(let nb = 0; nb < state.tasks.length; nb++){
                if(payload.data == state.tasks[nb]._id){
                    state.tasks.splice(nb, 1)
                }
            }

        },

        SETFILTER( state, payload ){
            state.filter.nb = payload.data
        },

        CLEARCOMPLETE( state){
            for(let nb = state.tasks.length - 1; 0 <= nb; nb--){
                if(true == state.tasks[nb].done){
                    state.tasks.splice(nb, 1)
                }
            }
        }
        
    },

    actions: {
        /* 
        Method to add one task
        */
            addTask(context, data){
                // Commit change
                context.commit(`ADDTASKS`, { data });
            },
        //

        /* 
        Method to change task state
        */
            toggleState(context, data){
                // Commit change
                context.commit(`TOGGLESTATE`, { data });
            },

            remove(context, data){
                // Commit change
                context.commit(`REMOVE`, { data });
            },

            setfilter(context, data){
                context.commit(`SETFILTER`, { data });
            },

            clearcomplete(context){
                context.commit(`CLEARCOMPLETE`);
            }
        //
    //
    }
}