library recipr;

import 'dart:html' as html;
import 'dart:async';
import 'dart:convert';

import 'package:angular/angular.dart';
import 'package:recipr_components/recipr_components.dart';
import 'package:angular/routing/module.dart';
import 'package:angular/animate/module.dart';
import 'package:uuid/uuid.dart';

part 'route_initializer.dart';
part 'global_http_interceptors.dart';

part 'models/recipe.dart';
part 'models/ingredient.dart';

part 'services/messages.dart';
part 'services/recipe_serializer.dart';
part 'services/recipe_storage.dart';

part 'components/recipe-list/recipe-list.dart';
part 'components/recipe-form/recipe-form.dart';
part 'components/recipe-ingredients/recipe-ingredients.dart';


class Recipr extends Module {
  Recipr(){

    //Recipr Components
    bind(HeaderComponent);
    bind(SidebarComponent);
    bind(MenuComponent);
    bind(MenuItemComponent);
    bind(DropdownComponent);
    bind(DropdownOptionComponent);
    bind(MultiDropdownOptionComponent);
    bind(EditItemComponent);
    bind(EditItemComponent);
    bind(ImageInputComponent);

    //Local components
    bind(RecipeListComponent);
    bind(RecipeFormComponent);
    bind(RecipeIngredientsComponent);

    bind(RouteInitializerFn, toValue: ReciprRouteInitializer);
    bind(NgRoutingUsePushState, toValue: new NgRoutingUsePushState.value(false));

    bind(RecipeSerializer);
    bind(RecipeStorage);

    bind(UrlRewriter, toImplementation: ReciprUrlRewriter);
    bind(ResourceResolverConfig, toValue: new ResourceResolverConfig.resolveRelativeUrls(false));

    install(new AnimationModule());
  }
}

@Injectable()
class ReciprUrlRewriter implements UrlRewriter {
  String call(url) =>
      url.startsWith('lib/') ? 'packages/recipr/${url.substring(4)}' : url;
}
