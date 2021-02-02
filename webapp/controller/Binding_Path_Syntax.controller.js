sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/model/odata/v2/ODataModel", "sap/ui/Device"
], function(Controller, ODataModel, Device) {
	"use strict";

	return Controller.extend("sap.training.controller.Binding_Path_Syntax", {

		onInit: function() {
			var sUrl = "/ODATA_ORG/V2/OData/OData.svc/";
			var oModel = new ODataModel(sUrl);
			this.getView().setModel(oModel);
		},

		onCategoryChange: function(oEvent) {
			var oItem = oEvent.getParameter("selectedItem");
			var sPath = oItem.getBindingContext().getPath();

			var oListBox = this.getView().byId("idProductList");
			oListBox.bindElement(sPath);
		}

	});

});