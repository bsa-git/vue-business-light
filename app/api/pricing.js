define(['app/config/env/index'], function (config) {

    // Get env
    var env = config.env;

    // initial state
    var _pricing = {
        items: [
            {
                panel_class: 'panel-default basic-plan',
                btn_class: 'btn-default',
                title: 'Basic',
                price_value: '$49',
                user: 1,
                projects: 5,
                email_accounts: 'Unlimited',
                disk_space: '10GB',
                monthly_bandwidth: '100GB',
            },
            {
                panel_class: 'panel-primary advanced-plan',
                btn_class: 'btn-primary btn-lg',
                title: 'Advanced',
                price_value: '$99',
                user: 10,
                projects: 500,
                email_accounts: 'Unlimited',
                disk_space: '1000GB',
                monthly_bandwidth: '10000GB',
            },
            {
                panel_class: 'panel-default basic-plan',
                btn_class: 'btn-default',
                title: 'Professional',
                price_value: '$199',
                user: 'Unlimted',
                projects: 'Unlimted',
                email_accounts: 'Unlimited',
                disk_space: '10000GB',
                monthly_bandwidth: 'Unlimited',
            },
        ]
    };

    var getPricing = function (cb) {
        if (env === 'testing') {
            cb(_pricing);
        } else {
            cb(_pricing);
        }
    };

    return {
        getPricing: getPricing,
    }

});

