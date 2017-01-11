define([
    'vuex',
    'text!app/components/portfolio/portfolio-pager/portfolio-pager.html',
], function (Vuex, template) {

    // Create component BlogPager class
    var BlogSearch = {
        name: 'app-blog-pager',
        template: template,
        computed: Vuex.mapGetters({
            portfolio: 'getPortfolio'
        }),
        data: function () {
            return { 
            }
        }
    };
    return BlogSearch;
});