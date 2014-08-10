import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['recipr-steps'],
    addMode: false,
    error: false,

    stepContent: '',
    openedStep: null,

    steps: [],

    actions: {
    	startEdit: function(step){
    	   	this.set('addMode', false); 
    		this.set('error', false);
    		this.set('stepContent', '');
    		this.set('openedStep', step);
    	},

    	addStep: function(){
    		this.set('addMode', true); 
    		this.set('openedStep', null);
    	},
    	cancelAdd: function(){
    		this.set('addMode', false); 
    		this.set('error', false);
    		this.set('stepContent', '');
    	},
    	saveStep: function(){
    		this.set('stepContent', this.get('stepContent').trim());
    		if(this.get('stepContent.length') === 0){
    			this.set('error', true);
    			return;
    		}
    		this.set('error', false);
    		this.set('addMode', false); 
    		this.sendAction('addStep', this.get('stepContent'));
    		this.set('stepContent', '');
    	}
    }
});
