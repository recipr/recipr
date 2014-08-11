import Ember from 'ember';

export default Ember.ArrayController.extend({
    model: [
        {
            index: 1,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. '
        },    
        {
            index: 2,
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. '
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
