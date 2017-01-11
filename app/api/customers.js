define(['app/config/env/index'], function (config) {

    // Get env
    var env = config.env;

    // initial state
    var _customers = [
        {
            url: '#',
            img: 'app/images/c1.png'
        },
        {
            url: '#',
            img: 'app/images/c2.png'
        },
        {
            url: '#',
            img: 'app/images/c3.png'
        },
        {
            url: '#',
            img: 'app/images/c4.png'
        },
        {
            url: '#',
            img: 'app/images/c5.png'
        },
        {
            url: '#',
            img: 'app/images/c6.png'
        },
        {
            url: '#',
            img: 'app/images/c7.png'
        },
        {
            url: '#',
            img: 'app/images/c8.png'
        }
    ];

    var getCustomers = function (cb) {
        if (env === 'testing') {
            cb(_customers);
        } else {
            cb(_customers);
        }

    };

    return {
        getCustomers: getCustomers
    }

});

