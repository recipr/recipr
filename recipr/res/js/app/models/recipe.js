App.Recipe = DS.Model.extend({
    name: DS.attr('string'),
    url: DS.attr('string'),
    sections: DS.hasMany('section', { async: true }),
    tags: DS.hasMany('tag', { async: true })
});

App.Recipe.FIXTURES = [
    {
        "id": 1,
        "name": "Ground beef with carrots and mashed potatoes",
        "url": "http://www.example.com",
        "sections": [1],
        "tags": [1, 2, 3, 4, 5]
    },
    {
        "id": 2,
        "name": "Potato Mash",
        "url": "http://www.example.com"
    }
];
