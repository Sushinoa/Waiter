;(function (application, BB) {
    application.models.BillModel = BB.Model.extend({

        bills: [],
        initialize: function() {
            
            Backbone.on("save", function (bill) {
                
                this.set("bill", bill);
                

                this.save();

            }, this);
            
            Backbone.on("delAll", function () {

               
                this.destroy();

            }, this);
            
           
        },

        url:"orders.json"
        
        


    });
} (APP, Backbone)); 