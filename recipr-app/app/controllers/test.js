import Ember from 'ember';

export default Ember.ObjectController.extend({
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
        editStep: function(){
            alert('edit step');
        },
        addStep: function(stepContent){
     
            this.get('model').pushObject({
                index: this.get('model').length + 1,
                content: stepContent
            });
        },
    }
});
