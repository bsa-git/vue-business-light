define([
    'vuex',
    'text!app/components/app/footer/instagram/instagram.html',
], function (Vuex, template) {

    // Create component Instagram class
    var Instagram = {
        name: 'app-instagram',
        template: template,
        created: function () {
            //--- Gallery instagram ---//
            this.$store.dispatch('receiveInstagram');
        },
        computed: Vuex.mapGetters({
            gallery: 'getGallery',
        }),
        data: function () {
            return {
            }
        }
    };
    return Instagram;
});