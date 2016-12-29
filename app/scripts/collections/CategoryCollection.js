;(function (application, BB) {
    application.collections.CategoryCollection = BB.Collection.extend({
    model: application.models.CategoryModel,
    url: 'JSON/Category.json',
    initialize: function () {
        this.fetch({reset: true});
    }
});

} (APP, Backbone));