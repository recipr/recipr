import 'package:polymer/polymer.dart';
import 'dart:html';

@CustomTag('recipr-toggle')
class ReciprToggle extends PolymerElement {
  final List<SpanElement> options = toObservable([]);

  ReciprToggle.created() : super.created(){

    List<SpanElement> dataSource = this.querySelectorAll('span');
    if (dataSource == null) {
      return;
    }

    dataSource.forEach((SpanElement option){
        options.add(option);
        option.style.width = '${100 / dataSource.length}%';
        option.onClick.listen(_onOptionClick);
    });
  }

  void _onOptionClick(MouseEvent event){
    options.forEach((SpanElement option){
        option.classes.remove('active');
    });

    SpanElement target = event.target as SpanElement;
    target.classes.add('active');

    fire('onToggle', detail: {'value': target.getAttribute('value')});
  }
}
