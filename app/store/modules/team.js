define([], function () {

    // initial state
    var state = {
        info: {
            title: '',
            description: ''
        },
        summary: [],
        members: []
    };

    var mutations = {

        RECEIVE_TEAM_INFO: function (state, info) {
            // Clone the object passed, that there was no link between them
            var cloneInfo = _.cloneDeep(info);
            state.info.title = cloneInfo.title;
            state.info.description = cloneInfo.description;
        },

        RECEIVE_TEAM_MEMBERS: function (state, members) {
            // Clone the object passed, that there was no link between them
            var cloneMembers = _.cloneDeep(members);
            state.members = cloneMembers;
        },

        RECEIVE_TEAM_SUMMARY: function (state, summary) {
            // Clone the object passed, that there was no link between them
            var cloneSummary = _.cloneDeep(summary);
            state.summary = cloneSummary;
        },

    };

    return {
        state: state,
        mutations: mutations
    };

});

