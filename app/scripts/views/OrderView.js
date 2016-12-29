;(function (application, BB) {
    application.views.OrderView =BB.View.extend({

        tagName: 'tr',

        template: _.template($("#order").html()),
        initialize: function () {

            this.listenTo(this.model, 'change', this.render);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.attr('orderIndex', this.model.get("name"));
            return this;
        }
    });
} (APP, Backbone));