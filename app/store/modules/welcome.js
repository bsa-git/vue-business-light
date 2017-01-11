define([], function () {

    // initial state
    var state = {
        items: []
    };

    var mutations = {
        
        RECEIVE_WELCOME: function (state, welcome) {
            // Clone the object passed, that there was no link between them
            var cloneWelcome = _.cloneDeep(welcome);
            state.items = cloneWelcome.items;
        },
    };

    return {
        state: state,
        mutations: mutations
    };

});

