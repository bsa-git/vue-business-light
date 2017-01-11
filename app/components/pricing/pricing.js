define([
    // Components
    'app/components/app/breadcrumbs/breadcrumbs',
    'app/components/pricing/pricing-page/pricing-page',
    'text!app/components/pricing/pricing.html'
], function (Breadcrumbs, PricingPage, template) {

    // Create component Pricing class
    var Pricing = {
        name: 'app-pricing',
        template: template,
        components: {
            'app-breadcrumbs': Breadcrumbs,
            'app-pricing-page': PricingPage,
        }
    };
    return Pricing;
});
