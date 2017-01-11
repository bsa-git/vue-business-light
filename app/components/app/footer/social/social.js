define([
    'vuex',
    'text!app/components/app/footer/social/social.html',
], function (Vuex, template) {

    // Create component Contact class
    var Contact = {
        name: 'app-my-social',
        template: template,
        created: function () {
            //--- Socials ---//
            this.$store.dispatch('receiveMySocials');
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