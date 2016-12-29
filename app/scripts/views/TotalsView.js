;(function (application, BB) {
    application.views.TotalsView = BB.View.extend({
        el: '.total',

        renderTotalView: function (model) {
            var totalView = new application.views.TotalView({model: model});

            this.$el.append(totalView.render().el);
        },
        initialize: function () {
            this.totalCollection = new application.collections.TotalCollection();
            this.listenTo(this.totalCollection,
                "reset", this.render);

            this.listenTo(this.totalCollection,
                "add", this.renderTotalView);
        },
        render: function () {
            this.totalCollection.each(this.renderTotalView);

            return this;
        }
    });


} (APP, Backbone));
