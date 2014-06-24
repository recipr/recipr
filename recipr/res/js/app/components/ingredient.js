App.ReciprIngredientComponent = Ember.Component.extend({
    classNames: ['recipr-ingredient'],

    sketch: '',
    quantity: '',
    unit: '',
    name: '',

    ingredient: null,
    section: null,

    isSketch: function(){
      var length = this.get('name.length');
      return length < 1;
    }.property('name'),

    regex: /^([\d.,\/]*)(\s*([^\W]*)\s+(.*))?/i,

    actions: {
      add: function(){
        this.parseSketch();
        if(this.get('name.length') > 0){
          this.sendAction('add', {
            'section': this.get('section'),
            'quantity': this.get('quantity'),
            'unit': this.get('unit'),
            'name': this.get('name')
          });
        }
      },
      remove: function(){
        this.sendAction('remove', this.get('ingredient'));
      },
    },

    parseSketch: function(){
        this.set('sketch', this.filterWhitespaces(this.get('sketch')));
        var match = this.regex.exec(this.get('sketch'));
        this.set('quantity', match[1] ? match[1] : "1");
        this.set('unit', match[3] ? match[3] : "");
        this.set('name', match[4] ? match[4] : "");
    },

    filterWhitespaces: function(text){
        return text.replace(/\s{2,}/g, ' ').trim();
    }
});
