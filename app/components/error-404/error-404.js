define([
    // Components
    'app/components/app/breadcrumbs/breadcrumbs',
    'app/components/error-404/error-page/error-page',
    'text!app/components/error-404/error-404.html'
], function (Breadcrumbs, ErrorPage, template) {

    // Create component Error404 class
    var Error404 = {
        name: 'app-error-404',
        template: template,
        components: {
            'app-breadcrumbs': Breadcrumbs,
            'app-error-page': ErrorPage,
        }
    };
    return Error404;
});
