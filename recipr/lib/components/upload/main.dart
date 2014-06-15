library recipr_upload;

import 'dart:html';
import 'dart:async';
import 'package:polymer/polymer.dart';

@CustomTag('recipr-upload')
class ReciprUpload extends PolymerElement {
    @published String fileName = '';
    @published String name = '';
    @published String label = '';
    @published String placeholder = '';

    Element upload;
    InputElement fileInput;

    ReciprUpload.created() : super.created(){}

    StreamController _onChange = new StreamController.broadcast();
    Stream get onChange => _onChange.stream;

    @override
    void enteredView() {
        super.enteredView();
        upload = this.shadowRoot.querySelector('#upload');
        fileInput = this.shadowRoot.querySelector('#file');

        _eventBindings();
    }

    void _eventBindings(){
        upload.onClick.listen((_){
            fileInput.click();
        });

        upload.onDrop.listen((MouseEvent evt){
            evt.preventDefault();
            readFiles(evt.dataTransfer.files).then(_update);
        });

        fileInput.onChange.listen((Event evt){
            readFiles(fileInput.files).then(_update);
        });
    }

    void _update(String file){
        _onChange.add(file);
    }

    Future readFiles(List<File> files) {
        Completer compl = new Completer();
        if (files.length > 0) {
            File file = files[0];
            FileReader reader = new FileReader();
            reader.onLoad.listen((ProgressEvent evt){
                compl.complete(reader.result);
            });

            fileName = file.name;
            reader.readAsDataUrl(file);
        }
        return compl.future;
    }
}
