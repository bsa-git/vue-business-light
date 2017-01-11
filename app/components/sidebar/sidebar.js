define([
    // Components
    'app/components/app/breadcrumbs/breadcrumbs',
    'app/components/sidebar/sidebar-menu/sidebar-menu',
    'text!app/components/sidebar/sidebar.html'
], function (Breadcrumbs, SidebarMenu,  template) {// SidebarHome,

    // Create component Sidebar class
    var Sidebar = {
        name: 'app-sidebar',
        template: template,
        components: {
            'app-breadcrumbs': Breadcrumbs,
            'app-sidebar-menu': SidebarMenu,
        }
    };
    return Sidebar;
});
