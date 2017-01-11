define([
    'vuex',
    'app/components/portfolio/portfolio-pager/portfolio-pager',
    'text!app/components/portfolio/portfolio-col2/portfolio-list/portfolio-list.html',
], function (Vuex, PortfolioPager, template) {

    // Create component PortfolioList class
    var PortfolioList = {
        name: 'app-portfolio-list',
        template: template,
        components: {
            'app-portfolio-pager': PortfolioPager,
        },
        created: function () {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItems', { id: 1, nCol: 2 });
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