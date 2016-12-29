;(function (application, BB) {
    application.views.OrdersView = BB.View.extend({
        el: '.ord',
        views: [],
        renderOrderView: function (model) {
            
            var orderView = new application.views.OrderView({model: model});
            this.views.push(orderView);
            this.$el.append(orderView.render().el);
        },
        initialize: function () {
            this.billModel = new application.models.BillModel();
            this.orderCollection = new application.collections.OrderCollection();
            
            this.listenTo(this.orderCollection,
                "reset", this.render);

            this.listenTo(this.orderCollection,
                "add", this.renderOrderView);

          

            
            
        },
        render: function () {
            
            this.orderCollection.each(this.renderOrderView);
            

            return this;
        },
        events: {
            'click .delete ': 'delete',
            'click .del ': 'delAll',
            'click .save ': 'save'

        },
        delete:
            function(){
                var oIndex = $(event.target).closest('tr').attr('orderIndex');

                if (oIndex != undefined) {
                    var d = this.orderCollection.where({name: oIndex});
                    var m = d[0].get("sum") ;
                    this.orderCollection.remove(d);
                    $(event.target).closest('tr').remove();
                }
                
                Backbone.trigger("delete", m);
            },


        delAll:
            function(){
                this.orderCollection.reset();

                this.views.forEach(function(view){view.remove()});

                Backbone.trigger("delAll");
            },
        
        save: 
            function() {
                var h = [];
                this.orderCollection.each(function(modell){
                    
                    modell.get("name");
                   
                    h.push(modell.get("name"));
                    h.push(modell.get("price"));
                    h.push(modell.get("number") + " " + "шт.");

                                   
                    
                });
                var yyy;
                if (h.length<4) {
                    yyy = parseInt(h[1], 10)*parseInt(h[2], 10);
                                       
                }
                
                else {

                    for (var a = 1; a < h.length - 4; a += 3) {
                        yyy = parseInt(h[a], 10) * parseInt(h[a + 1], 10)+parseInt(h[a + 3], 10) * parseInt(h[a + 4], 10);
                        

                    }
                }

                h.push("Итого" + " " + yyy + " "+ "грн.");

                Backbone.trigger("save", h);
            
        }
        
        
    });


} (APP, Backbone));