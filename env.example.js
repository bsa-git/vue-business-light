// The values in the configuration files "app/config" 
// will be overwritten by the values of "env.js" file
define([], function () {
    var config = {
        env: 'testing',// development, production, testing
        debug: true,
        api: {
            base_url: 'http://localhost:8888',
            defaultRequest: {
                headers: {
                    'X-Requested-With': 'rest.js',
                    'Content-Type': 'application/json'
                }
            }
        },
        personal_data: {
            copyright: '© 2016 OSAHAN - All Rights Reserved',
            designed_with: 'Osahan Studio',
            designed_with_url: 'https://www.facebook.com/iamgurdeeposahan',
            contact: {
                location: '795 Folsom Ave, Suite 600',
                phone: '+01 234 567 890',
                email: 'company@company.com',
                website: 'www.yourdomain.com'
            },
            twitter: { url: '#', tag: '@Osahan' },
            socials: {
                facebook: { url: '#', icon: 'fa-facebook' },
                twitter: { url: '#', icon: 'fa-twitter' },
                google: { url: '#', icon: 'fa-google-plus' },
                linkdin: { url: '#', icon: 'fa-linkedin' },
                flickr: { url: '#', icon: 'fa-flickr' },
                skype: { url: '#', icon: 'fa-skype' }
            },
            blog: {
                url: '/#/blog/home1',
                total: 3 // Count of posts on page
            },
            portfolio: {
                url: '/#/portfolio/col-1',
                total: 6, // Count of items on page
            }
        },
    }
    return config;
})