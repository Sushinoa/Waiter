;(function (application, BB) {
    application.views.CategoryView =BB.View.extend({
    
        tagName: 'li',
        className: 'col-md-2',

    template: _.template($("#category").html()),
    initialize: function () {
        this.render();
    },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.attr('categoryIndex', this.model.cid);
            return this;
        }
});
} (APP, Backbone));