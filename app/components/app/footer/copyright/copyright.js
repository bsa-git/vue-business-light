define([
    'vuex',
    'text!app/components/app/footer/copyright/copyright.html',
], function (Vuex, template) {

    // Create component Copyright class
    var Copyright = {
        name: 'app-copyright',
        template: template,
        created: function () {
            //--- Personal data ---//
            this.$store.dispatch('receivePersonalData');
        },
        computed: Vuex.mapGetters({
            about: 'getAbout',
        }),
        data: function () {
            return {
                footer_nav: [
                    { url: '/#/about', title: 'About Us' },
                    { url: '#', title: 'Sitemap' },
                    { url: '#', title: 'Privacy Policy' },
                    { url: '/#/contact', title: 'Contact' },
                ]
            }
        },
    };
    return Copyright;
});