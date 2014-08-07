import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['recipr-step'],
    classNameBindings: ['isEditable:edit'],

    index: false,
    content: '',
    isEditable: false,

    editableObserver: function() {
        if(this.get('isEditable') === true){
            this.sendAction('onEdit');
        }
    }.observes('isEditable'),

    actions:{
        edit: function(){
            this.set('isEditable', true);
        },
        save: function(){
            this.set('isEditable', false);
        }
    }
});
