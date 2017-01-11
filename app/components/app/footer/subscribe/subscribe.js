define([
    'vuex',
    'text!app/components/app/footer/subscribe/subscribe.html',
], function (Vuex, template) {

    // Create component Subscribe class
    var Subscribe = {
        name: 'app-subscribe',
        template: template,
        created: function () {
            //--- About Subscribe Data ---//
            this.$store.dispatch('receiveSubscribeData');
        },
        computed: Vuex.mapGetters({
            about: 'getAbout',
        }),
        data: function () {
            return {
            }
        }
    };
    return Subscribe;
});