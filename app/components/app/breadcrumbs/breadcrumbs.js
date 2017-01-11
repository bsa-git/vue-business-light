define([
    'text!app/components/app/breadcrumbs/breadcrumbs.html',
], function (template) {

    // Create component Breadcrumbs class
    var Breadcrumbs = {
        name: 'app-breadcrumbs',
        template: template,
        methods: {
            isSubMenu: function (submenu) {
                return ! _.isUndefined(submenu);
            }
        },
        data: function () {
            return { 
            }
        }
    };
    return Breadcrumbs;
});