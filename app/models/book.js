var Backbone = require("backbone");

var Book = Backbone.Model.extend({
  defaults: {
    title: "A Book"
  }
});

module.exports = Book;
