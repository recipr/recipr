import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['recipr-steps'],
    inEditMode: false,

    steps: [],

    actions: {
    	addStep: function(){
    		this.get('steps').pushObject({index: this.get('steps.length')+1, content: '', isEditable: true});
    		this.set('inEditMode', true);
    	}
    }
});
