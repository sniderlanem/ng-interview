'use strict';

describe('ngInterview.students module', function() {

	var $controller,
		$rootScope;

	beforeEach(function() {
		module('ngInterview.students');
		inject(function(_$controller_, _$rootScope_) {
			$controller = _$controller_;
			$rootScope = _$rootScope_;
		});
	});

	describe('StudentsController', function() {

		it('should instantiate', function() {
			var $scope = $rootScope.$new(),
				studentsCtrl = $controller('StudentsController');
			expect(studentsCtrl).toBeDefined();
		});

	});

});
