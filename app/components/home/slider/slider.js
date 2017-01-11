define([
    'vuex',
    'text!app/components/home/slider/slider.html',
], function (Vuex, template) {

    // Create component Slider class
    var Slider = {
        name: 'app-slider',
        template: template,
        mounted: function () {
            $("#osahan-slider").owlCarousel({
                slideSpeed: 300,
                autoPlay: true,
                //navigation: true,
                pagination: true,
                singleItem: true
            });
        },
        created: function () {
            //--- Slider ---//
            this.$store.dispatch('receiveSlider');
        },
        computed: Vuex.mapGetters({
            slider: 'getSlider',
        }),
        data: function () {
            return {
            }
        },
    };
    return Slider;
});