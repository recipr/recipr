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

  self.length.set(self.quill.getLength());
  this.quill.on('text-change', function() {
    self.length.set(self.quill.getLength());
  });
}

Template.editor.events({
  'focus .editor': function(event, template){
    template.visible.set(true);
  },
  'blur .editor': function(event, template){
    template.visible.set(false);
  }
})

Template.editor.helpers({
  empty: function(){
    return Template.instance().length.get() <= 1;
  },
  isVisible: function(){
    return Template.instance().visible.get();
  }
});