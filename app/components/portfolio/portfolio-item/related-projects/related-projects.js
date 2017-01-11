define([
    'vuex',
    'text!app/components/portfolio/portfolio-item/related-projects/related-projects.html',
], function (Vuex, template) {

    // Create component RelatedProjects class
    var RelatedProjects = {
        name: 'app-related-projects',
        template: template,
        mounted: function () {
            if ($("#customers").length > 0) {
                $("#customers").owlCarousel({
                    items: 4,
                    lazyLoad: true,
                    pagination: true,
                    autoPlay: 2000,
                    stopOnHover: true
                });
            }
        },
        created: function () {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 0 });
        },
        computed: Vuex.mapGetters({
            portfolio: 'getPortfolio',
        }),
        data: function () {
            return {
            }
        }
    };
    return RelatedProjects;
});