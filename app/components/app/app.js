define([
    // Store
    'app/store/index',
    // Mutation types
    'app/store/mutation-types',
    // Vue.js
    'vue',
    // Components
    'app/components/app/navigation/navigation',
    'app/components/app/footer/footer',
    // Filters
    'app/filters/string',
], function (store, types, Vue, Navigation, Footer) {

    // Create component App class
    var App = Vue.extend({
        store: store,
        components: {
            'app-navigation': Navigation,
            'app-footer': Footer,
        },
        mounted: function () {
            // App is loaded
            console.log('App is loaded.');
        },
    })
    return App;
});
