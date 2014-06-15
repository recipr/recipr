import 'dart:html';
import 'dart:async';
import 'package:polymer/polymer.dart';

@CustomTag('recipr-ingredient')
class ReciprIngredient extends PolymerElement {
    @published String simpleLabel = '';
    @published String placeholder = '';

    @observable String sketch = '';
    @observable String quantity = '';
    @observable String unit = '';
    @observable String name = '';

    Element sketchForm;
    Element detailedForm;

    RegExp exp = new RegExp(r"^([\d.,\/]*)(\s*([^\W]*)\s+(.*))?");

    StreamController _onCheck = new StreamController.broadcast();
    Stream get onCheck => _onCheck.stream;

    StreamController _onDelete = new StreamController.broadcast();
    Stream get onDelete => _onDelete.stream;

    ReciprIngredient.created() : super.created();

    @override
    void enteredView() {
        super.enteredView();
        sketchForm = this.shadowRoot.querySelector('#sketch');
        detailedForm = this.shadowRoot.querySelector('#detailed');
    }

    void save(Event evt){
        evt.preventDefault();
        _parseSketch();
    }

    void delete(Event evt){
        this.remove();
        _onDelete.add(true);
    }

    void _parseSketch(){
        if(sketch.length > 0){
            sketchForm.classes.remove('show');
            detailedForm.classes.add('show');

            sketch = _filterWhitespaces(sketch);
            Iterable<Match> matches = exp.allMatches(sketch);

            for (Match m in matches) {
                quantity = m.group(1) != null ? m.group(1) : '';
                unit = m.group(3) != null ? m.group(3) : '';
                name = m.group(4) != null ? m.group(4) : '';
            }

            _onCheck.add(true);
        }
    }

    String _filterWhitespaces(String raw){
        final filtered = raw.replaceAllMapped(new RegExp(r'[\s]{2,}'), (match) {
            return ' ';
        });
        return filtered.trim();
    }
}
