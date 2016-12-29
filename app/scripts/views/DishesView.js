;(function (application, BB) {
    application.views.DishesView = BB.View.extend({
        el: '.dish',
        views: [],
        initialize: function (opts) {
            this.dishesCollection = new application.collections.DishesCollection(opts);
            
            this.listenTo(this.dishesCollection,
                "reset", this.render)
        },
        render: function () {
            this.views.forEach(function(view){view.remove()});
            this.dishesCollection.each(function (model) {
                
                
                var dishView = new application.views.DishView({model: model});
                
                this.views.push(dishView);
                this.$el.append(dishView.render().el);
                
            }, this);

            return this;
        },

        events: {
            'click ': 'order'
        },
        order:
            function(){
                var dIndex = $(event.target.parentNode).attr('dishIndex');
                

                if (dIndex != undefined) {
                    
                    if (this.dishesCollection!=undefined) {

                        this.dishesCollection.remove();
                                              
                    }
                    var d = this.dishesCollection.findWhere({name:dIndex});

                }
                Backbone.trigger("order", d);

            }

    });
}(APP, Backbone));