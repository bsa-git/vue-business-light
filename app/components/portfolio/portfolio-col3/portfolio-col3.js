define([
    'app/components/portfolio/portfolio-col3/portfolio-list/portfolio-list',
    'app/components/home/customers/customers',
    'text!app/components/portfolio/portfolio-col3/portfolio-col3.html',
], function (PortfolioList, Customers, template) {

    // Create component PortfolioCol3 class
    var PortfolioCol3 = {
        name: 'app-portfolio-col3',
        template: template,
        components: {
            'app-portfolio-list': PortfolioList,
            'app-customers': Customers,
        }
    };
    return PortfolioCol3;
});