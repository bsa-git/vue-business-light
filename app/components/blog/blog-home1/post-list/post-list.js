define([
    'vuex',
    'text!app/components/blog/blog-home1/post-list/post-list.html',
], function (Vuex, template) {

    // Create component PostList class
    var PostList = {
        name: 'app-post-list',
        template: template,
        created: function () {
            //--- Blog ---//
                this.$store.dispatch('receiveBlogPosts', 1);
        },
        computed: Vuex.mapGetters({
            blog: 'getBlog',
        }),
        data: function () {
            return {
            }
        }
    };
    return PostList;
});