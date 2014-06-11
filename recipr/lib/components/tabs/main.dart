library recipr_tabs;

import 'package:polymer/polymer.dart';
import 'dart:html';

@CustomTag('recipr-tabs')
class ReciprTabs extends PolymerElement {
  @published String tab = '';

  List<Element> tabs = new List<Element>();

  ReciprTabs.created() : super.created(){
    tabs = this.querySelectorAll('[data-tab]');
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
       _setTab(newValue);
     }
  }

  void setTab(String name){
    _setTab(name);
  }

  void _setTab(String name){
    List<Element> active = tabs.where((Element tab) => tab.dataset['tab'] == name).toList();

    if(active.length > 0){
      tabs.forEach((Element tab){
        tab.classes.remove('active');
      });

      active[0].classes.add('active');
    }
  }
}
