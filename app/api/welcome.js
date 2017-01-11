define(['app/config/env/index'], function (config) {

    // Get env
    var env = config.env;

    // initial state
    var _welcome = {
        items: [
            {
                url: 'http://vuejs.org/',
                icon: 'fa-globe',
                class: 'primary',
                head: 'Vue',
                body: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries.',
            },
            {
                url: 'http://vuex.vuejs.org/en/',
                icon: 'fa-magic',
                class: 'warning',
                head: 'Vuex',
                body: 'Vuex is a state management pattern + library for <a https="http://vuejs.org/">Vue.js</a> applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue\'s official <a href="https://github.com/vuejs/vue-devtools">devtools extension</a> to provide advanced features.',
            },
            {
                url: 'http://router.vuejs.org/en/',
                icon: 'fa-rocket',
                class: 'success',
                head: 'Vue-Router',
                body: 'Creating a Single-page Application with Vue.js + vue-router is dead simple. With Vue.js, we are already composing our application with components. When adding vue-router to the mix, all we need to do is map our components to the routes and let vue-router know where to render them. ',
            },
        ]
    };

    var getWelcome = function (cb) {
        if (env === 'testing') {
            cb(_welcome);
        } else {
            cb(_welcome);
        }
    };

    return {
        getWelcome: getWelcome,
    }

});

