import 'package:recipr/recipr.dart';
import 'package:polymer/polymer.dart';
import 'package:recipr/components/toggle/main.dart';
import 'package:recipr/components/tabs/main.dart';

import 'dart:html';

Recipr recipr;

void main() {
    initPolymer();

    ReciprTabs tab = querySelector('recipr-tabs');
    ReciprToggle toggle = querySelector('recipr-toggle');

    toggle.onToggle.listen((String value){
      tab.setTab(value);
    });
}

