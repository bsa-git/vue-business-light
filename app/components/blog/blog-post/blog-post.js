define([
    'app/components/blog/blog-post/post-content/post-content',
    'app/components/blog/blog-search/blog-search',
    'app/components/blog/blog-categories/blog-categories',
    'app/components/blog/blog-popular/blog-popular',
    'app/components/blog/blog-side-widget/blog-side-widget',
    'text!app/components/blog/blog-post/blog-post.html',
], function (PostContent, BlogSearch, BlogCategories, BlogPopular, BlogSideWidget, template) {

    // Create component BlogPost class
    var BlogPost = {
        name: 'app-blog-post',
        template: template,
        components: {
            'app-post-content': PostContent,
            'app-blog-search': BlogSearch,
            'app-blog-categories': BlogCategories,
            'app-blog-popular': BlogPopular,
            'app-blog-side-widget': BlogSideWidget,
        },
        created: function () {
            //--- Blog ---//
            this.$store.dispatch('receiveBlogPost', 1);
        },
        mounted: function () {
            // Set focus
            $('#blog-search').focus();
        },
    };
    return BlogPost;
});