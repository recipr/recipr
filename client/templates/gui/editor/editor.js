Template.editor.created = function(){
  this.length = new Blaze.ReactiveVar();
  this.length.set(0);
  this.visible = new Blaze.ReactiveVar();
  this.visible.set(false);
}

Template.editor.rendered = function(){
  var self = this;

  var template = Template.instance();
  var editor = template.find('.content');
  var toolbar = template.find('.toolbar')

  this.quill = new Quill(editor, {
    theme: 'snow'
  });
  this.quill.addModule('toolbar', { container: toolbar });

  this.quill.on('selection-change', function(range) {
    if (range !== null) {
      self.visible.set(true);
    }
  });

  self.length.set(self.quill.getLength());
  this.quill.on('text-change', function() {
    self.length.set(self.quill.getLength());
  });
}

Template.editor.helpers({
  empty: function(){
    return Template.instance().length.get() <= 1;
  },
  isVisible: function(){
    return Template.instance().visible.get();
  }
});