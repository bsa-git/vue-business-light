define([
    'vuex',
    'text!app/components/services/services-accordion/services-accordion.html',
], function (Vuex, template) {

    // Create component ServicesAccordion class
    var ServicesAccordion = {
        name: 'app-services-accordion',
        template: template,
        created: function () {
            //--- Services ---//
            this.$store.dispatch('receiveServicesAccordion');
        },
        computed: Vuex.mapGetters({
            services: 'getServices',
        }),
        data: function () {
            return {
            }
        }
    };
    return ServicesAccordion;
});