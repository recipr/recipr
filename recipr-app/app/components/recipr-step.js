import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['recipr-step'],
    classNameBindings: ['isEditable:edit'],

    index: false,
    content: '',
    isEditable: false,

    actions:{
        edit: function(){
            console.log('edit');

            this.set('isEditable', true);
        },
        save: function(){
            console.log('save');
            this.set('isEditable', false);
        }
    }
});
