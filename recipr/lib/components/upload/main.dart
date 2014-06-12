library recipr_tabs;

import 'package:polymer/polymer.dart';


@CustomTag('recipr-upload')
class ReciprUpload extends PolymerElement {
    @published String value = '';
    @published String name = '';
    @published String label = '';
    @published String placeholder = '';


    ReciprUpload.created() : super.created(){

    }
}
