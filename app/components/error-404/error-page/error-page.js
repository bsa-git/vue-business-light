define([
    'text!app/components/error-404/error-page/error-page.html',
], function (template) {

    // Create component ErrorPage class
    var ErrorPage = {
        name: 'app-error-page',
        template: template,
        data: function () {
            return { 
                errMessage: 'We\'re sorry, but the page you were looking for doesn\'t exist.'
            }
        }
    };
    return ErrorPage;
});