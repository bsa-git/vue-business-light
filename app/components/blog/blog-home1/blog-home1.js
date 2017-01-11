define([
    'app/components/blog/blog-home1/post-list/post-list',
    'app/components/blog/blog-pager/blog-pager',
    'app/components/blog/blog-search/blog-search',
    'app/components/blog/blog-categories/blog-categories',
    'app/components/blog/blog-popular/blog-popular',
    'app/components/blog/blog-side-widget/blog-side-widget',
    'text!app/components/blog/blog-home1/blog-home1.html',
], function (PostList, BlogPager, BlogSearch, BlogCategories, BlogPopular, BlogSideWidget, template) {

    // Create component BlogHome1 class
    var BlogHome1 = {
        name: 'app-blog-home1',
        template: template,
        components: {
            'app-post-list': PostList,
            'app-blog-pager': BlogPager,
            'app-blog-search': BlogSearch,
            'app-blog-categories': BlogCategories,
            'app-blog-popular': BlogPopular,
            'app-blog-side-widget': BlogSideWidget,
        },
    };
    return BlogHome1;
});