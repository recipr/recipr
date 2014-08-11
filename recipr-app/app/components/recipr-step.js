import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['recipr-step'],
    classNameBindings: ['isEditable:edit'],
    step: null,
    openedStep: null,

    isEditable: function() {
        return this.get('openedStep') === this.get('step');
    }.property('openedStep', 'step'),

    actions:{
        edit: function(){
            this.set('openedStep', this.get('step'));
            this.sendAction('onEdit', this.get('step'));
        },
        save: function(){
            this.set('openedStep', null);
            if(this.get('step.content').trim().length === 0){
                this.sendAction('onDeleteStep', this.get('step'));
            }
        },
        delete: function(){
            this.sendAction('onDeleteStep', this.get('step'));
        }
    } 
});
