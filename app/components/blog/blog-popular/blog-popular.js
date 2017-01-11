define([
    'vuex',
    'text!app/components/blog/blog-popular/blog-popular.html',
], function (Vuex, template) {

    // Create component BlogPopular class
    var BlogPopular = {
        name: 'app-blog-popular',
        template: template,
        created: function () {
            //--- Blog ---//
                this.$store.dispatch('receiveBlogPopular');
        },
        computed: Vuex.mapGetters({
            blog: 'getBlog',
            //popular_posts: 'getBlogPopular',
        }),
        data: function () {
            return {
            }
        }
    };
    return BlogPopular;
});