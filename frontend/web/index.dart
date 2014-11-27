library recipr_app;

import 'package:angular/angular.dart';
import 'package:recipr/recipr.dart';
import 'package:angular/application_factory.dart';
import 'package:logging/logging.dart';

void main() {
  Logger.root.level = Level.FINEST;
  Logger.root.onRecord.listen((LogRecord r) { print(r.message); });

  Application app = applicationFactory();
  app.modules.add(new Recipr());
  final inj = app.run();
  GlobalHttpInterceptors.setUp(inj);
}
