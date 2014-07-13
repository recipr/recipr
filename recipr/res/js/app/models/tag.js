App.Tag = DS.Model.extend({
  recipe: DS.belongsTo('tag'),
  name: DS.attr('string')
});

App.Tag.FIXTURES = [
    {
        "id": 1,
        "name": "tag1"
    },
    {
        "id": 2,
        "name": "tag2"
    },
    {
        "id": 3,
        "name": "tag3"
    },
    {
        "id": 4,
        "name": "tag4"
    },
    {
        "id": 5,
        "name": "tag5"
    }
];
