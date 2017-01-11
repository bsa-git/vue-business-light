define([
    'text!app/components/app/navigation/nav-links/nav-links.html',
], function (template) {

    // Create component NavLinks class
    var NavLinks = {
        name: 'app-navlinks',
        template: template,
        data: function () {
            return { 
            }
        }
    };
    return NavLinks;
});