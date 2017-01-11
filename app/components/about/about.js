define([
    // Components
    'app/components/app/breadcrumbs/breadcrumbs',
    'app/components/about/about-business/about-business',
    'app/components/home/team/team',
    'app/components/about/purchase/purchase',
    'app/components/home/customers/customers',
    'text!app/components/about/about.html'
], function (Breadcrumbs, AboutBusiness, Team, Purchase, Customers, template) {

    // Create component About class
    var About = {
        name: 'app-about',
        template: template,
        components: {
            'app-breadcrumbs': Breadcrumbs,
            'app-about-business': AboutBusiness,
            'app-team': Team,
            'app-purchase': Purchase,
            'app-customers': Customers,
        },
        created: function () {
            //--- Team ---//
            this.$store.dispatch('receiveTeamInfo');
            this.$store.dispatch('receiveTeamMembers');
            this.$store.dispatch('receiveTeamSummary');
            //--- Customers ---//
            this.$store.dispatch('receiveCustomers');
        },
    };
    return About;
});
