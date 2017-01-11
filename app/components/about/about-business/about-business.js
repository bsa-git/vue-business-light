define([
    'vuex',
    'text!app/components/about/about-business/about-business.html',
], function (Vuex, template) {

    // Create component AboutBusiness class
    var AboutBusiness = {
        name: 'app-about-business',
        template: template,
        created: function () {
            //--- Business Data ---//
            this.$store.dispatch('receiveBusinessData');
        },
        computed: Vuex.mapGetters({
            about: 'getAbout',
        }),
        data: function () {
            return {
            }
        }
    };
    return AboutBusiness;
});