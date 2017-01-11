define([
    'vuex',
    'text!app/components/blog/blog-categories/blog-categories.html',
], function (Vuex, template) {

    // Create component BlogCategories class
    var ErrorPage = {
        name: 'app-blog-categories',
        template: template,
        created: function () {
            //--- Blog ---//
            this.$store.dispatch('receiveBlogCategories');
        },
        computed: Vuex.mapGetters({
            blog: 'getBlog',
        }),
        data: function () {
            return {
            }
        }
    };
    return ErrorPage;
});