Template.editor.rendered = function(){

  var template = Template.instance();
  var editor = template.find('.content');
  var toolbar = template.find('.toolbar')

  this.quill = new Quill(editor);
  this.quill.addModule('toolbar', { container: toolbar });
}

Template.editor.events({
  "keyup .content": function(event, template){
    console.log(template.quill.getContents());
  }
});