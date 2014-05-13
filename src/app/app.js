require("angular/angular");
require("angular-ui-router/release/angular-ui-router");
require("blog-resources/exports/blog-resources");

var BlogAppCtrl = require("./app-controller");

angular.module("blog", ["blogcontent", "ui.router"])
	.controller("BlogAppCtrl", BlogAppCtrl);

require("./mainpage/mainpage");