part of recipr;

@Injectable()
class RecipeStorage {
  RecipeSerializer serializer;

  RecipeStorage(this.serializer);

  List get all => _s.keys
      .where((k) => k.startsWith('recipe:'))
      .map(_fetch).toList();

  String store(Recipe recipe){
    var id = _getId(recipe);
    _s[id] = serializer.serialize(recipe, id);
    return id;
  }

  void delete(String id){
    _s.remove('${id}');
  }

  find(String id) => _s.containsKey(id) ? _fetch(id) : null;

  String _getId(recipe) => recipe.id != null ? recipe.id  : 'recipe:${new Uuid().v4()}';

  _fetch(id) => serializer.deserialize(_s[id]);

  html.Storage get _s => html.window.localStorage;
}
