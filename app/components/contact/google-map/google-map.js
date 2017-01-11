define([
    'text!app/components/contact/google-map/google-map.html',
], function (template) {

    // Create component GoogleMap class
    var GoogleMap = {
        name: 'app-google-map',
        template: template,
        data: function () {
            return { 
            }
        }
    };
    return GoogleMap;
});