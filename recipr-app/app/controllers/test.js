import Ember from 'ember';

export default Ember.ObjectController.extend({
    model: {
        steps: [
            {
                index: 1,
                content: 'step1'
            },
            {
                index: 2,
                content: 'step2'
            }
        ]
    },

    actions: {
        editStep: function(){
            alert('edit step');
        }
    }
});
