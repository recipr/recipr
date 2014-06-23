App.ReciprIngredientComponent = Ember.Component.extend({
    classNames: ['recipr-ingredient'],
    isInSketchMode: true,

    sketch: '',
    name: '',
    quantity: '',
    unit: '',

    regex: /^([\d.,\/]*)(\s*([^\W]*)\s+(.*))?/i,

    actions: {
      add: function(){
        this.parseSketch();
        this.set('isInSketchMode', false);
      },
      reove: function(){
        this.remove();
      },
    },

    init: function(){
      this._super();
      if(this.get('name').length > 0){
        this.set('isInSketchMode', false);
      }
    },

    parseSketch: function(){
        this.set('sketch', this.filterWhitespaces(this.get('sketch')));
        var match = this.regex.exec(this.get('sketch'));
        this.set('quantity', match[1]);
        this.set('unit', match[3]);
        this.set('name', match[4]);
    },

    filterWhitespaces: function(text){
        return text.replace(/\s{2,}/g, ' ').trim();
    }
});
