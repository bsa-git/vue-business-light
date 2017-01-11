define([], function () {

    // initial state
    var state = {
        business: {
            img_url: '',
            img_alt: '',
            title: '',
            summary: '',
            text: ''
        },
        subscribe: {
            about_us: '',
            get_in_touch: ''
        },
        widgets: [],
        personal_data: {
            copyright: '',
            designed_with: '',
            designed_with_url: '',
            contact: {},
        },
    };

    var mutations = {

        RECEIVE_PERSONAL_DATA: function (state, personal_data) {
            // Clone the object passed, that there was no link between them
            var clonePersonalData = _.cloneDeep(personal_data);
            state.personal_data.copyright = clonePersonalData.copyright;
            state.personal_data.designed_with = clonePersonalData.designed_with;
            state.personal_data.designed_with_url = clonePersonalData.designed_with_url;
            state.personal_data.contact = clonePersonalData.contact;
        },

        RECEIVE_BUSINESS_DATA: function (state, business) {
            // Clone the object passed, that there was no link between them
            var cloneBusiness = _.cloneDeep(business);
            state.business.img_url = cloneBusiness.img_url;
            state.business.img_alt = cloneBusiness.img_alt;
            state.business.title = cloneBusiness.title;
            state.business.summary = cloneBusiness.summary;
            state.business.text = cloneBusiness.text;
        },

        RECEIVE_SUBSCRIBE_DATA: function (state, subscribe) {
            // Clone the object passed, that there was no link between them
            var cloneSubscribe = _.cloneDeep(subscribe);
            state.subscribe.about_us = cloneSubscribe.about_us;
            state.subscribe.get_in_touch = cloneSubscribe.get_in_touch;
        },

        RECEIVE_WIDGETS_DATA: function (state, widgets) {
            // Clone the object passed, that there was no link between them
            var cloneWidgets = _.cloneDeep(widgets);
            state.widgets = cloneWidgets;
        },

    };

    return {
        state: state,
        mutations: mutations
    };

});

