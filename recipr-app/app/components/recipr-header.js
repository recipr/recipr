import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['recipr-header'],

    actions: {
        toggleSidebar: function(){
            this.sendAction('toggleSidebar');
        }
    }
});
