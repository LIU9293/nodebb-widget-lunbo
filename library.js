(function(module) {
	'use strict';

	var async = require('async'),
		fs = require('fs'),
		path = require('path'),
		templates = module.parent.require('templates.js'),
		app;


	var Widget = {
		templates: {}
	};

	Widget.init = function(params, callback) {

		app = params.app;

		var templatesToLoad = [
			'widget.tpl'
		];

		function loadTemplate(template, next) {
			fs.readFile(path.resolve(__dirname, './public/templates/' + template), function (err, data) {
				if (err) {
					console.log(err.message);
					return next(err);
				}
				Widget.templates[template] = data.toString();
				next(null);
			});
		}

		async.each(templatesToLoad, loadTemplate);

		callback();

	};

	Widget.renderDiscordWidget = function(widget, callback) {

		var srcOne =	widget.data.srcOne,
			urlOne = widget.data.urlOne,
			srcTwo = widget.data.srcTwo,
			urlTwo = widget.data.urlTwo,
			srcThree = widget.data.srcThree,
			urlThree = widget.data.urlThree,
			id = widget.data.myID || '';

		var html = `
		<div class="my-slider" id="${id}">
			<ul>
				<li><a href="${srcOne}">
					<div class="sliderPage" style="background-image:url(${urlOne})"></div>
				</a></li>
				<li><a href="${srcTwo}">
					<div class="sliderPage" style="background-image:url(${urlTwo})"></div>
				</a></li>
				<li><a href="${srcThree}">
					<div class="sliderPage" style="background-image:url(${urlThree})"></div>
				</a></li>
			</ul>
		</div>
		`;

		callback(null,html);

	};

	Widget.defineWidgets = function(widgets, callback) {

		widgets = widgets.concat([
			{
			widget: 'lunbo',
			name: 'lunbo',
			description: '这是一个轮播插件',
			content: fs.readFileSync(path.resolve(__dirname, './public/templates/widget.tpl')),
			}
		]);

		callback(null, widgets);

	};

	module.exports = Widget;

}(module));
