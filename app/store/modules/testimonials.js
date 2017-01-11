define([], function () {

    // initial state
    var state = {
        title1: '',
        title2: '',
        title3: '',
        items: []
    };

    var mutations = {

        RECEIVE_TESTIMONIALS: function (state, testimonials) {
            // Clone the object passed, that there was no link between them
            var cloneTestimonials = _.cloneDeep(testimonials);
            state.items = cloneTestimonials.items;
            state.title1 = cloneTestimonials.title1;
            state.title2 = cloneTestimonials.title2;
            state.title3 = cloneTestimonials.title3;
        },

    };

    return {
        state: state,
        mutations: mutations
    };

});

