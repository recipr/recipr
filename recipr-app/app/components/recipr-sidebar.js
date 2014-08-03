import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['recipr-sidebar'],
    classNameBindings: ['show:show'],

    show: false
});
