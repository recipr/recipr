import Ember from 'ember';

export function dateFormat(input) {
  return moment(input).format('LL');
}

export default Ember.Handlebars.makeBoundHelper(dateFormat);
