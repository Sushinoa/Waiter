;(function (application, BB) {
    application.views.CategoriesView = BB.View.extend({
        el: '.menu',
        views: [],
        initialize: function () {
            this.categoryCollection = new application.collections.CategoryCollection();
            this.listenTo(this.categoryCollection,
                "reset", this.render)
        },
        render: function () {
            this.categoryCollection.each(function (model) {
                var categoryView = new application.views.CategoryView({model: model});
                this.views.push(categoryView);
                this.$el.append(categoryView.render().el);
            }, this);

            return this;
        },

        events: {
            'click ': 'menu'
        },
        menu:
            function(){
                var childIndex = $(event.target.parentNode).attr('categoryIndex');
                if (childIndex != undefined) {
                    var s = this.categoryCollection.get(childIndex);
                    Backbone.trigger("menu", s);
                }
               
                
            }


    });


} (APP, Backbone));