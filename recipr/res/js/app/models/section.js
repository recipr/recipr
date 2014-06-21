App.Section = DS.Model.extend({
  recipe: DS.belongsTo('recipe'),
  name: DS.attr('string'),
  preparation: DS.attr('string'),
  preparationTime: DS.attr('int')
});

App.Section.FIXTURES = [
 {
   "id": 1,
   "name": "Test Section 1",
 },
 {
   "id": 2,
   "name": "Test Section 2",
 },
 {
   "id": 3,
   "name": "Test Section 3",
 }
];
