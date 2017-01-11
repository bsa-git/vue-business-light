define([
    'vuex',
    'text!app/components/home/service/service.html',
], function (Vuex, template) {

    // Create component Service class
    var Service = {
        name: 'app-service',
        template: template,
        created: function () {
            //--- Services ---//
                this.$store.dispatch('receiveServicesHome');
        },
        computed: Vuex.mapGetters({
            services: 'getServices',
        }),
        data: function () {
            return {
            }
        }
    };
    return Service;
});