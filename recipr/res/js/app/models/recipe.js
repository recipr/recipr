App.Recipe = DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  sections: DS.hasMany('section')
});

App.Recipe.FIXTURES = [
 {
   "id": 1,
   "name": "Ground beef with carrots and mashed potatoes",
   "url": "http://www.example.com",
 }
];
