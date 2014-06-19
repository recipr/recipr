App.Section = DS.Model.extend({
  recipe: DS.belongsTo('recipe'),
  name: DS.attr('string'),
  preparation: DS.attr('string'),
  preparationTime: DS.attr('int'),
  ingredients: DS.hasMany('ingredient')
});

App.Section.FIXTURES = [
 {
   "id": 1,
   "name": "",
 }
];
