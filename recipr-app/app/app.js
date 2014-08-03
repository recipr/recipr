import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
    modulePrefix: 'recipr-app', // TODO: loaded via config
    Resolver: Resolver,

    LOG_TRANSITIONS: true
});

loadInitializers(App, 'recipr-app');

export default App;
