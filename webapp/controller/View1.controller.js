sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("fragment.fragment.controller.View1", {
		OnValuehelp: function (oEvent) {
			var oDialog = new sap.ui.xmlfragment("fragment.fragment.fragmentfolder.SelectDialog", this);
			this.getView().addDependent(oDialog);
			oDialog.bindAggregation("items", {
				path: "city>/city",
				template: new sap.m.StandardListItem({
					title: "{city>cityname}"
				})
			});
			oDialog.open();
		},
		_handleValueHelpClose: function (evt) {

			var oSelectedItem = evt.getParameter("selectedItem");
			if (oSelectedItem) {
				var productInput = this.byId("input8");
				productInput.setValue(oSelectedItem.getTitle());
			}
			evt.getSource().getBinding("items").filter([]);
		}

	});
});