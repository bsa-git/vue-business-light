define(['app/config/env/index'], function (config) {

    // Get env
    var env = config.env;
    var total = config.personal_data.portfolio.total; // the amount of items per page
    var url = config.personal_data.portfolio.url; // portfolio url

    // initial state
    var _portfolio = {
        url: url,
        col0: {
            img: 'app/images/related-projects.jpg',
            total: 9,
        },
        col1: {
            img: 'app/images/blog1.jpg',
            total: 6,
        },
        col2: {
            groups: { 1: 1, 2: 1, 3: 2, 4: 2, 5: 3, 6: 3 },
            img: 'app/images/blog-2.jpg',
            total: 6,
        },
        col3: {
            groups: { 1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 2, 7: 3, 8: 3, 9: 3 },
            img: 'app/images/blog-2.jpg',
            total: 9,
        },
        col4: {
            groups: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 2, 6: 2, 7: 2, 8: 2, 9: 3, 10: 3, 11: 3, 12: 3 },
            img: 'app/images/blog-4.jpg',
            total: 12,
        },
        pager: {
            total: total,
            first_url: '#',
            last_url: '#',
            next_url: '#',
            prev_url: '#',
        },
        item: {
            details: {
                title: 'Project Details',
                text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed facilisis purus. Donec interdum massa at ipsum\
                           vehicula tristique. Maecenas bibendum dictum tincidunt. Sed nec justo ac libero consequat tincidunt. Cras\
                           eget molestie justo.</p>\
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed facilisis purus. Donec interdum massa at ipsum\
                           vehicula tristique. Maecenas bibendum dictum tincidunt. Sed nec justo ac libero consequat tincidunt. Cras\
                           eget molestie justo.</p>'
            },
            details2: {
                title: 'Project Details2',
                client: 'Osahan',
                status: 'Finish on 30 Dec, 2016',
                skills: 'creative, web design'
            },
        },
        items: [
            {
                id: '1',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project One',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
            {
                id: '2',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project Two',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
            {
                id: '3',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project Three',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
            {
                id: '4',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project Four',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
            {
                id: '5',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project Five',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
            {
                id: '6',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project Six',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
            {
                id: '7',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project Seven',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
            {
                id: '8',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project Eight',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
            {
                id: '9',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project Nine',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
            {
                id: '10',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project Ten',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
            {
                id: '11',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project Eleven',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
            {
                id: '12',
                url: '/#/portfolio/item',
                img: 'app/images/blog1.jpg',
                title: 'Project twelve',
                subheading: 'Subheading',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.',
            },
        ]
    };

    //=== API functions ==//

    var getPortfolioItems = function (cb, params) {// params = { id: 1, nCol: 1 }, 
        if (env === 'testing') {
            // Change Portfolio items
            var portfolio = _changePortfolioItems(params);
            cb(portfolio);
        } else {
            // Change Portfolio items
            var portfolio = _changePortfolioItems(params);
            cb(portfolio);
        }
    };

    var getPortfolioItem = function (cb, id) {
        if (env === 'testing') {
            var portfolio = _.pick(_portfolio, ['url', 'item']);
            cb(portfolio);
        } else {
            var portfolio = _.pick(_portfolio, ['url', 'item']);
            cb(portfolio); 
        }
    };

    // Change Portfolio items
    var _changePortfolioItems = function (params) {// params = { id: 1, nCol: 1 },
        // Get Portfolio
        //var portfolio = _.pick(_portfolio, ['url', 'pager', 'items']);
        var portfolio = _.cloneDeep(_.pick(_portfolio, ['url', 'pager', 'items']));
        if (!_.isUndefined(params) && !_.isUndefined(params.nCol)) {
            var nCol = params.nCol;
            var col = _portfolio['col' + nCol];
            portfolio.pager.total = col.total;
            var total = col.total;
            // Limit the size of the collection (portfolio.items) to the value (col.total)
            portfolio.items = _.filter(portfolio.items, function (item) {
                var result = total > 0;
                total--;
                return result;
            });
            // Change img from collection of portfolio.items
            portfolio.items = _.forEach(portfolio.items, function (item) {
                item.img = col.img;

            });

            // Group array elements (portfolio.items)
            if (!_.isUndefined(col.groups)) {
                var newGroups = [];
                var indexItem = 0;
                var indexInGroup;
                portfolio.items = _.forEach(portfolio.items, function (item) {
                    indexItem++;
                    var nGroup = col.groups[indexItem];
                    if (_.isUndefined(newGroups[nGroup - 1])) {
                        newGroups.push({});
                        indexInGroup = 0;
                    }
                    // Add item to group
                    indexInGroup++;
                    newGroups[nGroup - 1]['item' + indexInGroup] = item;
                });
                portfolio.items = newGroups;
            }
        }
        return portfolio;
    }

    return {
        getPortfolioItems: getPortfolioItems,
        getPortfolioItem: getPortfolioItem,
    }

});

