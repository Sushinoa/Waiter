;(function (application, BB) {
    application.collections.TotalCollection = BB.Collection.extend({
        model: application.models.TotalModel,
        initialize: function () {
            Backbone.on("order", function (model) {
                if (this.at(0) != undefined)
                    this.at(0).set("total", parseInt(model.get("price"),10) + this.at(0).get("total"));

                else {
                    this.add(model);
                    model.set("total", model.get("sum") );

                }

            }, this);

            Backbone.on("delete", function (mod) {
                if (this.at(0) != undefined)
                    this.at(0).set("total",  this.at(0).get("total")- mod);



            }, this);

            Backbone.on("delAll", function () {
                
                    this.at(0).set("total",  0);



            }, this);
            

        },



        url:"orders.json"


    });
} (APP, Backbone));