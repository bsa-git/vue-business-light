define([
    'vuex',
    'text!app/components/app/footer/twitter/twitter.html',
], function (Vuex, template) {

    // Create component Twitter class
    var Twitter = {
        name: 'app-twitter',
        template: template,
        created: function () {
            //--- Twitter ---//
            this.$store.dispatch('receiveTwitter');
        },
        computed: Vuex.mapGetters({
            socials: 'getSocials',
        }),
        data: function () {
            return {
            }
        },
    };
    return Twitter;
});