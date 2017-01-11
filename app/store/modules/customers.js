define([], function () {

    // initial state
    var state = {
        items: [],
    };

    var mutations = {
        
        RECEIVE_CUSTOMERS: function (state, customers) {
            // Clone the object passed, that there was no link between them
            var cloneCustomers = _.cloneDeep(customers);
            state.items = cloneCustomers;
        },

    };

    return {
        state: state,
        mutations: mutations
    };

});

