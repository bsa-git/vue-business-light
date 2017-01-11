define([
    //--- Mutation types ---//
    'app/store/mutation-types',
    //--- API modules ---//
    'app/api/about',
    'app/api/blog',
    'app/api/customers',
    'app/api/gallery',
    'app/api/slider',
    'app/api/services',
    'app/api/team',
    'app/api/testimonials',
    'app/api/socials',
    'app/api/faq',
    'app/api/welcome',
    'app/api/pricing',
    'app/api/portfolio',
], function (types, about, blog, customers, gallery, slider, services, team, testimonials, socials, faq, welcome, pricing, portfolio) {

    //--- About ---// 
    var receivePersonalData = function (store) {
        about.getPersonalData(function (personal_data) {
            store.commit(types.RECEIVE_PERSONAL_DATA, personal_data);
        });
    };

    var receiveBusinessData = function (store) {
        about.getBusinessData(function (business) {
            store.commit(types.RECEIVE_BUSINESS_DATA, business);
        });
    };

    var receiveSubscribeData = function (store) {
        about.getSubscribeData(function (subscribe) {
            store.commit(types.RECEIVE_SUBSCRIBE_DATA, subscribe);
        });
    };

    var receiveWidgetsData = function (store) {
        about.getWidgetsData(function (widgets) {
            store.commit(types.RECEIVE_WIDGETS_DATA, widgets);
        });
    };

    //--- Blog ---// 
    var receiveBlogPosts = function (store, id) {
        blog.getPosts(function (blog) {
            store.commit(types.RECEIVE_BLOG_POSTS, blog);
        }, id);
    };

    var receiveBlogPost = function (store, id) {
        blog.getPost(function (blog) {
            store.commit(types.RECEIVE_BLOG_POST, blog);
        }, id);
    };

    var receiveBlogCategories = function (store) {
        blog.getCategories(function (blog) {
            store.commit(types.RECEIVE_BLOG_CATEGORIES, blog);
        });
    };

    var receiveBlogPopular = function (store) {
        blog.getPopular(function (blog) {
            store.commit(types.RECEIVE_BLOG_POPULAR, blog);
        });
    };

    //--- Slider ---//
    var receiveSlider = function (store) {
        slider.getSlider(function (slider) {
            store.commit(types.RECEIVE_SLIDER, slider);
        });
    };

    //--- Customers ---//
    var receiveCustomers = function (store) {
        customers.getCustomers(function (customers) {
            store.commit(types.RECEIVE_CUSTOMERS, customers);
        });
    };

    //--- Gallery ---//
    var receiveGallery = function (store) {
        gallery.getGallery(function (gallery) {
            store.commit(types.RECEIVE_GALLERY, gallery);
        });
    };

    var receiveInstagram = function (store) {
        gallery.getInstagram(function (gallery) {
            store.commit(types.RECEIVE_INSTAGRAM, gallery);
        });
    };

    //--- Services ---// 
    var receiveServicesHome = function (store) {
        services.getServicesHome(function (services) {
            store.commit(types.RECEIVE_SERVICES_HOME, services);
        });
    };

    var receiveServicesAccordion = function (store) {
        services.getServicesAccordion(function (services) {
            store.commit(types.RECEIVE_SERVICES_ACCORDION, services);
        });
    };

    var receiveServicesList = function (store) {
        services.getServicesList(function (services) {
            store.commit(types.RECEIVE_SERVICES_LIST, services);
        });
    };

    var receiveServicesPanels = function (store) {
        services.getServicesPanels(function (services) {
            store.commit(types.RECEIVE_SERVICES_PANELS, services);
        });
    };

    var receiveServicesTabs = function (store) {
        services.getServicesTabs(function (services) {
            store.commit(types.RECEIVE_SERVICES_TABS, services);
        });
    };

    var receiveServicesPurchase = function (store) {
        services.getServicesPurchase(function (services) {
            store.commit(types.RECEIVE_SERVICES_PURCHASE, services);
        });
    };

    //--- Team ---// 
    var receiveTeamInfo = function (store) {
        team.getInfo(function (info) {
            store.commit(types.RECEIVE_TEAM_INFO, info);
        });
    };

    var receiveTeamMembers = function (store) {
        team.getMembers(function (members) {
            store.commit(types.RECEIVE_TEAM_MEMBERS, members);
        });
    };

    var receiveTeamSummary = function (store) {
        team.getSummary(function (summary) {
            store.commit(types.RECEIVE_TEAM_SUMMARY, summary);
        });
    };

    //--- Testimonials ---//
    var receiveTestimonials = function (store) {
        testimonials.getTestimonials(function (testimonials) {
            store.commit(types.RECEIVE_TESTIMONIALS, testimonials);
        });
    };

    //--- Socials ---//
    var receiveTwitter = function (store) {
        socials.getTwitter(function (twitter) {
            store.commit(types.RECEIVE_TWITTER, twitter);
        });
    };

    var receiveMySocials = function (store) {
        socials.getMySocials(function (my_socials) {
            store.commit(types.RECEIVE_MY_SOCIALS, my_socials);
        });
    };

    var receiveShareSocials = function (store) {
        socials.getShareSocials(function (share_socials) {
            store.commit(types.RECEIVE_SHARE_SOCIALS, share_socials);
        });
    };

    //--- Faq ---//
    var receiveFaq = function (store) {
        faq.getFaq(function (faq) {
            store.commit(types.RECEIVE_FAQ, faq);
        });
    };

    //--- Welcome ---//
    var receiveWelcome = function (store) {
        welcome.getWelcome(function (welcome) {
            store.commit(types.RECEIVE_WELCOME, welcome);
        });
    };

    //--- Pricing ---//
    var receivePricing = function (store) {
        pricing.getPricing(function (pricing) {
            store.commit(types.RECEIVE_PRICING, pricing);
        });
    };

    //--- Portfolio ---//
    var receivePortfolioItems = function (store, params) { //params = { id: 1, nCol: 1 },
        portfolio.getPortfolioItems(function (portfolio) {
            store.commit(types.RECEIVE_PORTFOLIO_ITEMS, portfolio);
        }, params);
    };

    var receivePortfolioItem = function (store, id) {
        portfolio.getPortfolioItem(function (portfolio) {
            store.commit(types.RECEIVE_PORTFOLIO_ITEM, portfolio);
        }, id);
    };

    return {
        //--- About ---// 
        receivePersonalData: receivePersonalData,
        receiveBusinessData: receiveBusinessData,
        receiveSubscribeData: receiveSubscribeData,
        receiveWidgetsData: receiveWidgetsData,
        //--- Blog ---//
        receiveBlogPosts: receiveBlogPosts,
        receiveBlogPost: receiveBlogPost,
        receiveBlogCategories: receiveBlogCategories,
        receiveBlogPopular: receiveBlogPopular,
        //--- Slider ---//
        receiveSlider: receiveSlider,
        //--- Customers ---//
        receiveCustomers: receiveCustomers,
        //--- Gallery ---//
        receiveGallery: receiveGallery,
        receiveInstagram: receiveInstagram,
        //--- Services ---//
        receiveServicesHome: receiveServicesHome,
        receiveServicesAccordion: receiveServicesAccordion,
        receiveServicesList: receiveServicesList,
        receiveServicesPanels: receiveServicesPanels,
        receiveServicesTabs: receiveServicesTabs,
        receiveServicesPurchase: receiveServicesPurchase,
        //--- Team ---// 
        receiveTeamInfo: receiveTeamInfo,
        receiveTeamMembers: receiveTeamMembers,
        receiveTeamSummary: receiveTeamSummary,
        //--- Testimonials ---//
        receiveTestimonials: receiveTestimonials,
        //--- Socials ---//
        receiveTwitter: receiveTwitter,
        receiveMySocials: receiveMySocials,
        receiveShareSocials: receiveShareSocials,
        //--- Faq ---//
        receiveFaq: receiveFaq,
        //--- Welcome ---//
        receiveWelcome: receiveWelcome,
        //--- Pricing ---//
        receivePricing: receivePricing,
        //--- Portfolio ---//
        receivePortfolioItems: receivePortfolioItems,
        receivePortfolioItem: receivePortfolioItem,
    };
});


