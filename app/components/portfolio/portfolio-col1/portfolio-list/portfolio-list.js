define([
    'vuex',
    'app/components/portfolio/portfolio-social/portfolio-social',
    'app/components/portfolio/portfolio-pager/portfolio-pager',
    'text!app/components/portfolio/portfolio-col1/portfolio-list/portfolio-list.html',
], function (Vuex, PortfolioSocial, PortfolioPager, template) {

    // Create component PortfolioList class
    var PortfolioList = {
        name: 'app-portfolio-list',
        template: template,
        components: {
            'app-share-social': PortfolioSocial,
            'app-portfolio-pager': PortfolioPager,
        },
        created: function () {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 1 });
        },
        computed: Vuex.mapGetters({
            portfolio: 'getPortfolio',
        }),
        data: function () {
            return {
            }
        }
    };
    return PortfolioList;
});