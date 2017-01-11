define([], function () {

    // initial state
    var state = {
        items: []
    };

    var mutations = {
        
        RECEIVE_SLIDER: function (state, slider) {
            // Clone the object passed, that there was no link between them
            var cloneSlider = _.cloneDeep(slider);
            state.items = cloneSlider.items;
        },
    };

    return {
        state: state,
        mutations: mutations
    };

});

