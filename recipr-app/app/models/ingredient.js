import DS from 'ember-data';

var Ingredient = DS.Model.extend({
    section: DS.belongsTo('section'),
    name: DS.attr('string'),
    unit: DS.attr('string'),
    quantity: DS.attr('string')
});

Ingredient.reopenClass({
    FIXTURES: [
        {
            "id": 1,
            "name": "Potatoes (Big)",
            "unit": "",
            "quantity": "10"
        },
        {
            "id": 2,
            "name": "Water",
            "unit": "ml",
            "quantity": "200"
        },
        {
            "id": 3,
            "name": "Sugar",
            "unit": "Cups",
            "quantity": "3/4"
        }
    ]
});

export default Ingredient;
