App = Ember.Application.create();

App.ReciprHeaderComponent = Ember.Component.extend({
    classNames: ['recipr-header']
});

App.ReciprUploadComponent = Ember.Component.extend({
    classNames: ['recipr-upload'],

    name: '',
    fileName: '',
    placeholder: '',
    label: '',
});