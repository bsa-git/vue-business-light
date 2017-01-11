define([
    'vuex',
    'text!app/components/portfolio/portfolio-social/portfolio-social.html',
], function (Vuex, template) {

    // Create component Contact class
    var Contact = {
        name: 'app-share-social',
        template: template,
        created: function () {
            //--- Socials ---//
                this.$store.dispatch('receiveShareSocials');
        },
        computed: Vuex.mapGetters({
            socials: 'getSocials',
        }),
        data: function () {
            return {
            }
        },
    };
    return Contact;
});