define([
    'app/components/portfolio/portfolio-col1/portfolio-list/portfolio-list',
    'app/components/home/customers/customers',
    'text!app/components/portfolio/portfolio-col1/portfolio-col1.html',
], function (PortfolioList, Customers, template) {

    // Create component PortfolioCol1 class
    var PortfolioCol1 = {
        name: 'app-portfolio-col1',
        template: template,
        components: {
            'app-portfolio-list': PortfolioList,
            'app-customers': Customers,
        }
    };
    return PortfolioCol1;
});