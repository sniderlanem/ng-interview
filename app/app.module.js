(function() {
	'use strict';

	angular.module('ngInterview', [
		'ngRoute',
		'ngInterview.currentDate',
		'ngInterview.students',
		'ngInterview.api.students'
	]);
})();
