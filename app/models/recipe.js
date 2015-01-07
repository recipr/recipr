import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string', {defaultValue: ''}),
    slug: DS.attr('string'),
    date: DS.attr('date'),

    ingredients: DS.hasMany('ingredient', {async: true}),

    formatedDate: function(){
      return moment(this.get('date')).format('LL');
    }.property('date')
});

