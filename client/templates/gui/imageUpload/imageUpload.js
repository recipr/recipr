Template.imageUpload.created = function(){
  this.src = new Blaze.ReactiveVar();
  this.src.set(null);
}

Template.imageUpload.events({
  'change .upload': function(event, template){

    var allowedTypes = [
      'image/jpeg',
      'image/png'
    ];

    var input = event.target;

    // Do we have a file?
    if (input.files === null || input.files.length === 0) {
      return false;
    }

    var image = input.files[0];

    // Is the file a image?
    var index = allowedTypes.indexOf(image.type);
    if(index == -1){
      return false;
    }

    var reader = new FileReader();

    reader.onload = function(event) {
      template.src.set(reader.result);
    }

    reader.readAsDataURL(image);
  }
});

Template.imageUpload.helpers({
  src: function(){
    return Template.instance().src.get();
  },

  placeholder: function(){
    return this.placeholder;
  },

  noImage: function(){
    return Template.instance().src.get() === null;
  }
});