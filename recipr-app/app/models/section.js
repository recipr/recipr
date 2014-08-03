import DS from 'ember-data';

var Section = DS.Model.extend({
    recipe: DS.belongsTo('recipe'),
    name: DS.attr('string'),
    preparation: DS.attr('string'),
    preparationTime: DS.attr('int'),
    ingredients: DS.hasMany('ingredient', { async: true })
});

Section.reopenClass({
    FIXTURES: [
        {
            "id": 1,
            "name": "Test Section 1",
            "ingredients": [1, 2, 3]
        }
    ]
});

export default Section;
