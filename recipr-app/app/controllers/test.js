import Ember from 'ember';

export default Ember.ArrayController.extend({
    model: [
        {
            index: 1,
            content: 'step1'
        },    
        {
            index: 2,
            content: 'step2'
        }
    ],

    actions: {
        addStep: function(stepContent){
            this.get('model').pushObject({
                index: this.get('model').length + 1,
                content: stepContent
            });
        },
        deleteStep: function(step){
            var other = this.get('model').filter(function(otherStep){
                if(step !== otherStep){
                    return true;
                }
            });

            this.set('model', other);            
        }
    }
});
