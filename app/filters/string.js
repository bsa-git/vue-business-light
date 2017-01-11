define(['vue'], function (Vue) {

        // capitalize
        var capitalize = function (string) {
                return _.capitalize(string);
        };

        // escape
        var escape = function (string) {
                return _.escape(string);
        };

        // unescape
        var unescape = function (string) {
                return _.unescape(string);
        };

        // toLower
        var toLower = function (string) {
                return _.toLower(string);
        };

        // toUpper
        var toUpper = function (string) {
                return _.toUpper(string);
        };

        // trim
        var trim = function (string, chars) {
                if (_.isUndefined(chars)) {
                        return _.trim(string);
                } else {
                        return _.trim(string, chars);
                }
        };

        // trimEnd
        var trimEnd = function (string, chars) {
                if (_.isUndefined(chars)) {
                        return _.trimEnd(string);
                } else {
                        return _.trimEnd(string, chars);
                }
        };

        // trimStart
        var trimStart = function (string, chars) {
                if (_.isUndefined(chars)) {
                        return _.trimStart(string);
                } else {
                        return _.trimStart(string, chars);
                };
        };

        // Reg filters
        Vue.filter('capitalize', capitalize);
        Vue.filter('escape', escape);
        Vue.filter('unescape', unescape);
        Vue.filter('toLower', toLower);
        Vue.filter('toUpper', toUpper);
        Vue.filter('trim', trim);
        Vue.filter('trimEnd', trimEnd);
        Vue.filter('trimStart', trimStart);
});

