define([
    'vuex',
    'text!app/components/home/welcome/welcome.html',
], function (Vuex, template) {

    // Create component Welcome class
    var Welcome = {
        name: 'app-welcome',
        template: template,
        created: function () {
            //--- Welcome ---//
            this.$store.dispatch('receiveWelcome');
        },
        computed: Vuex.mapGetters({
            welcome: 'getWelcome',
        }),
        data: function () {
            return {
            }
        }
    };
    return Welcome;
});