define([
    'app/components/portfolio/portfolio-col2/portfolio-list/portfolio-list',
    'app/components/home/customers/customers',
    'text!app/components/portfolio/portfolio-col2/portfolio-col2.html',
], function (PortfolioList, Customers, template) {

    // Create component PortfolioCol2 class
    var PortfolioCol2 = {
        name: 'app-portfolio-col2',
        template: template,
        components: {
            'app-portfolio-list': PortfolioList,
            'app-customers': Customers,
        }
    };
    return PortfolioCol2;
});