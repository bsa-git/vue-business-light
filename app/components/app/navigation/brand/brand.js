define([
    'text!app/components/app/navigation/brand/brand.html',
], function (template) {

    // Create component Brand class
    var Brand = {
        name: 'app-brand',
        template: template,
        data: function () {
            return { 
                logo_path: 'app/images/logo.png'
            }
        }
    };
    return Brand;
});