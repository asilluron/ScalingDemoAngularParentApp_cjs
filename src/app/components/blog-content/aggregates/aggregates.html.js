angular.module('blog').run(['$templateCache', function($templateCache) {
    $templateCache.put('components/blog-content/aggregates/aggregates.html',
        "<div class=\"blog-post\" ng-repeat=\"blog in Blogs\">\n            <h2 class=\"blog-post-title\">{{blog.title}}</h2>\n            <p class=\"blog-post-meta\">{{blog.date | date:\"medium\"}} by<a href=\"#\">{{blog.author}}</a></p>\n            <p class=\"blog-summary\">{{blog.summary}}</p>\n</div><!-- /.blog-post -->\n          \n<ul class=\"pager\">\n  <li><a href=\"#\">Previous</a></li>\n  <li><a href=\"#\">Next</a></li>\n</ul>");
}]);