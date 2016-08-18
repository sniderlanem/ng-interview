(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);

	StudentsController.$inject = ['$scope', 'StudentsService'];
	function StudentsController($scope, StudentsService) {

		/**
		 * Model
		 */

		var vm = this,
			all_students = [];

		vm.students = [];
		vm.current = false;
		vm.setCurrentStudent = setCurrentStudent;
		vm.search = '';

		/**
		 * Initialization
		 */

		activate();

		/**
		 * Implementations
		 */

		function activate() {

			$scope.$watch('vm.search', function(current, original) {
				filterBySearch();
			});

			return getStudents().then(function() {

			});
		}

		function getStudents() {
			return StudentsService.getStudents().then(function(data) {
				all_students = data;
				vm.students = data;
				return vm.students;
			});
		}

		function setCurrentStudent(s) {
			vm.current = s || false;
		}

		function filterBySearch() {
			if (!vm.search) {
				vm.students = all_students;
			} else {
				vm.students = [];
				angular.forEach(all_students, function(s) {
					if (
						s.FirstName.toLowerCase().indexOf( vm.search.toLowerCase() ) > -1 ||
						s.LastName.toLowerCase().indexOf( vm.search.toLowerCase() ) > -1 ||
						(s.FirstName + ' ' + s.LastName).toLowerCase().indexOf( vm.search.toLowerCase() ) > -1
					) {
						vm.students.push(s);
					}
				});
			}
		}
	}
})();
