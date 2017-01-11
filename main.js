requirejs.config({
    baseUrl: '.',
    paths: {
        css: 'app/js/requirejs/css.min', //requirejs plugin for load css
        text: 'app/js/requirejs/text', //requirejs plugin for load text
        lodash: 'app/js/lodash/lodash.min', // Standard library
        vue: 'https://unpkg.com/vue/dist/vue', //'app/js/vue/vue',
        vuex: 'https://unpkg.com/vuex/dist/vuex', // 'app/js/vue/vuex',
        vue_router: 'https://unpkg.com/vue-router/dist/vue-router', // 'app/js/vue/vue-router',
        app_comp: 'app/components/app/app',
    },
    shim: {
        app_comp: {
            deps: ['lodash']
        },
    }
});

require([
    // Vue.js
    'vue',
    // Vue-Router
    'vue_router',

    //--- Components ---

    // App
    'app_comp',
    // Home
    'app/components/home/home',
    // About
    'app/components/about/about',
    // Services
    'app/components/services/services',
    // Contact
    'app/components/contact/contact',
    // Error404
    'app/components/error-404/error-404',
    // Faq
    'app/components/faq/faq',
    // Pricing
    'app/components/pricing/pricing',
    // Sidebar
    'app/components/sidebar/sidebar',
    'app/components/sidebar/sidebar-home/sidebar-home',
    // FullWidth
    'app/components/full-width/full-width',
    // Blog
    'app/components/blog/blog',
    'app/components/blog/blog-post/blog-post',
    'app/components/blog/blog-home1/blog-home1',
    'app/components/blog/blog-home2/blog-home2',
    // Portfolio
    'app/components/portfolio/portfolio',
    'app/components/portfolio/portfolio-col1/portfolio-col1',
    'app/components/portfolio/portfolio-col2/portfolio-col2',
    'app/components/portfolio/portfolio-col3/portfolio-col3',
    'app/components/portfolio/portfolio-col4/portfolio-col4',
    'app/components/portfolio/portfolio-item/portfolio-item',
],
    function (Vue, VueRouter, App, Home, About, Services, Contact, Error404, Faq, Pricing, Sidebar, SidebarHome, FullWidth, Blog, BlogPost, BlogHome1, BlogHome2, Portfolio, PortfolioCol1, PortfolioCol2, PortfolioCol3, PortfolioCol4, PortfolioItem) {// 

        // Use plugin - VueRouter
        Vue.use(VueRouter);
        
        // Create the router instance and pass the `routes` option
        var routes = [
            {
                path: '/',
                meta: { home: true, title: 'Home', summary: '' },
                component: Home
            },
            {
                path: '/home',
                meta: { home: true, title: 'Home', summary: '' },
                component: Home
            },
            {
                path: '/about',
                meta: { about: true, title: 'About', summary: 'Lorem ipsum dolor sit ame' },
                component: About
            },
            {
                path: '/services',
                meta: { services: true, title: 'Services', summary: 'We Are Professional' },
                component: Services
            },
            {
                path: '/contact',
                meta: { contact: true, title: 'Contact', summary: 'Lorem ipsum dolor sit ame' },
                component: Contact
            },
            {
                path: '/error-404',
                meta: { error_404: true, other_pages: true, title: '404', summary: 'This page doesn\'t exist' },
                component: Error404
            },
            {
                path: '/faq',
                meta: { faq: true, other_pages: true, title: 'FAQ', summary: 'A list of questions and answers' },
                component: Faq
            },
            {
                path: '/pricing',
                meta: { pricing: true, other_pages: true, title: 'Pricing Table', summary: 'Lorem ipsum dolor sit ame' },
                component: Pricing
            },
            {
                path: '/full-width',
                meta: { full_width: true, other_pages: true, title: 'Full Width Page', summary: 'Lorem ipsum dolor sit ame' },
                component: FullWidth
            },
            {
                path: '/sidebar',
                children: [
                    {
                        // path: /sidebar
                        path: '',
                        meta: { sidebar_home: true, other_pages: true, title: 'Sidebar Home', summary: 'Lorem ipsum dolor sit ame' },
                        component: SidebarHome
                    },
                    {
                        // path: /sidebar/home
                        path: 'home',
                        meta: { sidebar_home: true, other_pages: true, title: 'Sidebar Home', summary: 'Lorem ipsum dolor sit ame' },
                        component: SidebarHome
                    },
                    {
                        // path: /sidebar/about
                        path: 'about',
                        meta: { sidebar_about: true, other_pages: true, title: 'About', summary: 'Lorem ipsum dolor sit ame' },
                        component: About
                    },
                    {
                        // path: /sidebar/services
                        path: 'services',
                        meta: { sidebar_services: true, other_pages: true, title: 'Services', summary: 'We Are Professional' },
                        component: Services
                    },
                    {
                        // path: /sidebar/contact
                        path: 'contact',
                        meta: { sidebar_contact: true, other_pages: true, title: 'Contact', summary: 'Lorem ipsum dolor sit ame' },
                        component: Contact
                    },
                    {
                        // path: /sidebar/error-404
                        path: 'error-404',
                        meta: { sidebar_error404: true, other_pages: true, title: '404', summary: 'This page doesn\'t exist' },
                        component: Error404
                    },
                    {
                        // path: /sidebar/faq
                        path: 'faq',
                        meta: { sidebar_faq: true, other_pages: true, title: 'FAQ', summary: 'A list of questions and answers' },
                        component: Faq
                    },
                    {
                        // path: /sidebar/pricing
                        path: 'pricing',
                        meta: { sidebar_pricing: true, other_pages: true, title: 'Pricing Table', summary: 'Lorem ipsum dolor sit ame' },
                        component: Pricing
                    },
                    {
                        // path: /sidebar/full-width
                        path: 'full-width',
                        meta: { sidebar_full_width: true, other_pages: true, title: 'Full Width Page', summary: 'Lorem ipsum dolor sit ame' },
                        component: FullWidth
                    },
                    {
                        // path: /sidebar/blog-home1
                        path: 'blog-home1',
                        meta: { sidebar_blog_home1: true, other_pages: true, title: 'Blog Home One', summary: 'Lorem ipsum dolor sit ame' },
                        component: BlogHome1
                    },
                    {
                        // path: /sidebar/blog-home2
                        path: 'blog-home2',
                        meta: { sidebar_blog_home2: true, other_pages: true, title: 'Blog Home Two', summary: 'Lorem ipsum dolor sit ame' },
                        component: BlogHome2
                    },
                    {
                        // path: /sidebar/blog-post
                        path: 'blog-post',
                        meta: { sidebar_blog_post: true, other_pages: true, title: 'Blog Post', summary: 'Lorem ipsum dolor sit ame' },
                        component: BlogPost
                    },
                    {
                        // path: /sidebar/portfolio-1
                        path: 'portfolio-1',
                        meta: { sidebar_portfolio1: true, other_pages: true, title: 'One Column Portfolio', summary: 'Lorem ipsum dolor sit ame' },
                        component: PortfolioCol1
                    },
                    {
                        // path: /sidebar/portfolio-2
                        path: 'portfolio-2',
                        meta: { sidebar_portfolio2: true, other_pages: true, title: 'Two Column Portfolio', summary: 'Lorem ipsum dolor sit ame' },
                        component: PortfolioCol2
                    },
                    {
                        // path: /sidebar/portfolio-3
                        path: 'portfolio-3',
                        meta: { sidebar_portfolio3: true, other_pages: true, title: 'Three Column Portfolio', summary: 'Lorem ipsum dolor sit ame' },
                        component: PortfolioCol3
                    },
                    {
                        // path: /sidebar/portfolio-4
                        path: 'portfolio-4',
                        meta: { sidebar_portfolio4: true, other_pages: true, title: 'Four Column Portfolio', summary: 'Lorem ipsum dolor sit ame' },
                        component: PortfolioCol4
                    },
                    {
                        // path: /sidebar/portfolio-item
                        path: 'portfolio-item',
                        meta: { sidebar_portfolio_item: true, other_pages: true, title: 'Portfolio Item', summary: 'Lorem ipsum dolor sit ame' },
                        component: PortfolioItem
                    },
                ],
                component: Sidebar
            },
            {
                path: '/blog',
                children: [
                    {
                        // path: /blog/home1
                        path: 'home1',
                        meta: { blog: true, title: 'Blog Home One', summary: 'Lorem ipsum dolor sit ame' },
                        component: BlogHome1
                    },
                    {
                        // path: /blog/home2
                        path: 'home2',
                        meta: { blog: true, title: 'Blog Home Two', summary: 'Lorem ipsum dolor sit ame' },
                        component: BlogHome2
                    },
                    {
                        // path: /blog/post
                        path: 'post',
                        meta: { blog: true, title: 'Blog Post', summary: 'Lorem ipsum dolor sit ame', submenu: { path: '/#/blog/home1', title: 'Posts' } },
                        component: BlogPost
                    },
                ],
                component: Blog
            },
            {
                path: '/portfolio',
                children: [
                    {
                        // path: /portfolio/col-1
                        path: 'col-1',
                        meta: { portfolio: true, title: 'One Column Portfolio', summary: 'Lorem ipsum dolor sit ame' },
                        component: PortfolioCol1
                    },
                    {
                        // path: /portfolio/col-2
                        path: 'col-2',
                        meta: { portfolio: true, title: 'Two Column Portfolio', summary: 'Lorem ipsum dolor sit ame' },
                        component: PortfolioCol2
                    },
                    {
                        // path: /portfolio/col-3
                        path: 'col-3',
                        meta: { portfolio: true, title: 'Three Column Portfolio', summary: 'Lorem ipsum dolor sit ame' },
                        component: PortfolioCol3
                    },
                    {
                        // path: /portfolio/col-4
                        path: 'col-4',
                        meta: { portfolio: true, title: 'Four Column Portfolio', summary: 'Lorem ipsum dolor sit ame' },
                        component: PortfolioCol4
                    },
                    {
                        // path: /portfolio/item
                        path: 'item',
                        meta: { portfolio: true, title: 'Portfolio Item', summary: 'Lorem ipsum dolor sit ame', submenu: { path: '/#/portfolio/col-1', title: 'Portfolio' } },
                        component: PortfolioItem
                    },
                ],
                component: Portfolio
            },
            
        ];

        // Create the router instance and pass the `routes` option
        var router = new VueRouter({
            routes: routes
        });

        // Create and mount the root instance.
        var app = new App({
            router: router
        }).$mount('#app');
    });


