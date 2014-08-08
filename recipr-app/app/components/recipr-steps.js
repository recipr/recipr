import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['recipr-steps'],
    addMode: false,
    stepContent: '',

    steps: [],

    actions: {
    	addStep: function(){
    		this.set('addMode', true); 
    	},
    	cancelAdd: function(){
    		this.set('addMode', false); 
    	},
    	saveStep: function(){
    		if(this.get('stepContent.length') === 0){
    			return;
    		}
    		this.set('addMode', false); 
    	}
    }
});
