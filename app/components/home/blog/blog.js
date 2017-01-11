define([
    'vuex',
    'text!app/components/home/blog/blog.html',
], function (Vuex, template) {

    // Create component Blog class
    var Blog = {
        name: 'app-blog',
        template: template,
        computed: Vuex.mapGetters({
            blog: 'getBlog',
            //blog_posts: 'getBlogPosts'
        }),
        created: function () {
            //--- Blog ---//
            this.$store.dispatch('receiveBlogPosts', 1);
        },
        data: function () {
            return {
            }
        }
    };
    return Blog;
});