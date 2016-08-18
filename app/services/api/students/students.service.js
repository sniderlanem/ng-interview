(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http'];
	function StudentsService($http) {

		/**
		 * Exposed functions
		 */

		this.getStudents = getStudents;

		/**
		 * Implementations
		 */

		function getStudents() {
			return $http.get('http://il-resume-api.azurewebsites.net/api/students')
					.then(getStudentsComplete)
					.catch(function(message) {
						location.reload(true);
					});

			function getStudentsComplete(data, status, headers, config) {
				if (!angular.isObject(data.data)) {
					throw 'Invalid response.';
				}
				return data.data || [];
			}
		}

	}
})();
