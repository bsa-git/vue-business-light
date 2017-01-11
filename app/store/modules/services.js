define([], function () {

    // initial state
    var state = {
        purchase: {
            url: '',
            business: {
                title: '',
                summary: ''
            }
        },
        home: {
            title1: '',
            title2: '',
            title3: '',
            items: []
        },
        accordion: {
            items: []
        },
        list: {
            items_1: [],
            items_2: [],
            items_3: []
        },
        panels: {
            items: []
        },
        tabs: {
            items: []
        }
    };

    var mutations = {

        RECEIVE_SERVICES_HOME: function (state, services) {
            // Clone the object passed, that there was no link between them
            var cloneServices = _.cloneDeep(services);
            state.home.title1 = cloneServices.title1;
            state.home.title2 = cloneServices.title2;
            state.home.title3 = cloneServices.title3;
            state.home.items = cloneServices.items;
        },

        RECEIVE_SERVICES_ACCORDION: function (state, services) {
            // Clone the object passed, that there was no link between them
            var cloneServices = _.cloneDeep(services);
            state.accordion.items = cloneServices.items;
        },

        RECEIVE_SERVICES_LIST: function (state, services) {
            // Clone the object passed, that there was no link between them
            var cloneServices = _.cloneDeep(services);
            state.list.items_1 = cloneServices.items_1;
            state.list.items_2 = cloneServices.items_2;
            state.list.items_3 = cloneServices.items_3;
        },

        RECEIVE_SERVICES_PANELS: function (state, services) {
            // Clone the object passed, that there was no link between them
            var cloneServices = _.cloneDeep(services);
            state.panels.items = cloneServices.items;
        },

        RECEIVE_SERVICES_TABS: function (state, services) {
            // Clone the object passed, that there was no link between them
            var cloneServices = _.cloneDeep(services);
            state.tabs.items = cloneServices.items;
        },

        RECEIVE_SERVICES_PURCHASE: function (state, services) {
            // Clone the object passed, that there was no link between them
            var cloneServices = _.cloneDeep(services);
            state.purchase.url = cloneServices.url;
            state.purchase.business.title = cloneServices.business.title;
            state.purchase.business.summary = cloneServices.business.summary;
        },

    };

    return {
        state: state,
        mutations: mutations
    };

});

