define([
    'vuex',
    'text!app/components/home/testimonials/testimonials.html',
], function (Vuex, template) {

    // Create component Testimonials class
    var Testimonials = {
        name: 'app-testimonials',
        template: template,
        mounted: function () {
            $("#testimonials").owlCarousel({
                slideSpeed: 300,
                autoPlay: true,
                navigation: false,
                pagination: true,
                singleItem: true
            });
        },
        created: function () {
            //--- Testimonials ---//
            this.$store.dispatch('receiveTestimonials');
        },
        computed: Vuex.mapGetters({
            testimonials: 'getTestimonials',
        }),
        data: function () {
            return {
            }
        },

    };
    return Testimonials;
});