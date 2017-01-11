define([
    'app/components/blog/blog-home2/post-list/post-list',
    'app/components/blog/blog-pager/blog-pager',
    'app/components/blog/blog-search/blog-search',
    'app/components/blog/blog-categories/blog-categories',
    'app/components/blog/blog-popular/blog-popular',
    'app/components/blog/blog-side-widget/blog-side-widget',
    'text!app/components/blog/blog-home2/blog-home2.html',
], function (PostList, BlogPager, BlogSearch, BlogCategories, BlogPopular, BlogSideWidget, template) {

    // Create component BlogHome2 class
    var BlogHome2 = {
        name: 'app-blog-home2',
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
    return BlogHome2;
});