define([
    'text!app/components/blog/blog-search/blog-search.html',
], function (template) {

    // Create component BlogSearch class
    var BlogSearch = {
        name: 'app-blog-search',
        template: template,
         mounted: function () {
            // Set focus
            $('#blog-search').focus();
        },
        data: function () {
            return { 
            }
        }
    };
    return BlogSearch;
});