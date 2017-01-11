define([
    'text!app/components/full-width/full-width-page/full-width-page.html',
], function (template) {

    // Create component FullWidthPage class
    var FullWidthPage = {
        name: 'app-full-width-page',
        template: template,
        data: function () {
            return { 
            }
        }
    };
    return FullWidthPage;
});