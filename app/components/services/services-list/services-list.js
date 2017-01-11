define([
    'vuex',
    'text!app/components/services/services-list/services-list.html',
], function (Vuex, template) {

    // Create component ServicesList class
    var ServicesList = {
        name: 'app-services-list',
        template: template,
        created: function () {
            //--- Services ---//
                this.$store.dispatch('receiveServicesList');
        },
        computed: Vuex.mapGetters({
            services: 'getServices',
        }),
        data: function () {
            return {
            }
        }
    };
    return ServicesList;
});