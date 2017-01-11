define([
    'app/components/home/slider/slider',
    'app/components/portfolio/portfolio-item/portfolio-content/portfolio-content',
    'app/components/portfolio/portfolio-social/portfolio-social',
    'app/components/portfolio/portfolio-item/related-projects/related-projects',
    'text!app/components/portfolio/portfolio-item/portfolio-item.html',
], function (Slider, PortfolioContent, PortfolioSocial, RelatedProjects, template) {

    // Create component PortfolioItem class
    var PortfolioItem = {
        name: 'app-portfolio-item',
        template: template,
        components: {
            'app-slider': Slider,
            'app-portfolio-content': PortfolioContent,
            'app-share-social': PortfolioSocial,
            'app-related-projects': RelatedProjects,
        }
    };
    return PortfolioItem;
});