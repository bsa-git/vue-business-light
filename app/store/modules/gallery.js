define([], function () {

    // initial state
    var state = {
        title1: '',
        title2: '',
        title3: '',
        instagram: [],
        items: [],
    };

    var mutations = {
        
        RECEIVE_GALLERY: function (state, gallery) {
            // Clone the object passed, that there was no link between them
            var cloneGallery = _.cloneDeep(gallery);
            state.items = cloneGallery.items;
            state.title1 = cloneGallery.title1;
            state.title2 = cloneGallery.title2;
            state.title3 = cloneGallery.title3;
        },

        RECEIVE_INSTAGRAM: function (state, gallery) {
            // Clone the object passed, that there was no link between them
            var cloneGallery = _.cloneDeep(gallery);
            state.instagram = cloneGallery.instagram;
        },

    };

    return {
        state: state,
        mutations: mutations
    };

});

