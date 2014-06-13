library recipr_tabs;

import 'package:polymer/polymer.dart';


@CustomTag('recipr-textarea')
class ReciprTextarea extends PolymerElement {
    @published String content = '';

    ReciprTextarea.created() : super.created(){

    }
}
