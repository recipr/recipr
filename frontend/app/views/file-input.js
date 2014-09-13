import Ember from 'ember';

export default Ember.View.extend({
    type: 'file',
    attributeBindings: ['multiple'],
    multiple: false,
    files: [],

    change: function(e) {
        var input = e.target;
        if (!Ember.isEmpty(input.files)) {
            this.set('files', input.files);
        }
    }
});
