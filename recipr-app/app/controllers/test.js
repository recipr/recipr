import Ember from 'ember';

export default Ember.ObjectController.extend({
    model: {
        steps: [
            'step1',
            'step2',
            'step3'
        ]
    }
});
