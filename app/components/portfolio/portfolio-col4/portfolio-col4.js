define([
    'app/components/portfolio/portfolio-col4/portfolio-list/portfolio-list',
    'app/components/home/customers/customers',
    'text!app/components/portfolio/portfolio-col4/portfolio-col4.html',
], function (PortfolioList, Customers, template) {

    // Create component PortfolioCol4 class
    var PortfolioCol4 = {
        name: 'app-portfolio-col4',
        template: template,
        components: {
            'app-portfolio-list': PortfolioList,
            'app-customers': Customers,
        }
    };
    return PortfolioCol4;
});