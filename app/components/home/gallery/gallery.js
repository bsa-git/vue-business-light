define([
    'vuex',
    'text!app/components/home/gallery/gallery.html',
], function (Vuex, template) {

    // Create component Gallery class
    var Gallery = {
        name: 'app-gallery',
        template: template,
        created: function () {
            //--- Gallery ---//
            this.$store.dispatch('receiveGallery');
        },
        computed: Vuex.mapGetters({
            gallery: 'getGallery',
        }),
        data: function () {
            return {
            }
        }
    };
    return Gallery;
});