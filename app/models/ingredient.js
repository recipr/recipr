import DS from 'ember-data';

export default DS.Model.extend({
  recipe: DS.belongsTo('recipe'),

  quantity: DS.attr('number'),
  unit: DS.attr('string'),
  name: DS.attr('string'),
});
