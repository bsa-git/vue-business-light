define(['app/config/env/index'], function (config) {

    // Get env
    var env = config.env;

    // initial state
    var _services = {
        purchase: {
            url: '#',
            business: {
                title: '<strong>Osahan</strong> is the best theme to create an <strong>awesome website!</strong>',
                summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.'
            }
        },
        home: {
            title1: 'serivces',
            title2: 'We Provide',
            title3: 'Phasellus eleifend ex enim, non viverra justo pretium vel.',
            items: [
                {
                    icon: 'fa-leaf',
                    duration: '1s',
                    title: 'High Quality Theme',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur',
                },
                {
                    icon: 'fa-desktop',
                    duration: '2s',
                    title: 'Full Responsive',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur',
                },
                {
                    icon: 'fa-eye',
                    duration: '3s',
                    title: 'Retina Display Ready',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur',
                },
                {
                    icon: 'fa-code',
                    duration: '4s',
                    title: 'Clean Modern Code',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur',
                },
                {
                    icon: 'fa-rocket',
                    duration: '5s',
                    title: 'Fast &amp; Light Theme',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur',
                },
                {
                    icon: 'fa-css3',
                    duration: '6s',
                    title: 'Css3 Transitions',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur',
                },
                {
                    icon: 'fa-download',
                    duration: '7s',
                    title: 'Free Updates',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur',
                },
                {
                    icon: 'fa-umbrella',
                    duration: '8s',
                    title: 'Help &amp; Support',
                    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat Lorem pariatur',
                },
            ]
        },
        accordion: {
            items: [
                {
                    id: 'collapseOne',
                    title: 'Lorem ipsum dolor sit adipiscing elit?',
                    text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on'
                },
                {
                    id: 'collapseTwo',
                    title: 'Curabitur eget leo at velit imperdiet?',
                    text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on'
                },
                {
                    id: 'collapseThree',
                    title: 'Aenean consequat lorem ut felis ullamcorper?',
                    text: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on'
                }
            ]
        },
        list: {
            items_1: [
                {
                    title: 'Service One',
                    icon: 'fa-tree',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                },
                {
                    title: 'Service Two',
                    icon: 'fa-car',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                },
                {
                    title: 'Service Three',
                    icon: 'fa-support',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                }
            ],
            items_2: [
                {
                    title: 'Service Four',
                    icon: 'fa-database',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                },
                {
                    title: 'Service Five',
                    icon: 'fa-bomb',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                },
                {
                    title: 'Service Six',
                    icon: 'fa-bank',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                }
            ],
            items_3: [
                {
                    title: 'Service Seven',
                    icon: 'fa-paper-plane',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                },
                {
                    title: 'Service Eight',
                    icon: 'fa-space-shuttle',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                },
                {
                    title: 'Service Nine',
                    icon: 'fa-recycle',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                }
            ]
        },
        panels: {
            items: [
                {
                    title: 'Service One',
                    icon: 'fa-tree',
                    url: '#',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                },
                {
                    title: 'Service Two',
                    icon: 'fa-car',
                    url: '#',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                },
                {
                    title: 'Service Three',
                    icon: 'fa-support',
                    url: '#',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                },
                {
                    title: 'Service Four',
                    icon: 'fa-database',
                    url: '#',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo itaque ipsum sit harum.'
                }
            ]
        },
        tabs: {
            items: [
                {
                    id: 'service-one',
                    title: 'Service One',
                    icon: 'fa-tree',
                    text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>\
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>'
                },
                {
                    id: 'service-two',
                    title: 'Service Two',
                    icon: 'fa-car',
                    text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>\
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>'
                },
                {
                    id: 'service-three',
                    title: 'Service Three',
                    icon: 'fa-support',
                    text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>\
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>'
                },
                {
                    id: 'service-four',
                    title: 'Service Four',
                    icon: 'fa-database',
                    text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>\
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>'
                },
                {
                    id: 'service-five',
                    title: 'Service Five',
                    icon: 'fa-bank',
                    text: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>\
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
                         Quae repudiandae fugiat illo cupiditate excepturi esse officiis consectetur, \
                         laudantium qui voluptatem. Ad necessitatibus velit, accusantium expedita debitis \
                         impedit rerum totam id. Lorem ipsum dolor sitamet,consectetur adipisicing elit. \
                         Natus quibusdam recusandae illum, nesciunt, architecto, saepe facere, voluptas eum \
                         incidunt dolores magni itaque autem neque velit in. At quia quaerat asperiores.</p>'
                }
            ]
        }

    };

    var getServicesHome = function (cb) {
        if (env === 'testing') {
            var services = _.pick(_services, ['home']);
            cb(services.home);
        } else {
            var services = _.pick(_services, ['home']);
            cb(services.home);
        }
    };

    var getServicesAccordion = function (cb) {
        if (env === 'testing') {
            var services = _.pick(_services, ['accordion']);
            cb(services.accordion);
        } else {
            var services = _.pick(_services, ['accordion']);
            cb(services.accordion);
        }
    };

    var getServicesList = function (cb) {
        if (env === 'testing') {
            var services = _.pick(_services, ['list']);
            cb(services.list);
        } else {
            var services = _.pick(_services, ['list']);
            cb(services.list);
        }
    };

    var getServicesPanels = function (cb) {
        if (env === 'testing') {
            var services = _.pick(_services, ['panels']);
            cb(services.panels);
        } else {
            var services = _.pick(_services, ['panels']);
            cb(services.panels);
        }
    };

    var getServicesTabs = function (cb) {
        if (env === 'testing') {
            var services = _.pick(_services, ['tabs']);
            cb(services.tabs);
        } else {
            var services = _.pick(_services, ['tabs']);
            cb(services.tabs);
        }
    };

    var getServicesPurchase = function (cb) {
        if (env === 'testing') {
            var services = _.pick(_services, ['purchase']);
            cb(services.purchase);
        } else {
            var services = _.pick(_services, ['purchase']);
            cb(services.purchase);
        }
    };

    return {
        getServicesHome: getServicesHome,
        getServicesAccordion: getServicesAccordion,
        getServicesList: getServicesList,
        getServicesPanels: getServicesPanels,
        getServicesTabs: getServicesTabs,
        getServicesPurchase: getServicesPurchase,
    }

});

