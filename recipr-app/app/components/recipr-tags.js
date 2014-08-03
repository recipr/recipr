import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['recipr-tags'],

    tags: [],
    newTag: '',

    actions: {
        removeTag: function(tag){
            this.sendAction('remove', tag);
        }
    },

    keyDown: function(evt) {
        var code = evt.keyCode;
        switch(code){
            case 13:
            case 32:
                this.addTag();
                evt.preventDefault();
                break;
            case 8:
                this.removeLastTag(evt);
                break;
        }
    },

    addTag: function() {
        this.sendAction('add', this.get('newTag'));
        this.set('newTag', '');
    },

    removeLastTag: function(evt) {
        if(this.get('newTag.length') > 0) {
            return;
        }
        evt.preventDefault();
        this.sendAction('remove');
    }
});
