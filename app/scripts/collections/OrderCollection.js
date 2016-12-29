;(function (application, BB) {
    application.collections.OrderCollection = BB.Collection.extend({
        model: application.models.OrderModel,
        initialize: function () {
            Backbone.on("order", function (model) {
                if (this.findWhere({name:model.get("name")})!=undefined) {
                    this.findWhere({name:model.get("name")}).set("number", this.findWhere({name:model.get("name")}).get("number") + 1);
                    this.findWhere({name:model.get("name")}).set("sum", this.findWhere({name:model.get("name")}).get("number") * parseInt(this.findWhere({name:model.get("name")}).get("price")),10);
                    
                }
                else {
                    this.add(model);
                    model.set("sum", parseInt(model.get("price"), 10));
                    model.set("number", 1 );
                }

               
            }, this);
            
        },



        url:"orders.json"


    });
} (APP, Backbone));