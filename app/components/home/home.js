define([
    // Components
    'app/components/home/blog/blog',
    'app/components/home/customers/customers',
    'app/components/home/gallery/gallery',
    'app/components/home/service/service',
    'app/components/home/slider/slider',
    'app/components/home/team/team',
    'app/components/home/testimonials/testimonials',
    'app/components/home/welcome/welcome',
    'text!app/components/home/home.html'
], function (Blog, Customers, Gallery, Service, Slider, Team, Testimonials, Welcome, template) {

    // Create component Home class
    var Home = {
        name: 'app-home',
        template: template,
        components: {
            'app-blog': Blog,
            'app-customers': Customers,
            'app-gallery': Gallery,
            'app-service': Service,
            'app-slider': Slider,
            'app-team': Team,
            'app-testimonials': Testimonials,
            'app-welcome': Welcome,
        },
    };
    return Home;
});
