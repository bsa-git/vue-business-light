define([], function () {

    //--- About ---//
    var getAbout = function (state) {
        return state.about;
    };
    
    var getContacts = function (state) {
        return state.about.personal_data.contact;
    };
    
    //--- Blog ---//
    var getBlog = function (state) {
        return state.blog;
    };

    //--- Slider ---//
    var getSlider = function (state) {
        return state.slider;
    };

    //--- Customers ---//
    var getCustomers = function (state) {
        return state.customers.items;
    };

    //--- Gallery ---//
    var getGallery = function (state) {
        return state.gallery;
    };

    //--- Services ---//
    var getServices = function (state) {
        return state.services;
    };

    //--- Team ---//
    var getTeam = function (state) {
        return state.team;
    };
    
    //--- Testimonials ---//
    var getTestimonials = function (state) {
        return state.testimonials;
    };

    //--- Welcome --//
    var getWelcome = function (state) {
        return state.welcome;
    };

    //--- Socials ---//
    var getSocials = function (state) {
        return state.socials;
    };

    //--- Faq --//
    var getFaq = function (state) {
        return state.faq;
    };

    //--- Pricing --//
    var getPricing = function (state) {
        return state.pricing;
    };

    //--- Portfolio ---//
    var getPortfolio = function (state) {
        return state.portfolio;
    };

    return {
        //--- About ---//
        getAbout: getAbout,
        getContacts: getContacts,
        //--- Blog ---//
        getBlog: getBlog,
        //--- Slider ---//
        getSlider: getSlider,
        //--- Customers ---//
        getCustomers: getCustomers,
        //--- Gallery ---//
        getGallery: getGallery,
        //--- Services ---//
        getServices: getServices,
       //--- Team ---//
       getTeam: getTeam,
       //--- Testimonials ---//
       getTestimonials: getTestimonials,
        //--- Welcome --//
        getWelcome: getWelcome,
        //--- Socials ---//
        getSocials: getSocials,
        //--- Faq --//
        getFaq: getFaq,
        //--- Pricing --//
        getPricing: getPricing,
        //--- Portfolio ---//
        getPortfolio: getPortfolio,
    };
});


