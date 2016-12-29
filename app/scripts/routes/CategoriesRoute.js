;(function (application, BB) {
    application.routes.CategoriesRoutes = BB.Router.extend({
        routes: {
            
            "categories/:category": "renderByCategory"

        },
        
        initialize: function(){
            this.listenTo(Backbone, "menu", function(category){
                
                this.navigate("categories/"+category.get('categoryname'),{trigger:true})
            });
            this.categoriesView = new application.views.CategoriesView();
            this.categoriesView.render();
                        
            this.ordersView = new application.views.OrdersView();
            this.ordersView.render();

            this.totalsView = new application.views.TotalsView();
            this.totalsView.render();


        },


        renderByCategory: function(category){
           if (this.dishesView != undefined){
               this.dishesView.$el.empty();
               this.dishesView = new application.views.DishesView({
                   collUrl: category
               } );
           } else {

               this.dishesView = new application.views.DishesView({
                   collUrl: category
               });

           }

            this.listenTo(Backbone, "order", function(){

                this.dishesCollection.remove();
                this.dishesView.remove();
                
            }); 

        }

    });

} (APP, Backbone));