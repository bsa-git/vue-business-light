define([
    'vuex',
    'text!app/components/blog/blog-side-widget/blog-side-widget.html',
], function (Vuex, template) {

    // Create component BlogSideWidget class
    var BlogSideWidget = {
        name: 'app-blog-side-widget',
        template: template,
        created: function () {
            //--- About ---//
            this.$store.dispatch('receiveWidgetsData');
        },
        computed: Vuex.mapGetters({
            about: 'getAbout',
        }),
        data: function () {
            return {
            }
        }
    };
    return BlogSideWidget;
});