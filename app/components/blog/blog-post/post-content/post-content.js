define([
    'vuex',
    'text!app/components/blog/blog-post/post-content/post-content.html',
], function (Vuex, template) {

    // Create component PostContent class
    var PostContent = {
        name: 'app-post-content',
        template: template,
        computed: Vuex.mapGetters({
            blog: 'getBlog',
            //post: 'getBlogPost',
        }),
        data: function () {
            return {
            }
        }
    };
    return PostContent;
});