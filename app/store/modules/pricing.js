define([], function () {

    // initial state
    var state = {
        items: []
    };

    var mutations = {
        
        RECEIVE_PRICING: function (state, pricing) {
            // Clone the object passed, that there was no link between them
            var clonePricing = _.cloneDeep(pricing);
            state.items = clonePricing.items;
        },
    };

    return {
        state: state,
        mutations: mutations
    };

});

