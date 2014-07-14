App.ReciprHeaderComponent = Ember.Component.extend({
    classNames: ['recipr-header'],

    actions: {
        toggleSidebar: function(){
            this.sendAction('toggleSidebar');
        }
    }
});
