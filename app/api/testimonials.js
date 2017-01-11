define(['app/config/env/index'], function (config) {

    // Get env
    var env = config.env;

    // initial state
    var _testimonials = {
        title1: 'Testimonials',
        title2: 'Lorem ipsum',
        title3: 'In maximus auctor fringilla.',
        items: [
            {
                author_name: 'John Doe',
                author_position: 'Customer',
                author_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
            },
            {
                author_name: 'John Doe',
                author_position: 'Customer',
                author_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
            },
            {
                author_name: 'John Doe',
                author_position: 'Customer',
                author_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
            },
        ]
    };

    var getTestimonials = function (cb) {
        if (env === 'testing') {
            cb(_testimonials);
        } else {
            cb(_testimonials);
        }

    };

    return {
        getTestimonials: getTestimonials
    }

});

