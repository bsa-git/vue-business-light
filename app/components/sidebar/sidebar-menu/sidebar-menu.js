define([
    'text!app/components/sidebar/sidebar-menu/sidebar-menu.html',
], function (template) {

    // Create component SidebarMenu class
    var SidebarMenu = {
        name: 'app-sidebar-menu',
        template: template,
        data: function () {
            return { 
            }
        }
    };
    return SidebarMenu;
});