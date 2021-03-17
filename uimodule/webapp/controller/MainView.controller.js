sap.ui.define([
  "com/example/myUI5App/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function (BaseController,
  JSONModel
  ) {
  "use strict";

  return BaseController.extend("com.example.myUI5App.controller.MainView", {

    onInit: function () {

      var oView = this.getView();

      $.get('https://jsonplaceholder.typicode.com/todos').done(function (oResponse) {       
        var oModel = new JSONModel();
        oModel.setData(oResponse);
        oView.setModel(oModel);
      });

    }

  });
});
