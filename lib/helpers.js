helpers = {
  findById: function(source, id) {
    for (var i = 0; i < source.length; i++) {
      if (source[i].id === id) {
        return source[i];
      }
    }
    return false;
  },

  saveSection: function(sectionId, data){
    var sections = Session.get('sections');
    var section = helpers.findById(sections, sectionId);

    if(section){
      section.name = data.name;
    }

    console.log('save section:');
    console.log(sections); 

    Session.set('sections', sections);
  }
}


