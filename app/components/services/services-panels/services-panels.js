define([
    'vuex',
    'text!app/components/services/services-panels/services-panels.html',
], function (Vuex, template) {

    // Create component ServicesPanels class
    var ServicesPanels = {
        name: 'app-services-panels',
        template: template,
        created: function () {
            //--- Services ---//
            this.$store.dispatch('receiveServicesPanels');
        },
        computed: Vuex.mapGetters({
            services: 'getServices',
        }),
        data: function () {
            return {
            }
        }
    };
    return ServicesPanels;
});