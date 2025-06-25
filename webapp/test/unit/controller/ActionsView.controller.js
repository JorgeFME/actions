/*global QUnit*/

sap.ui.define([
	"actions/controller/ActionsView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ActionsView Controller");

	QUnit.test("I should test the ActionsView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
