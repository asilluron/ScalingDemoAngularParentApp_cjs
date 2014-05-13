require("../components/blog-content/aggregates/aggregates.html.js");
require("../components/blog-content/archives/archives.html.js");
require("blog-content/exports/blog-content");
var blogApp = angular.module("blog");
blogApp.config(["$stateProvider",
        function ($stateProvider) {
            $stateProvider
                .state('index', {
                    url: "",
                    views: {
                        "blog-main": {
                            templateUrl: "components/blog-content/aggregates/aggregates.html",
                            controller: 'BlogAggregatorCtrl'
                        },
                        "blog-sidebar": {
                            templateUrl: "components/blog-content/archives/archives.html"
                        }
                    }
                });
        }
    ]);