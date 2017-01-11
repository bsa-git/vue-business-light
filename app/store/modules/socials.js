define([], function () {

    // initial state
    var state = {
        my: {},
        share: {},
        twitter: {
            url: '',
            tag: '',
            msgs: []
        }
    };

    var mutations = {

        RECEIVE_MY_SOCIALS: function (state, my_socials) {
            // Clone the object passed, that there was no link between them
            var cloneMySocials = _.cloneDeep(my_socials);
            state.my = cloneMySocials;
        },

        RECEIVE_SHARE_SOCIALS: function (state, share_socials) {
            // Clone the object passed, that there was no link between them
            var cloneShareSocials = _.cloneDeep(share_socials);
            state.share = cloneShareSocials;
        },

        RECEIVE_TWITTER: function (state, twitter) {
            // Clone the object passed, that there was no link between them
            var cloneTwitter = _.cloneDeep(twitter);
            state.twitter.url = cloneTwitter.url;
            state.twitter.tag = cloneTwitter.tag;
            state.twitter.msgs = cloneTwitter.msgs;
        },
    };

    return {
        state: state,
        mutations: mutations
    };

});

