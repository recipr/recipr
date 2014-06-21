App.Ingredient = DS.Model.extend({
  section: DS.belongsTo('Section'),
  name: DS.attr('string'),
  unit: DS.attr('string'),
  quantity: DS.attr('string')
});

App.Ingredient.FIXTURES = [
 {
   "id": 1,
   "name": "Potatoes (Big)",
   "unit": "10",
   "quantity": ""
 },
 {
   "id": 2,
   "name": "Water",
   "unit": "200",
   "quantity": "ml"
 },
 {
   "id": 3,
   "name": "Carrots",
   "unit": "3",
   "quantity": ""
 }
];
