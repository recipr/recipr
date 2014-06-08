import 'package:polymer/polymer.dart';

@CustomTag('recipr-ingredient')
class ReciprIngredient extends PolymerElement {
  @observable String ingredient = "Potatoe";

  ReciprIngredient.created() : super.created(){
    print(ingredient);
  }
}
