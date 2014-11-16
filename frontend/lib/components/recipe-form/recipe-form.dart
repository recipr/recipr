part of recipr;

@Component(
  selector: "recipe-form",
  templateUrl: 'packages/recipr/components/recipe-form/recipe-form.html',
  useShadowDom: false
)
class RecipeFormComponent {
  Recipe recipe;
  RecipeStorage storage;
  Router router;
  NgForm recipeForm;

  @NgOneWay('path')
  String path;

  RecipeFormComponent(this.storage, this.router, RouteProvider routeProvider){
    recipe = storage.find(_recipeId(routeProvider));
    if(recipe != null){
      path = recipe.id;
    } else {
      recipe = new Recipe();
      path = 'new';
    }
  }

  void create() {
    recipe.date = '26.10.2014';

    var recipeId = storage.store(recipe);
    router.go("recipes", {});
  }

  String get titlePattern => r"(\w{3,})";

  String _recipeId(routeProvider) => routeProvider.parameters["recipeId"];
}