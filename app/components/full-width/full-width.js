define([
    // Components
    'app/components/app/breadcrumbs/breadcrumbs',
    'app/components/full-width/full-width-page/full-width-page',
    'text!app/components/full-width/full-width.html'
], function (Breadcrumbs, FullWidthPage, template) {

    // Create component FullWidth class
    var FullWidth = {
        name: 'app-full-width',
        template: template,
        components: {
            'app-breadcrumbs': Breadcrumbs,
            'app-full-width-page': FullWidthPage,
        }
    };
    return FullWidth;
});
