import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    slug: DS.attr('string'),
    date: DS.attr('date'),

    formatedDate: function(){
      return moment(this.get('date')).format('LL');
    }.property('date')
});

