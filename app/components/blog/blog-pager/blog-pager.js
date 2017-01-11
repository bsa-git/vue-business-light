define([
    'vuex',
    'text!app/components/blog/blog-pager/blog-pager.html',
], function (Vuex, template) {

    // Create component BlogPager class
    var BlogSearch = {
        name: 'app-blog-pager',
        template: template,
        computed: Vuex.mapGetters({
            blog: 'getBlog'
            //pager: 'getBlogPager'
        }),
        data: function () {
            return { 
            }
        }
    };
    return BlogSearch;
});