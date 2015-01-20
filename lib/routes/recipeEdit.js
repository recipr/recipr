RecipeEditController = PrivateController.extend({
  template: 'recipe',
  
  waitOn:function(){
    return [
      Meteor.subscribe('Recipe', this.params._id),
      Meteor.subscribe('Ingredients', this.params._id),
      Meteor.subscribe('Settings')
    ];
  },

	data: function(){
    return LocalRecipes.findOne({_id: this.params._id});
  },

  onRun: function(){
    Session.set('hasContextMenu', true);
    this.next();
  },

  onStop: function(){
    Session.set('hasContextMenu', false);
  },

  onBeforeAction: function(){
    var recipe = Recipes.findOne({_id: this.params._id});
    if(recipe){
      LocalRecipes.remove({_id: recipe._id});
      LocalRecipes.insert(recipe);
    } else {
      Router.go('recipes');
    }

    this.next();
  }
});
