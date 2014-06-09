import 'package:polymer/polymer.dart';

@CustomTag('recipr-header')
class ReciprHeader extends PolymerElement {
  @observable String ingredient = "Potatoe";

  ReciprHeader.created() : super.created();
}
