define([
    // Components
    'app/components/app/navigation/brand/brand',
    'app/components/app/navigation/nav-links/nav-links',
    'text!app/components/app/navigation/navigation.html',
], function (Brand, NavLinks, template) {

    // Create component Navigation class
    var Navigation = {
        name: 'app-navigation',
        template: template,
        components: {
            'app-brand': Brand,
            'app-navlinks': NavLinks,
        },
    };
    return Navigation;
});