define([
    // Components
    'app/components/app/breadcrumbs/breadcrumbs',
    'app/components/services/services-accordion/services-accordion',
    'app/components/services/services-panels/services-panels',
    'app/components/services/services-tabs/services-tabs',
    'app/components/services/services-list/services-list',
    'app/components/home/customers/customers',
    'text!app/components/services/services.html'
], function (Breadcrumbs, ServicesAccordion, ServicesPanels, ServicesTabs, ServicesList, Customers, template) {

    // Create component Services class
    var Services = {
        name: 'app-services',
        template: template,
        components: {
            'app-breadcrumbs': Breadcrumbs,
            'app-services-accordion': ServicesAccordion,
            'app-services-panels': ServicesPanels,
            'app-services-tabs': ServicesTabs,
            'app-services-list': ServicesList,
            'app-customers': Customers,
        },
    };
    return Services;
});
