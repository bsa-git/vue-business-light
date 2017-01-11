define([
    // Components
    'app/components/app/breadcrumbs/breadcrumbs',
    'text!app/components/portfolio/portfolio.html'
], function (Breadcrumbs, template) {

    // Create component Portfolio class
    var Portfolio = {
        name: 'app-portfolio',
        template: template,
        components: {
            'app-breadcrumbs': Breadcrumbs,
        }
    };
    return Portfolio;
});
