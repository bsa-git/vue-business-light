define([
    // Vue
    'vue',
    // Vuex
    'vuex',
    // Config
    'app/config/env/index',
    // Actions
    'app/store/actions',
    // Getters
    'app/store/getters',
    // Modules
    'app/store/modules/about',
    'app/store/modules/slider',
    'app/store/modules/blog',
    'app/store/modules/customers',
    'app/store/modules/gallery',
    'app/store/modules/services',
    'app/store/modules/team',
    'app/store/modules/testimonials',
    'app/store/modules/welcome',
    'app/store/modules/socials',
    'app/store/modules/faq',
    'app/store/modules/pricing',
    'app/store/modules/portfolio',
], function (Vue, Vuex, config, actions, getters, about, slider, blog, customers, gallery, services, team, testimonials, welcome, socials, faq, pricing, portfolio) {

    Vue.use(Vuex);

    // A Vuex instance is created by combining the modules, getters, actions
    var store = new Vuex.Store({
        strict: config.env !== 'production',
        actions: actions,
        getters: getters,
        modules: {
            about: about,
            slider: slider,
            blog: blog,
            customers: customers,
            gallery: gallery,
            services: services,
            team: team,
            testimonials: testimonials,
            welcome: welcome,
            socials: socials,
            faq: faq,
            pricing: pricing,
            portfolio: portfolio,
        }
    });

    return store;
});


