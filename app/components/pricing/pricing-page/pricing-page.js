define([
    'vuex',
    'text!app/components/pricing/pricing-page/pricing-page.html',
], function (Vuex, template) {

    // Create component PricingPage class
    var PricingPage = {
        name: 'app-pricing-page',
        template: template,
        created: function () {
            //--- Pricing ---//
                this.$store.dispatch('receivePricing');
        },
        computed: Vuex.mapGetters({
            pricing: 'getPricing',
        }),
        data: function () {
            return {
            }
        }
    };
    return PricingPage;
});