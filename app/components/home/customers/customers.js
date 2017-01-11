define([
    'vuex',
    'text!app/components/home/customers/customers.html',
], function (Vuex, template) {

    // Create component Customers class
    var Customers = {
        name: 'app-customers',
        template: template,
        mounted: function () {
            if ($("#customers").length > 0) {
                $("#customers").owlCarousel({
                    items: 6,
                    lazyLoad: true,
                    pagination: true,
                    autoPlay: 2000,
                    stopOnHover: true
                });
            }
        },
        created: function () {
            //--- Customers ---//
            this.$store.dispatch('receiveCustomers');
        },
        computed: Vuex.mapGetters({
            customers: 'getCustomers',
        }),
        data: function () {
            return {
            }
        },
    };
    return Customers;
});