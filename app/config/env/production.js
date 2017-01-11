define([], function () {
	var config = {
		env: 'production',
		debug: false,
		api: {
			base_url: 'http://localhost:8000/api',
			defaultRequest: {
				headers: {
					'X-Requested-With': 'rest.js',
					'Content-Type': 'application/json'
				}
			}
		},
		personal_data: {
            contact: {
                location: '795 Folsom Ave, Suite 600',
                phone: '+01 234 567 890',
                email: 'company@company.com',
                website: 'www.yourdomain.com'
            },
            socials: {
                facebook: { url: '#', icon: 'fa-facebook' },
                twitter: { url: '#', icon: 'fa-twitter' },
                google: { url: '#', icon: 'fa-google-plus' },
                linkdin: { url: '#', icon: 'fa-linkedin' },
                flickr: { url: '#', icon: 'fa-flickr' },
                skype: { url: '#', icon: 'fa-skype' }
            }
        },
	}
	return config;
})

