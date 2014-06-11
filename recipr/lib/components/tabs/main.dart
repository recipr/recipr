import 'package:polymer/polymer.dart';
import 'dart:html';

@CustomTag('recipr-tabs')
class ReciprTabs extends PolymerElement {
  @published int tab = 0;

  List<Element> tabs = new List<Element>();

  ReciprTabs.created() : super.created(){
    tabs = this.querySelectorAll('.tab');
    Element wrap = this.shadowRoot.querySelector('.tabWrap');
    if (tabs == null) {
      return;
    }

    wrap.style.width = '${100 * tabs.length}%';

    tabs.forEach((Element tab){
      tab.style.width = '${100 / tabs.length}%';
    });

    _setTab(tab);
  }

  @override
  void attributeChanged(String name, String oldValue, String newValue) {
     if(name == 'tab'){
       _setTab(int.parse(newValue));
     }
  }

  void _setTab(int index){
    tabs.forEach((Element tab){
      tab.classes.remove('active');
    });
    tabs[index].classes.add('active');
  }
}
