define([], function () {

    // initial state
    var state = {
        items: []
    };

    var mutations = {
        
        RECEIVE_FAQ: function (state, faq) {
            // Clone the object passed, that there was no link between them
            var cloneFaq = _.cloneDeep(faq);
            state.items = cloneFaq.items;
        },
    };

    return {
        state: state,
        mutations: mutations
    };

});

