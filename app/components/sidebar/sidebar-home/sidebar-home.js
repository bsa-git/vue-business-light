define([
    'text!app/components/sidebar/sidebar-home/sidebar-home.html',
], function (template) {

    // Create component SidebarHome class
    var SidebarHome = {
        name: 'app-sidebar-home',
        template: template,
        data: function () {
            return { 
            }
        }
    };
    return SidebarHome;
});