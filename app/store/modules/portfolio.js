define([], function () {

    // initial state
    var state = {
        url: '',
        pager: {
            total: 1,
            first_url: '',
            last_url: '',
            next_url: '',
            prev_url: '',
        },
        item: {
            details: {
                title: '',
                text: ''
            },
            details2: {
                title: '',
                client: '',
                status: '',
                skills: ''
            },
        },
        items: []
    };

    var mutations = {

        RECEIVE_PORTFOLIO_ITEMS: function (state, portfolio) {
            // Clone the object passed, that there was no link between them
            var clonePortfolio = _.cloneDeep(portfolio);
            state.url = clonePortfolio.url;
            state.pager = clonePortfolio.pager;
            state.items = clonePortfolio.items;
        },

        RECEIVE_PORTFOLIO_ITEM: function (state, portfolio) {
            // Clone the object passed, that there was no link between them
            var clonePortfolio = _.cloneDeep(portfolio);
            state.url = portfolio.url;
            state.item = portfolio.item;
        },
    };

    return {
        state: state,
        mutations: mutations
    };

});

