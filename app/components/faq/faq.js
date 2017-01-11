define([
    // Components
    'app/components/app/breadcrumbs/breadcrumbs',
    'app/components/faq/faq-accordion/faq-accordion',
    'app/components/blog/blog-popular/blog-popular',
    'text!app/components/faq/faq.html'
], function (Breadcrumbs, FaqAccordion, SidebarWidgets, template) {

    // Create component Faq class
    var Faq = {
        name: 'app-faq',
        template: template,
        components: {
            'app-breadcrumbs': Breadcrumbs,
            'app-faq-accordion': FaqAccordion,
            'app-sidebar-widgets': SidebarWidgets,
        }
    };
    return Faq;
});
