part of recipr;

void ReciprRouteInitializer(Router router, RouteViewFactory view) {
  view.configure({
    'dashboard' : ngRoute(
      path: '/dashboard',
      viewHtml: '<dashboard></dashboard>'
    ),
    'recipes' : ngRoute(
      path: '/recipes',
      view: 'views/recipes.html',
      defaultRoute: true
    ),
    "edit" : ngRoute(
      path: '/recipes/edit/:recipeId',
      viewHtml: '<recipe-form></recipe-form>',
      mount: {
        'ingredients': ngRoute(
          path: '/ingredients',
          viewHtml: '<recipe-ingredients recipe="recipe"></recipe-ingredients>',
          defaultRoute: true),
        'preparation': ngRoute(
          path: '/preparation',
          viewHtml: 'Preparation'),
      }
    ),
    'settings' : ngRoute(
      path: '/settings',
      viewHtml: '<settings></settings>'
    ),
  });
}

