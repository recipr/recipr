import 'package:recipr/recipr.dart';
import 'package:polymer/polymer.dart';
import 'package:recipr/components/toggle/main.dart';
import 'package:recipr/components/tabs/main.dart';
import 'package:recipr/components/upload/main.dart';

import 'dart:html';

Recipr recipr;

void main() {
    initPolymer();

    ReciprTabs tab = querySelector('recipr-tabs');
    ReciprToggle toggle = querySelector('recipr-toggle');
    ReciprUpload coverUpload = querySelector('.coverUpload');
    Element cover = querySelector('.cover');

    toggle.onToggle.listen((String value){
      tab.setTab(value);
    });

    coverUpload.onChange.listen((String img){
        ImageElement image = new ImageElement();
        image..src = img
             ..classes.add('coverImage');

        cover..innerHtml = ''
             ..append(image);
    });
}

