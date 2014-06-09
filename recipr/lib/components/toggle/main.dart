import 'package:polymer/polymer.dart';
import 'dart:html';

@CustomTag('recipr-toggle')
class ReciprToggle extends PolymerElement {
  @published String options;

  List<SpanElement> optionElements = new List<SpanElement>();

  ReciprToggle.created() : super.created(){
    Element optionsWrap = this.shadowRoot.querySelector('#options');

    List<String> optionsList = options.split(',');
    optionsList.forEach((String name){
        SpanElement option = new SpanElement();
        option.innerHtml = name;
        option.style.width = '${100 / optionsList.length}%';
        optionsWrap.append(option);
        optionElements.add(option);

        option.onClick.listen(onOptionClick);
    });
  }

  void onOptionClick(Event evt){
    optionElements.forEach((option){
       option.classes.remove('active');
    });

    Element target = evt.target;
    target.classes.add('active');
    fire('recipr-toggle', detail: {'name': target.innerHtml});
  }
}
