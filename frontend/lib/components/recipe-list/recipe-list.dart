part of recipr;

@Component(
  selector: "recipe-list",
  templateUrl: 'packages/recipr/components/recipe-list/recipe-list.html',
  useShadowDom: false
)
class RecipeListComponent implements ScopeAware {
  List<Recipe> recipes;
  RecipeStorage storage;
  Router router;

  RecipeListComponent(this.storage, this.router) {
    recipes = storage.all;
  }

  void set scope(Scope scope){
    scope.on('delete-item').listen((event) => _deleteRecipe(event.data));
    scope.on('edit-item').listen((event) => _editRecipe(event.data));
  }

  void _deleteRecipe(Map data){
    if(data['type'] != 'recipe'){
      return;
    }

    storage.delete(data['id']);
    recipes = storage.all;
  }

  void _editRecipe(Map data){
    if(data['type'] != 'recipe'){
      return;
    }
    router.go("edit", {
      'recipeId': data['id']
    });
  }

}