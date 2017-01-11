define([
    // Components
    'app/components/app/breadcrumbs/breadcrumbs',
    'text!app/components/blog/blog.html'
], function (Breadcrumbs, template) {

    // Create component Blog class
    var Blog = {
        name: 'app-blog',
        template: template,
        components: {
            'app-breadcrumbs': Breadcrumbs,
        }
    };
    return Blog;
});
