define([
    'vuex',
    'text!app/components/portfolio/portfolio-item/portfolio-content/portfolio-content.html',
], function (Vuex, template) {

    // Create component PortfolioContent class
    var PortfolioContent = {
        name: 'app-portfolio-content',
        template: template,
        created: function () {
            //--- Portfolio ---//
            this.$store.dispatch('receivePortfolioItem', 1);
        },
        computed: Vuex.mapGetters({
            portfolio: 'getPortfolio',
        }),
        data: function () {
            return {
            }

        }
    };
    return PortfolioContent;
});