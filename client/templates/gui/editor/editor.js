Template.editor.created = function(){
  this.length = new Blaze.ReactiveVar();
  this.length.set(0);
}

Template.editor.rendered = function(){
  var self = this;

  var template = Template.instance();
  var editor = template.find('.content');
  var toolbar = template.find('.toolbar')

  this.quill = new Quill(editor);
  this.quill.addModule('toolbar', { container: toolbar });
  self.length.set(self.quill.getLength());


  this.quill.on('text-change', function() {
    self.length.set(self.quill.getLength());
  });
}

Template.editor.helpers({
  empty: function(){
    return Template.instance().length.get() <= 1;
  }
});