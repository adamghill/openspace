$(function() {
  var AppRouter = Backbone.Router.extend({ 
    routes: {
      "about": "about",
    },

    about: function() {
      alert('Show something.');
    },
  });

  var app_router = new AppRouter;
  Backbone.history.start({ pushState: true });

  var Item = Backbone.Model.extend({
  });

  var Items = Backbone.Collection.extend({
    model: Item
  });

  var ItemView = Backbone.View.extend({
    tagName: "div",
    className: "someClass",
    template: $("#itemTemplate").html(),
    events : {
    },
    initialize: function () {
    },
    render: function() {
    },
  });

  var ItemsView = Backbone.View.extend({
    el: $("#itemsView"),
    template: $("#itemsTemplate").html(),

    initialize: function() {
      this.collection = new Items();
    },
    render: function() {
      var t = _.template(this.template);
      this.$el.html(t());

      return this;
    },
    renderItem: function(item) {
      var itemView = new ItemView({ model: item });
      this.$el.find("#items").append(itemView.render().el);
    },
    events: {
    },
  });

  var itemsView = new ItemsView();
});
