part of recipr;

@Injectable()
class RecipeSerializer {
  String serialize(Recipe recipe, String id){
    var map = {
        "id" : id,
        "title": recipe.title,
        'date': recipe.date,
        'cover': recipe.cover,
        'ingredients': recipe.ingredients
    };
    return JSON.encode(map);
  }

  Recipe deserialize(String str){
    var json = JSON.decode(str);
    Recipe recipe = new Recipe()
      ..id = json["id"]
      ..date = json['date']
      ..title = json["title"]
      ..cover = json["cover"];

    List<Map> ingredients = json['ingredients'];
    ingredients.forEach((Map data){
      recipe.ingredients.add(new Ingredient.fromMap(data));
    });

    return recipe;
  }
}
