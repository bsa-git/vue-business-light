define([
    'vuex',
    'text!app/components/services/services-tabs/services-tabs.html',
], function (Vuex, template) {

    // Create component ServicesTabs class
    var ServicesTabs = {
        name: 'app-services-tabs',
        template: template,
        created: function () {
            //--- Services ---//
            this.$store.dispatch('receiveServicesTabs');
        },
        computed: Vuex.mapGetters({
            services: 'getServices',
        }),
        data: function () {
            return {
            }
        }
    };
    return ServicesTabs;
});