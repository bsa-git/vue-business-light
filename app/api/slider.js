define(['app/config/env/index'], function (config) {

    // Get env
    var env = config.env;

    // initial state
    var _slider = {
        items: [
            {
                img: {
                    src: 'app/images/slider/first.jpg',
                    title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
                    alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )'
                },
                body: {
                    img_src: 'app/images/big-logo.png',
                    img_title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
                    img_alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
                    read_more_url: '#',
                    live_demo_url: '#',
                    title: 'Lorem ipsum dolor sit amet<br> consectetur adipisicing elit.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?'
                }
            },
            {
                img: {
                    src: 'app/images/slider/second.jpg',
                    title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
                    alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )'
                },
                body: {
                    img_src: 'app/images/big-logo.png',
                    img_title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
                    img_alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
                    read_more_url: '#',
                    live_demo_url: '#',
                    title: 'Lorem ipsum dolor sit amet<br> consectetur adipisicing elit.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?'
                }
            },
            {
                img: {
                    src: 'app/images/slider/third.jpg',
                    title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
                    alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )'
                },
                body: {
                    img_src: 'app/images/big-logo.png',
                    img_title: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
                    img_alt: 'Osahan Business Light - Bootstrap Template by ( Gurdeep Osahan - Web Designer )',
                    read_more_url: '#',
                    live_demo_url: '#',
                    title: 'Lorem ipsum dolor sit amet<br> consectetur adipisicing elit.',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?'
                }
            },
        ]
    };

    var getSlider = function (cb) {
        if (env === 'testing') {
            cb(_slider);
        } else {
            cb(_slider);
        }

    };

    return {
        getSlider: getSlider
    }

});

