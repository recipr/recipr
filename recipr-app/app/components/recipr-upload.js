import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['recipr-upload'],
    tagName: 'label',
    files: [],

    change: function(evt) {
        var input = evt.target;
        if (!Ember.isEmpty(input.files)) {
            this.set('files', input.files);
            this.getFile();
        }
    },

    getFile: function(){
        var file = this.get('files')[0];
        var reader = new FileReader();
        var instance = this;
        reader.onload = function(evt) {
            instance.sendAction('upload', {
                'file': file,
                'base64': reader.result
            });
        };
        reader.readAsDataURL(file);
    }
});
