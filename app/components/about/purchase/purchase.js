define([
    'vuex',
    'text!app/components/about/purchase/purchase.html',
], function (Vuex, template) {

    // Create component Purchase class
    var Purchase = {
        name: 'app-purchase',
        template: template,
        created: function () {
            //--- Services ---//
            this.$store.dispatch('receiveServicesPurchase');
        },
        computed: Vuex.mapGetters({
            services: 'getServices',
        }),
        data: function () {
            return {
            }
        }
    };
    return Purchase;
});